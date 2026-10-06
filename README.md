# Namens-Swipe

Namen swipen (gut/schlecht), speichern und mit dem Partner vergleichen. Statische Seite (GitHub Pages) + Firebase.

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html`, `style.css`, `app.js` | Oberfläche und Logik |
| `names.js` | Namensdatenbank (`Name\|Typ\|Herkunft\|Bedeutung\|Tags`), frei editierbar |
| `database.rules.json` | Sicherheitsregeln der Realtime Database (in der Firebase-Konsole unter *Regeln* einfügen) |

## Firebase einrichten
1. **Authentication → Anmeldemethode:** „E-Mail/Passwort“ und (optional) „Google“ aktivieren.
2. **Authentication → Einstellungen → Autorisierte Domains:** `swayambhunath.github.io` hinzufügen.
3. **Realtime Database → Regeln:** Inhalt von `database.rules.json` einfügen und veröffentlichen.
4. **Google Cloud Console → APIs & Dienste → Anmeldedaten:** den Browser-API-Schlüssel auf HTTP-Referrer `https://swayambhunath.github.io/*` einschränken.

## Datenmodell
- `users/{uid}`: `name`, `room`, `votes/{Name} = 1 (gut) | 2 (schlecht)`. Nur der Besitzer schreibt; lesen darf der Besitzer und der Partner im selben Raum.
- `rooms/{code}/p1|p2 = {uid, name}`: zwei Plätze pro Raum. Der Raum-Code ist das gemeinsame Geheimnis, nutze einen langen, nicht erratbaren Code.
