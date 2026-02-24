# Feuerwehr Geraetefinder

Digitale Übersicht und Suchfunktion der Geräte auf den drei Fahrzeugen der Freiwilligen Feuerwehr Egestorf.

## Funktionen

- **Suchfunktion**: Schnelle Suche nach Geräten mit Auto-Vervollständigung
- **Fahrzeugliste**: Übersicht aller Fahrzeuge und deren Ausrüstung
- **Bildanzeige**: Lightbox-Ansicht der Geräteräume
- **Responsive Design**: Funktioniert auf Desktop und mobilen Geräten

## Technologie

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6 Module)
- Font Awesome Icons

## Projektstruktur

```
Feuerwehr-Geraetefinder/
├── index.html              # Suchseite
├── list.html               # Listenansicht
├── src/
│   ├── components/
│   │   └── navigation.html # Wiederverwendbare Navigation
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css       # Custom Styles
│   ├── img/                # Bilder der Geräteräume
│   └── js/
│       ├── app.js          # Hauptanwendung
│       ├── config.js       # Konfigurationskonstanten
│       ├── data.js         # Fahrzeugdaten
│       ├── lightbox.js     # Bildanzeige
│       ├── navigation.js   # Navigation laden
│       ├── scroll.js       # Scroll-Funktionalität
│       ├── search.js       # Suchfunktion
│       ├── table.js        # Tabellenerstellung
│       └── utils.js        # Hilfsfunktionen
├── REFACTORING.md          # Refactoring-Dokumentation
└── README.md               # Diese Datei
```

## Installation & Verwendung

### Lokale Entwicklung

Da die Anwendung ES6 Module verwendet, muss sie über einen Webserver ausgeführt werden (nicht als `file://`).

**Option 1: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js HTTP Server**
```bash
npx http-server -p 8000
```

**Option 3: PHP Built-in Server**
```bash
php -S localhost:8000
```

**Option 4: VS Code Live Server Extension**
- Installiere die "Live Server" Extension
- Rechtsklick auf `index.html` → "Open with Live Server"

Dann öffne im Browser: `http://localhost:8000`

### Seiten

- **Suche**: `index.html` - Suche nach spezifischen Geräten
- **Liste**: `list.html` - Vollständige Übersicht aller Fahrzeuge und Geräte

## Browser-Kompatibilität

Die Anwendung benötigt einen modernen Browser mit ES6 Module-Unterstützung:
- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 16+

## Entwicklung

### Daten aktualisieren

Fahrzeugdaten befinden sich in `src/js/data.js`. Die Struktur ist:

```javascript
{
  name: "Fahrzeugname",
  plate: "Kennzeichen",
  equipment: [
    {
      room: "Geräteraum",
      image: "Pfad zum Bild",
      items: ["Gerät 1", "Gerät 2", ...]
    }
  ]
}
```

### Styling anpassen

Custom Styles befinden sich in `src/css/style.css`.

### Konfiguration

Konstanten wie Suchverzögerung können in `src/js/config.js` angepasst werden.

## Refactoring

Das Projekt wurde umfassend refactored. Details siehe [REFACTORING.md](REFACTORING.md).

### Wichtigste Änderungen:
- Modularisierung in ES6 Module
- JSDoc-Dokumentation
- Fehlerbehandlung
- Debouncing für Suche
- XSS-Schutz
- Wiederverwendbare Navigation

## Lizenz

Freiwillige Feuerwehr Egestorf

## Kontakt

Für Fragen oder Verbesserungsvorschläge wenden Sie sich bitte an die Freiwillige Feuerwehr Egestorf.
