/**
 * Tabellenerstellung für Fahrzeugausrüstung
 * @module table
 */

import { escapeHtml } from './utils.js';

/**
 * Erstellt eine Accordion-Tabelle für alle Fahrzeuge
 * @param {Array<Object>} vehicles - Array mit Fahrzeugdaten
 * @returns {string} HTML-String der Tabelle
 */
export function createTable(vehicles) {
	try {
		let accordionId = 0;
		let tableHtml = '<div class="accordion" id="accordionTable">';

		// Durchlaufen Sie jedes Fahrzeug im Array
		vehicles.forEach((vehicle) => {
			accordionId++;
			tableHtml += createVehicleAccordion(vehicle, accordionId);
		});

		tableHtml += "</div>";
		return tableHtml;
	} catch (error) {
		console.error("Fehler beim Erstellen der Tabelle:", error);
		return '<div class="alert alert-danger">Fehler beim Laden der Fahrzeugdaten.</div>';
	}
}

/**
 * Erstellt ein Accordion-Item für ein einzelnes Fahrzeug
 * @param {Object} vehicle - Fahrzeugdaten
 * @param {number} id - Eindeutige ID für das Accordion
 * @returns {string} HTML-String des Accordion-Items
 */
function createVehicleAccordion(vehicle, id) {
	const vehicleName = escapeHtml(vehicle.name);
	const vehiclePlate = escapeHtml(vehicle.plate);
	
	let html = `
		<div class="accordion-item">
			<h2 class="accordion-header" id="heading-${id}">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
					data-bs-target="#collapse-${id}" aria-expanded="false" aria-controls="collapse-${id}">
					<strong>${vehicleName}</strong> 
					<span class="plate">Kennzeichen: ${vehiclePlate}</span>
				</button>
			</h2>
			<div id="collapse-${id}" class="accordion-collapse collapse" 
				aria-labelledby="heading-${id}" data-bs-parent="#accordionTable">
				<div class="accordion-body">
					<table class="table table-striped">
						<tbody>
							<tr>
								<th scope="col">Ort</th>
								<th scope="col">Bild</th>
								<th scope="col">Liste</th>
							</tr>`;

	// Durchlaufen Sie die Ausrüstung jedes Fahrzeugs
	vehicle.equipment.forEach((equipment) => {
		html += createEquipmentRow(equipment);
	});

	html += `
						</tbody>
					</table>
				</div>
			</div>
		</div>`;

	return html;
}

/**
 * Erstellt eine Tabellenzeile für einen Geräteraum
 * @param {Object} equipment - Ausrüstungsdaten
 * @returns {string} HTML-String der Tabellenzeile
 */
function createEquipmentRow(equipment) {
	const room = escapeHtml(equipment.room);
	const image = escapeHtml(equipment.image);
	
	let html = `
		<tr>
			<td>${room}</td>
			<td>
				<img src="${image}" class="img-thumbnail rounded-top" alt="Bild von ${room}" 
					width="200" onclick="openLightbox('${image}')" style="cursor: pointer;" />
			</td>
			<td>
				<ul class="list-group list-group-flush">`;

	// Durchlaufen Sie die Artikel in jedem Raum
	equipment.items.forEach((item) => {
		const itemName = typeof item === 'string' ? item : escapeHtml(item.name);
		const itemQuantity = typeof item === 'string' ? null : item.quantity;
		
		if (itemQuantity !== null) {
			html += `<li class="list-group-item"><strong>${itemQuantity}</strong> ${itemName}</li>`;
		} else {
			html += `<li class="list-group-item">${itemName}</li>`;
		}
	});

	html += `
				</ul>
			</td>
		</tr>`;

	return html;
}

/**
 * Initialisiert die Tabelle im DOM
 * @param {Array<Object>} vehicles - Array mit Fahrzeugdaten
 */
export function initializeTable(vehicles) {
	const tableContainer = document.getElementById("tableContainer");
	
	if (!tableContainer) {
		console.warn("tableContainer nicht gefunden - Tabelle wird nicht initialisiert");
		return;
	}

	try {
		const tableHtml = createTable(vehicles);
		const wrapper = document.createElement("div");
		wrapper.innerHTML = tableHtml;
		tableContainer.appendChild(wrapper);
	} catch (error) {
		console.error("Fehler beim Initialisieren der Tabelle:", error);
		tableContainer.innerHTML = '<div class="alert alert-danger">Fehler beim Laden der Fahrzeugdaten.</div>';
	}
}
