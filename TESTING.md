# Test-Anleitung

## Vorbereitung

Da die Anwendung ES6 Module verwendet, muss sie über einen Webserver getestet werden.

### Webserver starten

**Empfohlen: VS Code Live Server**
1. Installiere die Extension "Live Server" in VS Code
2. Rechtsklick auf `index.html`
3. Wähle "Open with Live Server"

**Alternative: Node.js**
```bash
npx http-server -p 8000
```

**Alternative: PHP**
```bash
php -S localhost:8000
```

## Test-Checkliste

### 1. Suchseite (index.html)

- [ ] Seite lädt ohne Fehler
- [ ] Navigation wird korrekt angezeigt
- [ ] "Suche" ist als aktiver Link markiert
- [ ] Suchfeld ist sichtbar und funktionsfähig

#### Suchfunktion testen:
- [ ] Eingabe von weniger als 3 Zeichen zeigt keine Ergebnisse
- [ ] Eingabe von "Axt" zeigt Vorschläge in der Datalist
- [ ] Eingabe von "Axt" zeigt Suchergebnisse in Tabellenform
- [ ] Suchergebnisse zeigen: Gegenstand, Fahrzeug, Ort
- [ ] Clear-Button (X) löscht die Eingabe und Ergebnisse
- [ ] Suche nach nicht existierendem Gerät zeigt "Keine Ergebnisse gefunden"

#### Debouncing testen:
- [ ] Schnelles Tippen führt nicht zu sofortigen Updates (300ms Verzögerung)

### 2. Listenseite (list.html)

- [ ] Seite lädt ohne Fehler
- [ ] Navigation wird korrekt angezeigt
- [ ] "Liste" ist als aktiver Link markiert
- [ ] Überschrift "Alle Geräte" ist sichtbar

#### Accordion-Tabelle testen:
- [ ] Drei Fahrzeuge werden angezeigt (TLF, LF, RW)
- [ ] Kennzeichen werden korrekt angezeigt
- [ ] Klick auf Fahrzeug öffnet/schließt das Accordion
- [ ] Tabelle zeigt Spalten: Ort, Bild, Liste
- [ ] Bilder werden korrekt angezeigt (200px breit)

#### Lightbox testen:
- [ ] Klick auf Bild öffnet Lightbox
- [ ] Bild wird vergrößert angezeigt
- [ ] Klick auf Lightbox schließt sie
- [ ] ESC-Taste schließt die Lightbox

#### Scroll-Button testen:
- [ ] Button ist initial nicht sichtbar
- [ ] Nach Scrollen (>20px) wird Button sichtbar
- [ ] Klick auf Button scrollt nach oben
- [ ] Button verschwindet wieder am Seitenanfang

### 3. Navigation

- [ ] Navigation funktioniert auf beiden Seiten
- [ ] Klick auf "Suche" führt zu index.html
- [ ] Klick auf "Liste" führt zu list.html
- [ ] Aktiver Link ist korrekt markiert
- [ ] Mobile Navigation (Hamburger-Menü) funktioniert

### 4. Browser-Konsole

- [ ] Keine JavaScript-Fehler in der Konsole
- [ ] "Anwendung erfolgreich initialisiert" wird geloggt
- [ ] Keine 404-Fehler für Ressourcen

### 5. Responsive Design

- [ ] Seite funktioniert auf Desktop (>992px)
- [ ] Seite funktioniert auf Tablet (768-991px)
- [ ] Seite funktioniert auf Mobile (<768px)
- [ ] Navigation klappt auf Mobile ein

## Bekannte Einschränkungen

1. **CORS-Fehler**: Die Navigation wird per `fetch()` geladen. Bei Verwendung von `file://` Protokoll kann es zu CORS-Fehlern kommen. Daher muss ein Webserver verwendet werden.

2. **Browser-Kompatibilität**: ES6 Module werden benötigt (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)

## Fehlersuche

### Navigation lädt nicht
- **Problem**: CORS-Fehler in der Konsole
- **Lösung**: Webserver verwenden statt `file://`

### Module werden nicht geladen
- **Problem**: "Failed to load module script"
- **Lösung**: Überprüfe, dass alle Dateipfade korrekt sind und `type="module"` gesetzt ist

### Bilder werden nicht angezeigt
- **Problem**: 404-Fehler für Bilder
- **Lösung**: Überprüfe, dass alle Bilder im `src/img/` Ordner vorhanden sind

### Suche funktioniert nicht
- **Problem**: Keine Ergebnisse trotz korrekter Eingabe
- **Lösung**: Überprüfe Browser-Konsole auf JavaScript-Fehler

## Test-Ergebnisse dokumentieren

Nach dem Testen bitte folgende Informationen notieren:
- Browser und Version
- Betriebssystem
- Gefundene Fehler oder Probleme
- Verbesserungsvorschläge
