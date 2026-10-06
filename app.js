'use strict';
/* Namens-Swipe – Logik. Daten (Namen) stehen in names.js, Datenbankregeln in database.rules.json. */

/* ---------- Firebase-Konfiguration (öffentlich, kein Geheimnis; Schutz erfolgt über die Datenbankregeln) ---------- */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAEo8D1VYQmlm5gCW5fRxXwwxEkPi-WDd8",
  authDomain: "wombatsisname.firebaseapp.com",
  databaseURL: "https://wombatsisname-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wombatsisname",
  appId: "1:752373213450:web:fb9d9b66f3f6740fd532f3"
};

(() => {
  const FB_ON = typeof firebase !== "undefined";
  const MAX_NAME = 40, MIN_ROOM = 6, MAX_ROOM = 60;

  /* ---------- Hilfsfunktionen ---------- */
  const $ = s => document.querySelector(s);
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function toast(t) {
    const e = $("#toast"); e.textContent = t; e.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove("on"), 2400);
  }
  const safeKey = n => typeof n === "string" && n.length > 0 && n.length <= MAX_NAME && !/[.$#\[\]\/]/.test(n);

  /* ---------- Namen ----------
     Stimmen, Reihenfolge und Vergleich hängen am Namenstext, nicht an der Position in der Liste. */
  const NAMES = [], BYNAME = {};
  NAMEDATA.trim().split("\n").forEach(line => {
    const [n, g, origin = "", meaning = "", tags = ""] = line.split("|").map(x => x.trim());
    if (!safeKey(n) || BYNAME[n]) return;
    BYNAME[n] = { n, g, origin, meaning, tags: tags.split(",").filter(Boolean) };
    NAMES.push(BYNAME[n]);
  });
  function hash(s) { let h = 2166136261; for (const c of s + "|ns1") { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  /* Feste Reihenfolge für alle Nutzer, unabhängig von der Listenposition */
  const ORDER = NAMES.map(x => x.n).sort((a, b) => hash(a) - hash(b));

  /* ---------- Pakete ---------- */
  const PACKS = [
    { id: "all", label: "Alle", test: () => true },
    { id: "m", label: "Jungs", test: x => x.g === "m" },
    { id: "u", label: "Unisex", test: x => x.g === "u" },
    { id: "bay", label: "Bayerisch", test: x => x.tags.includes("bay") },
    { id: "schwaeb", label: "Schwäbisch", test: x => x.tags.includes("schwaeb") },
    { id: "nord", label: "Nordisch", test: x => /nordisch|skandinav|dänisch|schwedisch|friesisch|plattdeutsch|niederdeutsch/i.test(x.origin) },
    { id: "bibel", label: "Biblisch", test: x => /hebräisch|aramäisch/i.test(x.origin) },
    { id: "antik", label: "Antik", test: x => /lateinisch|griechisch/i.test(x.origin) },
    { id: "kurz", label: "Kurz", test: x => [...x.n].length <= 4 }
  ];
  let pack = "all";
  try { const p = localStorage.getItem("namenswipe.pack"); if (PACKS.some(x => x.id === p)) pack = p; } catch (e) { /* Speicher nicht verfügbar */ }
  const inPack = (n, id) => PACKS.find(p => p.id === id).test(BYNAME[n]);

  /* ---------- Zustand (pro Konto getrennt gespeichert) ---------- */
  const blank = () => ({ votes: {}, history: [], myName: "", room: "", pName: "", pCode: "" });
  const str = (v, max) => (typeof v === "string" ? v.slice(0, max) : "");
  function sanitizeVotes(v) {
    const out = {};
    if (v && typeof v === "object") for (const n of Object.keys(v)) if (BYNAME[n] && (v[n] === 1 || v[n] === 2)) out[n] = v[n];
    return out;
  }
  function loadState(id) {
    const s = blank();
    try {
      let raw = localStorage.getItem("namenswipe.v3." + id);
      if (!raw && id === "local") raw = localStorage.getItem("namenswipe.v2");   // Übernahme alter Version
      const o = JSON.parse(raw || "{}");
      s.votes = sanitizeVotes(o.votes);
      s.history = Array.isArray(o.history) ? o.history.filter(n => BYNAME[n] && s.votes[n]).slice(-500) : [];
      s.myName = str(o.myName, MAX_NAME); s.room = str(o.room, MAX_ROOM);
      s.pName = str(o.pName, MAX_NAME); s.pCode = str(o.pCode, 20000);
    } catch (e) { /* kaputte Daten ignorieren */ }
    return s;
  }
  let identity = "local";
  let state = loadState(identity);
  function save() { try { localStorage.setItem("namenswipe.v3." + identity, JSON.stringify(state)); } catch (e) { /* Speicher voll/gesperrt */ } }

  /* ---------- Firebase ---------- */
  let auth = null, db = null, user = null;
  let membersRef = null, partnerRef = null, partnerUid = null, partnerVotes = null, members = {}, mySlot = null;

  function userRef(path) { return db.ref("users/" + user.uid + (path ? "/" + path : "")); }
  function pushVote(n) {
    if (!user || !safeKey(n)) return;
    const r = userRef("votes/" + n);
    (state.votes[n] ? r.set(state.votes[n]) : r.remove()).catch(() => toast("Speichern in der Cloud fehlgeschlagen"));
  }
  function detachRoom() {
    if (membersRef) membersRef.off(); if (partnerRef) partnerRef.off();
    membersRef = partnerRef = null; partnerUid = null; partnerVotes = null; members = {}; mySlot = null;
  }
  const roomKey = s => s.trim().toLowerCase().replace(/[^a-z0-9äöüß_-]/g, "-").slice(0, MAX_ROOM);

  function setRoomUi(connected, text) {
    $("#leave").hidden = !connected;
    $("#roomStatus").textContent = text;
  }
  async function joinRoom(code, silent) {
    const room = roomKey(code);
    if (!user) return;
    if (room.length < MIN_ROOM) return silent || toast(`Raum-Code: mindestens ${MIN_ROOM} Zeichen`);
    detachRoom();
    const name = state.myName.trim().slice(0, MAX_NAME) || "Partner";
    setRoomUi(false, "Verbinde …");
    const slot = s => db.ref(`rooms/${room}/${s}`).set({ uid: user.uid, name });
    try {
      await userRef().update({ room, name });
      try { await slot("p1"); } catch (e) { await slot("p2"); }   // zwei Plätze pro Raum
    } catch (e) {
      userRef("room").remove().catch(() => {});
      setRoomUi(false, "Nicht verbunden.");
      return toast("Verbinden fehlgeschlagen (Raum evtl. schon voll?)");
    }
    state.room = room; save(); $("#room").value = room;
    membersRef = db.ref(`rooms/${room}`);
    membersRef.on("value", snap => {
      const v = snap.val() || {};
      members = {}; mySlot = null;
      for (const s of ["p1", "p2"]) if (v[s] && typeof v[s].uid === "string") { members[v[s].uid] = str(v[s].name, MAX_NAME); if (v[s].uid === user.uid) mySlot = s; }
      const pid = Object.keys(members).find(k => k !== user.uid) || null;
      attachPartner(pid);
      setRoomUi(true, `Verbunden mit Raum „${room}“ · ${pid ? "Partner: " + (members[pid] || "Partner") : "Warte auf Partner …"}`);
      renderResult();
    }, () => toast("Raum konnte nicht gelesen werden"));
  }
  function attachPartner(pid) {
    if (pid === partnerUid) return;
    if (partnerRef) partnerRef.off();
    partnerRef = null; partnerUid = pid; partnerVotes = null;
    if (!pid) return;
    partnerRef = db.ref(`users/${pid}/votes`);
    partnerRef.on("value", snap => { partnerVotes = sanitizeVotes(snap.val()); renderResult(); }, () => toast("Bewertungen des Partners nicht lesbar"));
  }
  async function leaveRoom() {
    const room = state.room, slot = mySlot;
    detachRoom();
    if (user && room) {
      if (slot) await db.ref(`rooms/${room}/${slot}`).remove().catch(() => {});
      await userRef("room").remove().catch(() => {});
    }
    state.room = ""; save(); $("#room").value = ""; setRoomUi(false, "Nicht verbunden."); $("#result").replaceChildren();
  }

  async function syncDown() {
    const u = user;
    try {
      const v = (await userRef().once("value")).val() || {};
      if (user !== u) return;
      const cloud = sanitizeVotes(v.votes);
      if (!Object.keys(cloud).length) {
        const guest = loadState("local");
        if (Object.keys(guest.votes).length && confirm("Auf diesem Gerät gibt es Bewertungen ohne Konto. In dein Konto übernehmen?")) Object.assign(state.votes, guest.votes);
      }
      const merged = Object.assign({}, state.votes, cloud);     // Cloud hat bei Konflikten Vorrang
      const upd = {};
      for (const n in merged) if (cloud[n] !== merged[n]) upd["votes/" + n] = merged[n];
      state.votes = merged;
      state.history = state.history.filter(n => state.votes[n]);
      if (!state.myName) state.myName = str(v.name, MAX_NAME) || str(u.displayName, MAX_NAME) || str((u.email || "").split("@")[0], MAX_NAME);
      if (str(v.name, MAX_NAME) !== state.myName.slice(0, MAX_NAME)) upd.name = state.myName.slice(0, MAX_NAME);
      save();
      if (Object.keys(upd).length) await userRef().update(upd);
      renderAll();
      const room = str(v.room, MAX_ROOM) || state.room;
      if (room) joinRoom(room, true);
    } catch (e) {
      toast("Cloud-Daten konnten nicht geladen werden (Datenbankregeln gesetzt?)");
    }
  }

  function switchIdentity(id) {
    detachRoom();
    identity = id; state = loadState(id);
    $("#result").replaceChildren();
    setRoomUi(false, "Nicht verbunden.");
    renderAll();
  }

  /* ---------- Login ---------- */
  const AUTH_ERR = {
    "auth/invalid-email": "Ungültige E-Mail-Adresse.",
    "auth/missing-password": "Bitte ein Passwort eingeben.",
    "auth/weak-password": "Passwort zu schwach (mindestens 6 Zeichen).",
    "auth/email-already-in-use": "Für diese E-Mail gibt es schon ein Konto.",
    "auth/invalid-credential": "E-Mail oder Passwort falsch.",
    "auth/wrong-password": "E-Mail oder Passwort falsch.",
    "auth/user-not-found": "E-Mail oder Passwort falsch.",
    "auth/too-many-requests": "Zu viele Versuche. Bitte später erneut probieren.",
    "auth/network-request-failed": "Keine Verbindung.",
    "auth/popup-closed-by-user": "Anmeldung abgebrochen.",
    "auth/operation-not-allowed": "Diese Anmeldeart ist in Firebase noch nicht aktiviert.",
    "auth/unauthorized-domain": "Diese Domain ist in Firebase nicht als autorisiert eingetragen."
  };
  const authMsg = t => { $("#authMsg").textContent = t; };
  async function authAction(fn) {
    authMsg("");
    try { await fn(); } catch (e) { authMsg(AUTH_ERR[e.code] || "Anmeldung fehlgeschlagen."); }
  }
  const creds = () => [$("#email").value.trim(), $("#password").value];
  function showAuth(on) { $("#auth").hidden = !on; if (on) $("#email").focus(); }
  const skipped = () => { try { return sessionStorage.getItem("namenswipe.skip") === "1"; } catch (e) { return false; } };

  /* ---------- Swipen ---------- */
  const GL = { m: "Junge", u: "Unisex" };
  const pool = () => ORDER.filter(n => inPack(n, pack));
  const queue = () => pool().filter(n => !state.votes[n]);

  function renderPacks() {
    const box = $("#packs"); box.replaceChildren();
    for (const p of PACKS) {
      const left = ORDER.filter(n => !state.votes[n] && p.test(BYNAME[n])).length;
      const b = el("button", "chip" + (p.id === pack ? " on" : "") + (left ? "" : " done"), `${p.label} · ${left ? left : "✓"}`);
      b.dataset.p = p.id; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", String(p.id === pack));
      box.appendChild(b);
    }
  }
  function renderStage() {
    const q = queue(), st = $("#stage"), total = pool().length, done = total - q.length;
    $("#prog").style.width = (total ? done / total * 100 : 0) + "%";
    $("#progTxt").textContent = `${done} von ${total} bewertet`;
    $("#countTxt").textContent = `💚 ${Object.values(state.votes).filter(v => v === 1).length}`;
    renderPacks();
    st.replaceChildren();
    if (!q.length) {
      const e = el("div", "empty", "🎉 Alle Namen in diesem Paket bewertet!"); e.appendChild(el("br"));
      e.appendChild(document.createTextNode("Wähl ein anderes Paket oder schau bei „Vergleich“ nach Übereinstimmungen."));
      st.appendChild(e); return;
    }
    if (q[1] !== undefined) st.appendChild(makeCard(q[1], true));
    st.appendChild(makeCard(q[0], false));
    attachDrag(st.lastChild, q[0]);
  }
  function makeCard(n, back) {
    const x = BYNAME[n], c = el("div", "card" + (back ? " back" : ""));
    c.append(el("div", "stamp l", "GUT"), el("div", "stamp n", "NEIN"), el("div", "name", n),
      el("div", "sub", `${x.origin} · ${GL[x.g] || ""}`), el("div", "meaning", x.meaning));
    return c;
  }
  function vote(n, v, card) {
    state.votes[n] = v; state.history.push(n); if (state.history.length > 500) state.history.shift();
    save(); pushVote(n);
    if (card) {
      card.style.transition = "transform .25s, opacity .25s";
      card.style.transform = `translate(${v === 1 ? 600 : -600}px,0) rotate(${v === 1 ? 30 : -30}deg)`; card.style.opacity = 0;
      setTimeout(renderStage, 200);
    } else renderStage();
  }
  function attachDrag(card, n) {
    let sx = 0, sy = 0, dx = 0, drag = false;
    const l = card.querySelector(".stamp.l"), nn = card.querySelector(".stamp.n");
    card.addEventListener("pointerdown", e => { drag = true; sx = e.clientX; sy = e.clientY; card.setPointerCapture(e.pointerId); card.style.transition = "none"; });
    card.addEventListener("pointermove", e => {
      if (!drag) return; dx = e.clientX - sx;
      card.style.transform = `translate(${dx}px,${(e.clientY - sy) * .3}px) rotate(${dx / 15}deg)`;
      l.style.opacity = Math.max(0, Math.min(1, dx / 100)); nn.style.opacity = Math.max(0, Math.min(1, -dx / 100));
    });
    const end = () => {
      if (!drag) return; drag = false;
      if (dx > 100) vote(n, 1, card); else if (dx < -100) vote(n, 2, card);
      else { card.style.transition = "transform .2s"; card.style.transform = ""; l.style.opacity = nn.style.opacity = 0; }
      dx = 0;
    };
    card.addEventListener("pointerup", end); card.addEventListener("pointercancel", end);
  }
  const lastCard = () => $("#stage .card:last-child");
  $("#bLike").onclick = () => { const n = queue()[0]; if (n !== undefined) vote(n, 1, lastCard()); };
  $("#bNope").onclick = () => { const n = queue()[0]; if (n !== undefined) vote(n, 2, lastCard()); };
  $("#bUndo").onclick = () => {
    const n = state.history.pop(); if (n === undefined) return toast("Nichts zum Zurücknehmen");
    delete state.votes[n]; save(); pushVote(n); renderStage();
  };
  document.addEventListener("keydown", e => {
    if (!$("#v-swipe").classList.contains("on") || !$("#auth").hidden || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (e.key === "ArrowRight") $("#bLike").click(); else if (e.key === "ArrowLeft") $("#bNope").click(); else if (e.key === "Backspace") $("#bUndo").click();
  });
  $("#packs").onclick = e => {
    const b = e.target.closest(".chip"); if (!b) return;
    pack = b.dataset.p;
    try { localStorage.setItem("namenswipe.pack", pack); } catch (err) { /* egal */ }
    renderStage();
  };

  /* ---------- Listen ---------- */
  function tagList(list) {
    if (!list.length) return el("p", "hint", "Noch nichts.");
    const box = el("div", "tags");
    for (const n of list) { const t = el("span", "tag", n); t.dataset.n = n; box.appendChild(t); }
    return box;
  }
  function rowList(list) {
    if (!list.length) return el("p", "hint", "Noch nichts.");
    const box = el("div", "rows");
    for (const n of list) {
      const r = el("div", "rowitem"); r.appendChild(el("b", "", n));
      r.appendChild(el("small", "", `${BYNAME[n].origin} · ${BYNAME[n].meaning}`)); box.appendChild(r);
    }
    return box;
  }
  function renderMine() {
    const by = v => ORDER.filter(n => state.votes[n] === v);
    const L = by(1), D = by(2), body = $("#mineBody"); body.replaceChildren();
    const reset = el("button", "btn ghost mt", "Alles zurücksetzen"); reset.id = "reset";
    body.append(el("h2", "first", `💚 Gefällt mir (${L.length})`), tagList(L), el("h2", "", `✖️ Gefällt nicht (${D.length})`), tagList(D),
      el("p", "hint", "Tippe einen Namen an, um ihn auf die Gegenseite zu verschieben."), reset);
  }
  $("#mineBody").onclick = e => {
    if (e.target.id === "reset") {
      if (!confirm("Wirklich alle Bewertungen löschen?")) return;
      const old = Object.keys(state.votes); state.votes = {}; state.history = []; save(); old.forEach(pushVote); renderMine(); renderStage(); return;
    }
    const t = e.target.closest(".tag"); if (!t || !BYNAME[t.dataset.n]) return;
    const n = t.dataset.n; state.votes[n] = state.votes[n] === 1 ? 2 : 1; save(); pushVote(n); renderMine(); renderStage();
  };

  /* ---------- Vergleich ---------- */
  function showResult(me, pa, mine, theirs) {
    const g = { match: [], iLikePDis: [], pLikeIDis: [], bothNo: [], open: [] };
    let overlap = 0;
    for (const n of ORDER) {
      const a = mine[n], b = theirs[n];
      if (!a || !b) { if (a === 1 || b === 1) g.open.push(n); continue; }
      overlap++;
      if (a === 1 && b === 1) g.match.push(n); else if (a === 1) g.iLikePDis.push(n); else if (b === 1) g.pLikeIDis.push(n); else g.bothNo.push(n);
    }
    const cnt = o => Object.keys(sanitizeVotes(o)).length, box = el("div", "box");
    const sum = el("div"); sum.append(el("b", "", String(overlap)), document.createTextNode(` Namen von euch beiden bewertet · ${me}: ${cnt(mine)} · ${pa}: ${cnt(theirs)}`));
    box.appendChild(sum);
    const out = $("#result"); out.replaceChildren(box,
      el("h2", "", `🎉 Beide mögen (${g.match.length})`), rowList(g.match),
      el("h2", "", `${me} mag, ${pa} nicht (${g.iLikePDis.length})`), tagList(g.iLikePDis),
      el("h2", "", `${pa} mag, ${me} nicht (${g.pLikeIDis.length})`), tagList(g.pLikeIDis),
      el("h2", "", `Beide lehnen ab (${g.bothNo.length})`), tagList(g.bothNo));
    if (g.open.length) out.append(el("h2", "", `Nur einer hat bewertet, gefällt (${g.open.length})`), tagList(g.open));
  }
  function renderResult() {
    if (user && partnerUid && partnerVotes) showResult(state.myName || "Du", str(members[partnerUid], MAX_NAME) || "Partner", state.votes, partnerVotes);
    else if (user && state.room) $("#result").replaceChildren();
  }

  /* Austausch per Code ohne Konto */
  const b64 = s => btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const unb64 = s => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0)));
  function encode(votes) {
    const l = [], d = [];
    for (const n in votes) (votes[n] === 1 ? l : d).push(n);
    return "2." + b64(JSON.stringify({ l, d }));
  }
  function decode(code) {
    code = code.trim().slice(0, 20000);
    const m = code.match(/[#&?]p=([^&\s]+)/); if (m) code = decodeURIComponent(m[1]);
    const [v, d] = code.split(".");
    if (v !== "2" || !d) throw new Error("Ungültiger Code");
    const o = JSON.parse(unb64(d)), votes = {};
    if (Array.isArray(o.l)) o.l.forEach(n => { if (BYNAME[n]) votes[n] = 1; });
    if (Array.isArray(o.d)) o.d.forEach(n => { if (BYNAME[n]) votes[n] = 2; });
    return votes;
  }
  const myCode = () => encode(state.votes);
  const link = () => location.href.split("#")[0] + "#p=" + myCode();
  async function copy(txt) { try { await navigator.clipboard.writeText(txt); toast("Kopiert ✓"); } catch (e) { toast("Kopieren nicht möglich – bitte manuell markieren"); } }
  $("#copyLink").onclick = () => copy(link());
  $("#copyCode").onclick = () => copy(myCode());
  $("#doCompare").onclick = () => {
    let pv;
    try { pv = decode($("#pCode").value); } catch (err) { return toast("Ungültiger Code"); }
    showResult(state.myName || "Du", state.pName || "Partner", state.votes, pv);
    $("#result").scrollIntoView({ behavior: "smooth" });
  };

  function setupCompare() {
    $("#accountIn").hidden = !user; $("#accountOut").hidden = !!user || !FB_ON;
    $("#roomBox").hidden = !user;
    if (user) $("#accountName").textContent = user.email || user.displayName || "";
    $("#myName").value = state.myName; $("#room").value = state.room; $("#pName").value = state.pName; $("#pCode").value = state.pCode;
    $("#myCode").value = myCode();
  }
  $("#myName").onchange = e => {
    state.myName = e.target.value.slice(0, MAX_NAME); save();
    if (!user) return;
    userRef("name").set(state.myName).catch(() => {});
    if (state.room && mySlot) db.ref(`rooms/${state.room}/${mySlot}`).set({ uid: user.uid, name: state.myName || "Partner" }).catch(() => {});
  };
  $("#pName").oninput = e => { state.pName = e.target.value.slice(0, MAX_NAME); save(); };
  $("#pCode").oninput = e => { state.pCode = e.target.value.slice(0, 20000); save(); };
  $("#join").onclick = () => joinRoom($("#room").value, false);
  $("#leave").onclick = leaveRoom;
  $("#btnLogout").onclick = () => auth.signOut();
  $("#btnShowLogin").onclick = () => showAuth(true);

  /* ---------- Navigation ---------- */
  function renderAll() { renderStage(); if ($("#v-mine").classList.contains("on")) renderMine(); if ($("#v-compare").classList.contains("on")) setupCompare(); }
  function show(v) {
    document.querySelectorAll("nav button").forEach(b => b.classList.toggle("on", b.dataset.v === v));
    document.querySelectorAll(".view").forEach(s => s.classList.toggle("on", s.id === "v-" + v));
    if (v === "mine") renderMine(); if (v === "compare") setupCompare(); if (v === "swipe") renderStage();
  }
  document.querySelector("nav").onclick = e => { const b = e.target.closest("button"); if (b) show(b.dataset.v); };

  /* ---------- Start ---------- */
  const hashCode = location.hash.match(/p=([^&]+)/);
  if (hashCode) {
    try { state.pCode = decodeURIComponent(hashCode[1]).slice(0, 20000); save(); } catch (e) { /* ungültig */ }
    history.replaceState(null, "", location.pathname + location.search);
    $("#manualBox").open = true; show("compare"); toast("Code vom Partner geladen – vergleichen tippen");
  } else renderStage();

  if (FB_ON) {
    firebase.initializeApp(FIREBASE_CONFIG);
    auth = firebase.auth(); db = firebase.database();
    $("#authForm").onsubmit = e => { e.preventDefault(); authAction(() => auth.signInWithEmailAndPassword(...creds())); };
    $("#btnRegister").onclick = () => { if ($("#authForm").reportValidity()) authAction(() => auth.createUserWithEmailAndPassword(...creds())); };
    $("#btnGoogle").onclick = () => authAction(() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
    $("#btnReset").onclick = async () => {
      const email = $("#email").value.trim();
      if (!email) return authMsg("Bitte zuerst die E-Mail eintragen.");
      authMsg(""); try { await auth.sendPasswordResetEmail(email); } catch (e) { /* nichts verraten */ }
      toast("Falls ein Konto existiert, wurde eine E-Mail gesendet.");
    };
    $("#btnSkip").onclick = () => { try { sessionStorage.setItem("namenswipe.skip", "1"); } catch (e) { /* egal */ } showAuth(false); };
    auth.onAuthStateChanged(u => {
      if (u) {
        user = u; showAuth(false); $("#password").value = "";
        switchIdentity(u.uid); syncDown();
      } else {
        const wasIn = !!user; user = null;
        if (wasIn) switchIdentity("local");
        setupCompare();
        if (!skipped()) showAuth(true);
      }
    });
  } else {
    $("#accountOut").hidden = true;   // Firebase nicht geladen: nur lokaler Modus
  }
})();
