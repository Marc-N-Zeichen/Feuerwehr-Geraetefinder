/**
 * Hauptanwendungsdatei - koordiniert alle Module
 * @module app
 */

import { vehicles } from './data.js';
import { initializeTable } from './table.js';
import { initializeSearch } from './search.js';
import { initializeScroll } from './scroll.js';
import './lightbox.js'; // Lightbox wird global verfügbar gemacht

/**
 * Initialisiert die Anwendung
 */
function initializeApp() {
	try {
		// Initialisiere Tabelle (nur auf list.html)
		initializeTable(vehicles);

		// Initialisiere Suche (nur auf index.html)
		initializeSearch(vehicles);

		// Initialisiere Scroll-Funktionalität (nur auf list.html)
		initializeScroll();

		console.log("Anwendung erfolgreich initialisiert");
	} catch (error) {
		console.error("Fehler beim Initialisieren der Anwendung:", error);
	}
}

// Initialisiere die Anwendung, wenn das DOM geladen ist
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeApp);
} else {
	initializeApp();
}
