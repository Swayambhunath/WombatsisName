# Namens-Swipe

Namen swipen (gut/schlecht), in Firebase speichern und live mit dem Partner vergleichen. Statische Seite (GitHub Pages) + Firebase. Es gibt genau zwei Konten: **Vroni** und **Felix**.

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html`, `style.css`, `app.js` | Oberfläche und Logik |
| `names.js` | Namensdatenbank (`Name\|Typ\|Herkunft\|Bedeutung\|Tags`), frei editierbar |
| `database.rules.json` | Sicherheitsregeln der Realtime Database |

## Firebase einrichten (einmalig)
1. **Authentication → Anmeldemethode:** nur „E-Mail/Passwort“ aktivieren, alles andere (z. B. Google) aus.
2. **Authentication → Nutzer → Nutzer hinzufügen** (das Passwort steht bewusst nicht im Repo):
   - `vroni@namenswipe.invalid`
   - `felix@namenswipe.invalid`
3. **Authentication → Einstellungen → Nutzeraktionen:** „Erstellen (Registrierung) aktivieren“ **ausschalten**, damit sich niemand sonst ein Konto anlegen kann.
4. **Authentication → Einstellungen → Autorisierte Domains:** `swayambhunath.github.io` muss eingetragen sein.
5. **Realtime Database → Regeln:** Inhalt von `database.rules.json` einfügen und veröffentlichen.
6. **Google Cloud Console → APIs & Dienste → Anmeldedaten:** den Browser-API-Schlüssel auf den HTTP-Referrer `https://swayambhunath.github.io/*` einschränken.

## Datenmodell und Sicherheit
- `votes/vroni/{Name}` und `votes/felix/{Name}` mit `1` (gut) oder `2` (schlecht).
- Die Regeln erlauben nur den beiden E-Mail-Adressen Zugriff: jede Person schreibt nur ihren eigenen Bereich, beide dürfen beide lesen. Alles andere ist gesperrt.
