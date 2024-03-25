// Fahrzeuge als Objekte
const vehicle = [
	{
		name: "Rüstwagen",
		plate: "WL LK 810",
		equipment: [
			{
				room: "G1",
				image: "src/img/rw_g1.JPEG",
				items: [
					"Wathosen",
					"Motorsäge mit Zubehör",
					"Rettungssäge",
					"Doppelkanister",
					"Motortrennschleifer mit Zubehör",
					"Trennscheiben",
					"Schachtabdeckungen",
					"Dichtungskeile",
					"Dichtungspfropfen",
					"Leitungstrommeln",
					"Kanister 10l",
					"Ausgußsturzen",
					"Leitungen mit Stecker und Kupplungen",
					"Schutzschalter",
					"Kasten mit Ersatzlampen",
					"Waldarbeiterhelme",
					"Beinschutz",
					"Kupferlitze",
					"Anschlusszwingen",
					"Erdungsspieß",
					"Haftmagnet",
				],
			},
			{
				room: "G2",
				image: "src/img/rw_g2.JPEG",
				items: [
					"Rettungssäge",
					"Zubehör für Hebekissen",
					"Wasserschieber",
					"Stoßbesen",
					"Stechschaufeln",
					"Hebekissen",
					"Spanngurte",
					"Verlängerungsgurte",
					"Formholz",
					"Heringe",
					"Erdanker",
					"Erdankerziehgerät",
					"Winden",
					"Drahtseile",
					"Hebesatz H2",
					"Mehrzweckzug Z32",
					"Kantenreiter",
					"Handhaspel",
					"Umlenkrolle",
				],
			},
		],
	},
	{
		name: "Tanklöschwagen",
		plate: "",
		equipment: [
			{ room: "G1", image: "", items: ["Z", "Y", "X"] },
			{ room: "G2", image: "", items: ["V", "W", "L"] },
		],
	},
];

// Funktion zum Erstellen der Tabelle
function createTable() {
	let table = `<table class="table table-striped table-bordered">
	<tbody>`;

	// Durchlaufen Sie jedes Fahrzeug im Array
	vehicle.forEach((v) => {
		table += `<tr class="table-header">
			<td colspan="2"><strong>${v.name}</strong></td>
			<td>Kennzeichen: ${v.plate}</td>`;
		table += `<tr>
			<th scope="col">Geräteraum</th>
			<th scope="col">Bild</th>
			<th scope="col">Liste</th>
		</tr>`;
		// Durchlaufen Sie die Ausrüstung jedes Fahrzeugs
		v.equipment.forEach((e) => {
			table += `<tr><td>${e.room}</td>`; // Geräteraum
			table += `<td><img src="${e.image}" class="img-thumbnail rounded-top" alt="" width="200px" onclick="openLightbox('${e.image}')" /></td>`; // Bild
			table += `<td><ul class="list-group">`; // Liste
			// Durchlaufen Sie die Artikel in jedem Raum
			e.items.forEach((i) => {
				table += `<li class="list-group-item">${i}</li>`; // Artikel
			});
			table += "</ul></td></tr>";
		});
	});

	table += "</tbody></table>";

	return table;
}

// Fügen Sie die Tabelle zum HTML-Dokument hinzu
const table = createTable();
const tableContainer = document.createElement("div");
tableContainer.innerHTML = table;
document.body.appendChild(tableContainer);

// Funktion zum Öffnen der Lightbox
function openLightbox(imageSrc) {
	// Erstellen Sie ein neues div-Element für die Lightbox
	const lightbox = document.createElement("div");
	lightbox.id = "lightbox";

	// Erstellen Sie ein neues img-Element für das Bild
	const img = document.createElement("img");
	img.src = imageSrc;

	// Fügen Sie das img-Element zur Lightbox hinzu
	lightbox.appendChild(img);

	// Fügen Sie die Lightbox zum body-Element hinzu
	document.body.appendChild(lightbox);

	// Schließen Sie die Lightbox, wenn sie angeklickt wird
	lightbox.addEventListener("click", () => {
		document.body.removeChild(lightbox);
	});
}

// Funktion zum Aktualisieren der Vorschlagsliste
function updateSuggestions(input) {
	// Leeren Sie die aktuelle Vorschlagsliste
	const dataList = document.getElementById("suggestions");
	dataList.innerHTML = "";

	// Durchlaufen Sie jedes Fahrzeug und jeden Artikel
	vehicle.forEach((v) => {
		v.equipment.forEach((e) => {
			e.items.forEach((i) => {
				// Wenn der Artikel die Eingabe enthält und die Eingabe mindestens drei Zeichen lang ist, fügen Sie ihn zur Vorschlagsliste hinzu
				if (
					i.toLowerCase().includes(input.toLowerCase()) &&
					input.length >= 3
				) {
					const option = document.createElement("option");
					option.value = i;
					dataList.appendChild(option);
				}
			});
		});
	});
}

// Fügen Sie einen Event-Listener zum Suchfeld hinzu, um die Vorschlagsliste zu aktualisieren, wenn die Eingabe geändert wird
document.getElementById("search").addEventListener("input", (event) => {
	updateSuggestions(event.target.value);
});

// Funktion zum Anzeigen der Suchergebnisse
function showSearchResults(input) {
	// Erstellen Sie eine neue Tabelle für die Suchergebnisse
	let table = `
		<table>
			<tr>
				<th scope="col">Fahrzeug</th>
				<th scope="col">Geräteraum</th>
				<th scope="col">Gegenstand</th>
			</tr>`;

	// Durchlaufen Sie jedes Fahrzeug und jeden Artikel
	vehicle.forEach((v) => {
		v.equipment.forEach((e) => {
			e.items.forEach((i) => {
				// Wenn der Artikel die Eingabe enthält, fügen Sie ihn zur Tabelle hinzu
				if (i.toLowerCase().includes(input.toLowerCase())) {
					table += `<tr><td>${v.name}</td><td>${e.room}</td><td>${i}</td></tr>`;
				}
			});
		});
	});

	table += "</table>";

	// Fügen Sie die Tabelle zum HTML-Dokument hinzu
	document.getElementById("results").innerHTML = table;
}

// Fügen Sie einen Event-Listener zum Suchfeld hinzu, um die Suchergebnisse anzuzeigen, wenn die Eingabe geändert wird
document.getElementById("search").addEventListener("input", (event) => {
	showSearchResults(event.target.value);
});
