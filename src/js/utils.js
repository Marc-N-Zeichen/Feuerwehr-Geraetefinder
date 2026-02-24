/**
 * Hilfsfunktionen für die Anwendung
 * @module utils
 */

/**
 * Erstellt eine Debounce-Funktion, die die Ausführung verzögert
 * @param {Function} func - Die zu verzögernde Funktion
 * @param {number} delay - Verzögerung in Millisekunden
 * @returns {Function} Die debounced Funktion
 */
export function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}

/**
 * Escaped HTML-Sonderzeichen zur Vermeidung von XSS
 * @param {string} text - Der zu escapende Text
 * @returns {string} Der escaped Text
 */
export function escapeHtml(text) {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

/**
 * Scrollt zum oberen Rand der Seite
 */
export function scrollToTop() {
	document.body.scrollTop = 0; // Für Safari
	document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}

/**
 * Überprüft, ob ein Element existiert
 * @param {string} elementId - Die ID des Elements
 * @returns {HTMLElement|null} Das Element oder null
 */
export function getElement(elementId) {
	const element = document.getElementById(elementId);
	if (!element) {
		console.warn(`Element mit ID "${elementId}" nicht gefunden`);
	}
	return element;
}
