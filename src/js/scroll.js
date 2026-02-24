/**
 * Scroll-Funktionalität für "Nach oben"-Button
 * @module scroll
 */

import { SCROLL_THRESHOLD } from './config.js';
import { scrollToTop, getElement } from './utils.js';

/**
 * Zeigt oder versteckt den "Nach oben"-Button basierend auf der Scroll-Position
 */
export function handleScroll() {
	const toTopButton = getElement("toTop");
	if (!toTopButton) return;

	if (document.body.scrollTop > SCROLL_THRESHOLD || 
		document.documentElement.scrollTop > SCROLL_THRESHOLD) {
		toTopButton.style.display = "block";
	} else {
		toTopButton.style.display = "none";
	}
}

/**
 * Initialisiert die Scroll-Funktionalität
 */
export function initializeScroll() {
	const toTopButton = getElement("toTop");
	
	if (!toTopButton) {
		console.warn("toTop-Button nicht gefunden - Scroll-Funktionalität wird nicht initialisiert");
		return;
	}

	// Event Listener für Scroll
	window.addEventListener("scroll", handleScroll);

	// Event Listener für Button-Click
	toTopButton.addEventListener("click", scrollToTop);
}
