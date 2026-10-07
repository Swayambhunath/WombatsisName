'use strict';
/* Wer wird Wombatsi? – Logik. Daten (Namen) stehen in names.js, Datenbankregeln in database.rules.json. */

/* ---------- Firebase-Konfiguration (öffentlich, kein Geheimnis; Schutz erfolgt über die Datenbankregeln) ---------- */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAEo8D1VYQmlm5gCW5fRxXwwxEkPi-WDd8",
  authDomain: "wombatsisname.firebaseapp.com",
  databaseURL: "https://wombatsisname-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wombatsisname",
  appId: "1:752373213450:web:fb9d9b66f3f6740fd532f3"
};

(() => {
  const MAX_NAME = 40, VERSION = "2026-10-07.3";

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
    { id: "heilig", label: "Heilige", test: x => x.tags.includes("heilig") },
    { id: "irisch", label: "Irisch", test: x => x.tags.includes("irisch") || /irisch|gälisch/i.test(x.origin) },
    { id: "nord", label: "Nordisch", test: x => /nordisch|skandinav|dänisch|schwedisch|friesisch|plattdeutsch|niederdeutsch/i.test(x.origin) },
    { id: "bibel", label: "Biblisch", test: x => /hebräisch|aramäisch/i.test(x.origin) },
    { id: "antik", label: "Antik", test: x => /lateinisch|griechisch/i.test(x.origin) },
    { id: "kurz", label: "Kurz", test: x => [...x.n].length <= 4 }
  ];
  let pack = "all";
  try { const p = localStorage.getItem("namenswipe.pack"); if (PACKS.some(x => x.id === p)) pack = p; } catch { /* Speicher nicht verfügbar */ }
  const inPack = (n, id) => PACKS.find(p => p.id === id).test(BYNAME[n]);

  /* ---------- Zustand (pro Konto getrennt gespeichert) ---------- */
  const blank = () => ({ votes: {}, history: [] });
    function sanitizeVotes(v) {
    const out = {};
    if (v && typeof v === "object") for (const n of Object.keys(v)) if (BYNAME[n] && (v[n] === 1 || v[n] === 2)) out[n] = v[n];
    return out;
  }
  function loadState(id) {
    const s = blank();
    try {
      const o = JSON.parse(localStorage.getItem("namenswipe.v3." + id) || "{}");
      s.votes = sanitizeVotes(o.votes);
      s.history = Array.isArray(o.history) ? o.history.filter(n => BYNAME[n] && s.votes[n]).slice(-500) : [];
    } catch { /* kaputte Daten ignorieren */ }
    return s;
  }
  let identity = "local";
  let state = loadState(identity);
  function save() { try { localStorage.setItem("namenswipe.v3." + identity, JSON.stringify(state)); } catch { /* Speicher voll/gesperrt */ } }

  /* ---------- Firebase (zwei feste Konten: Vroni und Felix) ---------- */
  const PEOPLE = { vroni: "Vroni", felix: "Felix" };
  const emailOf = who => who + "@namenswipe.invalid";
  const whoOf = u => Object.keys(PEOPLE).find(w => emailOf(w) === (u && u.email)) || null;
  const otherOf = who => (who === "vroni" ? "felix" : "vroni");
  let auth = null, db = null, me = null, partnerRef = null, partnerVotes = null;

  function pushVote(n) {
    if (!me || !safeKey(n)) return;
    const r = db.ref(`votes/${me}/${n}`);
    (state.votes[n] ? r.set(state.votes[n]) : r.remove()).catch(err => { toast("Speichern in der Cloud fehlgeschlagen"); status(`Speichern fehlgeschlagen (${err.code || "Fehler"}). Sind die neuen Datenbankregeln veröffentlicht?`); });
  }
  const status = t => { $("#partnerStatus").textContent = t; };
  function detachOwn() {
    if (ownRef) ownRef.off();
    ownRef = null; ownCloud = {}; clearTimeout(healTimer);
  }
  function detachPartner() {
    if (partnerRef) partnerRef.off();
    partnerRef = null; partnerVotes = null;
  }
  let online = false, ownRef = null, ownCloud = {}, healTimer = null;
  /* Eigene Stimmen live beobachten: fehlt in der Cloud etwas, was lokal vorhanden ist, wird es nachgeschickt (z. B. nach Verbindungsabbruch) */
  function attachOwn() {
    detachOwn();
    ownRef = db.ref(`votes/${me}`);
    ownRef.on("value", snap => { ownCloud = sanitizeVotes(snap.val()); scheduleHeal(); renderResult(); });
  }
  function scheduleHeal() {
    clearTimeout(healTimer);
    healTimer = setTimeout(() => {
      if (!ownRef) return;
      const upd = {};
      for (const n in state.votes) if (ownCloud[n] !== state.votes[n]) upd[n] = state.votes[n];
      if (Object.keys(upd).length) ownRef.update(upd).catch(err => status(`Speichern fehlgeschlagen (${err.code || "Fehler"}).`));
    }, 3000);
  }
  const ownInfo = () => `Du hast ${Object.keys(state.votes).length} bewertet, ${Object.keys(ownCloud).length} davon sind in der Cloud gespeichert.`;
  function attachPartner() {
    detachPartner();
    const who = otherOf(me);
    status(`Warte auf Bewertungen von ${PEOPLE[who]} …`);
    clearTimeout(attachPartner.t);
    attachPartner.t = setTimeout(() => {
      if (partnerVotes) return;
      status(online
        ? `Verbunden, aber keine Daten von ${PEOPLE[who]} erhalten. Hat ${PEOPLE[who]} schon geswipt und sind die Regeln veröffentlicht?`
        : "Keine Verbindung zur Datenbank. Bitte Netzwerk wechseln (WLAN/Mobilfunk) und neu laden.");
    }, 8000);
    partnerRef = db.ref(`votes/${who}`);
    partnerRef.on("value", snap => { partnerVotes = sanitizeVotes(snap.val()); renderResult(); },
      err => status(`Bewertungen von ${PEOPLE[who]} nicht lesbar (${err.code || "Fehler"}). Sind die neuen Datenbankregeln veröffentlicht?`));
  }
  async function syncDown() {
    const who = me;
    try {
      const cloud = sanitizeVotes((await db.ref(`votes/${who}`).once("value")).val());
      if (me !== who) return;
      const merged = Object.assign({}, state.votes, cloud);     // Cloud hat bei Konflikten Vorrang
      const upd = {};
      for (const n in merged) if (cloud[n] !== merged[n]) upd[n] = merged[n];
      state.votes = merged; state.history = state.history.filter(n => state.votes[n]); save();
      if (Object.keys(upd).length) await db.ref(`votes/${who}`).update(upd);
      renderAll();
    } catch {
      status("Cloud-Daten konnten nicht geladen werden. Sind die neuen Datenbankregeln veröffentlicht?");
    }
  }
  function switchIdentity(id) {
    detachOwn(); detachPartner();
    identity = id; state = loadState(id);
    $("#result").replaceChildren();
    renderAll();
  }

  /* ---------- Login ---------- */
  const AUTH_ERR = {
    "auth/invalid-credential": "Passwort falsch.",
    "auth/wrong-password": "Passwort falsch.",
    "auth/invalid-login-credentials": "Passwort falsch.",
    "auth/user-not-found": "Dieses Konto existiert in Firebase noch nicht.",
    "auth/too-many-requests": "Zu viele Versuche. Bitte später erneut probieren.",
    "auth/network-request-failed": "Keine Verbindung.",
    "auth/operation-not-allowed": "E-Mail/Passwort ist in Firebase noch nicht aktiviert."
  };
  const authMsg = t => { $("#authMsg").textContent = t; };
  let chosen = "vroni";
  $("#who").onclick = e => {
    const b = e.target.closest("[data-who]"); if (!b) return;
    chosen = b.dataset.who;
    document.querySelectorAll("#who .chip").forEach(x => { const on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-checked", String(on)); });
  };
  function showAuth(on) { $("#auth").hidden = !on; if (on) $("#password").focus(); }

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
    try { localStorage.setItem("namenswipe.pack", pack); } catch { /* egal */ }
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
    if (!me || !partnerVotes) return;
    const other = PEOPLE[otherOf(me)];
    status(`${other} hat ${Object.keys(partnerVotes).length} Namen bewertet. ${ownInfo()} Das Ergebnis aktualisiert sich live.`);
    showResult(PEOPLE[me], other, state.votes, partnerVotes);
  }
  function setupCompare() {
    $("#accountName").textContent = me ? PEOPLE[me] : "";
    $("#ver").textContent = "Version " + VERSION;
  }
  $("#btnLogout").onclick = () => auth.signOut();

  /* ---------- Navigation ---------- */
  function renderAll() { renderStage(); if ($("#v-mine").classList.contains("on")) renderMine(); if ($("#v-compare").classList.contains("on")) setupCompare(); }
  function show(v) {
    document.querySelectorAll("nav button").forEach(b => b.classList.toggle("on", b.dataset.v === v));
    document.querySelectorAll(".view").forEach(s => s.classList.toggle("on", s.id === "v-" + v));
    if (v === "mine") renderMine(); if (v === "compare") setupCompare(); if (v === "swipe") renderStage();
  }
  document.querySelector("nav").onclick = e => { const b = e.target.closest("button"); if (b) show(b.dataset.v); };

  /* ---------- Start ---------- */
  renderStage();
  if (typeof firebase === "undefined") {
    authMsg("Firebase konnte nicht geladen werden. Bitte Verbindung prüfen und neu laden.");
    $("#authForm").onsubmit = e => e.preventDefault();
  } else {
    firebase.initializeApp(FIREBASE_CONFIG);
    auth = firebase.auth(); db = firebase.database();
    db.ref(".info/connected").on("value", snap => { online = snap.val() === true; });
    $("#authForm").onsubmit = async e => {
      e.preventDefault(); authMsg("");
      try { await auth.signInWithEmailAndPassword(emailOf(chosen), $("#password").value); }
      catch (err) { authMsg(AUTH_ERR[err.code] || "Anmeldung fehlgeschlagen."); }
    };
    auth.onAuthStateChanged(u => {
      const who = whoOf(u);
      if (u && !who) { auth.signOut(); return authMsg("Dieses Konto ist nicht freigeschaltet."); }
      me = who;
      if (who) {
        $("#password").value = ""; showAuth(false);
        switchIdentity(who); attachOwn(); attachPartner(); syncDown();
      } else {
        switchIdentity("local"); showAuth(true);
      }
    });
  }
})();
