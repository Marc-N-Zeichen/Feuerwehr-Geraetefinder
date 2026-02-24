/**
 * Such-Funktionalität für Geräte
 * @module search
 */

import { MIN_SEARCH_LENGTH, SEARCH_DEBOUNCE_DELAY } from './config.js';
import { debounce, escapeHtml, getElement } from './utils.js';

/**
 * Aktualisiert die Vorschlagsliste basierend auf der Eingabe
 * @param {string} input - Sucheingabe
 * @param {Array<Object>} vehicles - Array mit Fahrzeugdaten
 */
export function updateSuggestions(input, vehicles) {
	const dataList = getElement("suggestions");
	if (!dataList) return;

	// Leeren Sie die aktuelle Vorschlagsliste
	dataList.innerHTML = "";

	// Nur Vorschläge anzeigen, wenn die Eingabe lang genug ist
	if (input.length < MIN_SEARCH_LENGTH) {
		return;
	}

	const lowerInput = input.toLowerCase();
	const suggestions = new Set(); // Set verhindert Duplikate

	// Durchlaufen Sie jedes Fahrzeug und jeden Artikel
	vehicles.forEach((vehicle) => {
		vehicle.equipment.forEach((equipment) => {
			equipment.items.forEach((item) => {
				// Wenn der Artikel die Eingabe enthält, fügen Sie ihn zur Vorschlagsliste hinzu
				if (item.toLowerCase().includes(lowerInput)) {
					suggestions.add(item);
				}
			});
		});
	});

	// Vorschläge zum Datalist hinzufügen
	suggestions.forEach((suggestion) => {
		const option = document.createElement("option");
		option.value = suggestion;
		dataList.appendChild(option);
	});
}

/**
 * Zeigt die Suchergebnisse an
 * @param {string} input - Sucheingabe
 * @param {Array<Object>} vehicles - Array mit Fahrzeugdaten
 */
export function showSearchResults(input, vehicles) {
	const resultsContainer = getElement("results");
	if (!resultsContainer) return;

	// Wenn die Eingabe zu kurz ist, leeren Sie die Suchergebnisse
	if (input.length < MIN_SEARCH_LENGTH) {
		resultsContainer.innerHTML = "";
		resultsContainer.style.display = "none";
		return;
	}

	try {
		const lowerInput = input.toLowerCase();
		const results = [];

		// Durchlaufen Sie jedes Fahrzeug und jeden Artikel
		vehicles.forEach((vehicle) => {
			vehicle.equipment.forEach((equipment) => {
				equipment.items.forEach((item) => {
					// Wenn der Artikel die Eingabe enthält, fügen Sie ihn zu den Ergebnissen hinzu
					if (item.toLowerCase().includes(lowerInput)) {
						results.push({
							item: item,
							vehicleName: vehicle.name,
							vehiclePlate: vehicle.plate,
							room: equipment.room
						});
					}
				});
			});
		});

		// Ergebnisse anzeigen
		if (results.length > 0) {
			resultsContainer.innerHTML = createResultsTable(results);
			resultsContainer.style.display = "block";
		} else {
			resultsContainer.innerHTML = '<div class="alert alert-danger" role="alert">Keine Ergebnisse gefunden.</div>';
			resultsContainer.style.display = "block";
		}
	} catch (error) {
		console.error("Fehler bei der Suche:", error);
		resultsContainer.innerHTML = '<div class="alert alert-danger" role="alert">Fehler bei der Suche.</div>';
	}
}

/**
 * Erstellt eine HTML-Tabelle mit den Suchergebnissen
 * @param {Array<Object>} results - Array mit Suchergebnissen
 * @returns {string} HTML-String der Ergebnistabelle
 */
function createResultsTable(results) {
	let html = `
		<h2>Suchergebnisse</h2>
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">Gegenstand</th>
					<th scope="col">Fahrzeug</th>
					<th scope="col">Ort</th>
				</tr>
			</thead>
			<tbody>`;

	results.forEach((result) => {
		const item = escapeHtml(result.item);
		const vehicleName = escapeHtml(result.vehicleName);
		const vehiclePlate = escapeHtml(result.vehiclePlate);
		const room = escapeHtml(result.room);

		html += `
			<tr>
				<td>${item}</td>
				<td><strong>${vehicleName}</strong> (${vehiclePlate})</td>
				<td>${room}</td>
			</tr>`;
	});

	html += `
			</tbody>
		</table>`;

	return html;
}

/**
 * Löscht die Sucheingabe und Ergebnisse
 */
export function clearSearch() {
	const searchInput = getElement("search");
	const resultsContainer = getElement("results");

	if (searchInput) {
		searchInput.value = "";
	}

	if (resultsContainer) {
		resultsContainer.innerHTML = "";
		resultsContainer.style.display = "none";
	}
}

/**
 * Initialisiert die Such-Funktionalität
 * @param {Array<Object>} vehicles - Array mit Fahrzeugdaten
 */
export function initializeSearch(vehicles) {
	const searchInput = getElement("search");
	const clearButton = getElement("clear-input");

	if (!searchInput) {
		console.warn("Suchfeld nicht gefunden - Suche wird nicht initialisiert");
		return;
	}

	// Debounced Suchfunktion
	const debouncedSearch = debounce((value) => {
		updateSuggestions(value, vehicles);
		showSearchResults(value, vehicles);
	}, SEARCH_DEBOUNCE_DELAY);

	// Event Listener für Sucheingabe
	searchInput.addEventListener("input", (event) => {
		debouncedSearch(event.target.value);
	});

	// Event Listener für Clear-Button
	if (clearButton) {
		clearButton.addEventListener("click", clearSearch);
	}
}
