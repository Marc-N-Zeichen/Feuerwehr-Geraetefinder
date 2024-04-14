// Fahrzeuge als Objekte
const vehicle = [
	{
		name: "RW",
		plate: "WL-LK 810",
		equipment: [
			{
				room: "G1",
				image: "src/img/rw_g1.jpg",
				items: [
					"2 Wathosen",
					"1 Motorkettensäge inkl. Zubehör",
					"1 Motortrennschleifer inkl. Zubehör",
					"3 Leitungstrommeln 230 V davon 1 Ex geschützt",
					"2 Leitungstrommeln 400 V davon 1 Ex geschützt",
					"1 E – Verteiler",
					"Erdungskabel und Erdungsspieß",
					"Dichtungspropfen und Keile",
				],
			},
			{
				room: "G2",
				image: "src/img/rw_g2.jpg",
				items: [
					"2 Besen",
					"2 Schaufeln",
					"2 Wasserschieber",
					"2 Hebekissen 40t inkl. Zubehör",
					"Spanngurte",
					"Rüsthölzer",
					"1 Erdanker inkl. Zubehör",
					"2 Hydraulische Winde 10t",
					"5 Stahlseile in verschiedener Länge",
					"Hebesatz 15t",
					"Mehrzweckzug Z16",
					"Kantenreiter",
					"Armatur-Druckplatten",
					"Umlenkrolle 22t",
				],
			},
			{
				room: "G3 vorne",
				image: "src/img/rw_g3.jpg",
				items: [
					"Kübelspritze",
					"Feuerlöscher",
					"Bergetuch",
					"Wagenheber",
					"Stromerzeuger 12 KVA",
				],
			},
			{
				room: "G3 hinten",
				image: "src/img/rw_g3.jpg",
				items: [
					"Schutzbrillen",
					"Gehörstöpsel",
					"Staubmasken",
					"2 x 1000 Watt Strahler",
					"1 Stativ",
					"2 Gefahrgutfässer",
					"1 Vacuumfass",
				],
			},
			{
				room: "G4 vorne",
				image: "src/img/rw_g4.jpg",
				items: [
					"1 Glasmaster",
					"3 Rettungszylinder RZ 1 – 3",
					"1 Pedalschneider",
					"1 Schwelleraufsatz",
					"1 Tripple Hydraulikaggregat Weber",
					"1 Spreizer SP 60 Weber",
					"1 Rettungsschere RS 170-105 Weber",
					"2 Brechstangen",
				],
			},
			{
				room: "G4 hinten",
				image: "src/img/rw_g4.jpg",
				items: [
					"3 Pressluftflaschen",
					"4 Stab-Pack",
					"1 Rangierkupplung",
					"div. Schäkel und Anschlagketten",
					"Spreizerzubehör",
					"1 Bügelsäge",
					"1 Bolzenschneider",
					"2 Äxte",
					"1 Vorschlaghammer",
					"1 Kuhfuss",
					"2 Klappspaten",
				],
			},
			{
				room: "G5",
				image: "src/img/rw_g5.jpg",
				items: [
					"div. Schutzhandschuhe",
					"Schachthaken",
					"8 Mehrzweckleinen",
					"PVC Einhängebehälter",
					"Fließlappen",
					"2 Auffangbehälter",
					"Gefahrgutschläuche Metall",
				],
			},
			{
				room: "G6",
				image: "src/img/rw_g6.jpg",
				items: [
					"4 Euroblitzer",
					"Absperrband und Stützen",
					"Schilderständer und Warnschilder",
					"1 Set Turbo – Flaire",
					"6 Verkehrsleitkegel",
					"3 Handscheinwerfer",
					"Bedienteil Stromgenerator",
					"Bedienteil Fahrzeugtechnik HMI",
				],
			},
			{
				room: "G7",
				image: "src/img/rw_gr.jpg",
				items: [
					"2 C-Druckschläuche säurefest",
					"1 Ausgußrohr",
					"1 Handmembranpumpe",
					"Rohrwinkel",
					"1 Saugkorb für Gefahrgut",
					"Übergangsstücke",
					"Einschaltstrombegrenzer",
					"Werkzeug nicht funkenreißend",
					"Dichtungsmaterial",
					"1 Elro Gefahrgutpumpe",
					"1 Druckbelüfter",
					"4 Unterlegkeile",
					"2x 20L Dieselkanister",
				],
			},
			{
				room: "GR",
				image: "src/img/rw_g3.jpg",
				items: [
					"4 x Unisafe Öl u. Chemikalienbinder",
					"1 Rettungsrucksack",
					"4 Stifneck Halskrausen",
					"1 Beatmungsgerät",
					"1 Defibrilator",
					"1 Verbandkasten für Verbrennungen",
					"1 Werkzeugkoffer Feuerwehr",
					"1 Werkzeugkoffer Elektro",
					"1 Absturzsicherung",
					"2 Decken",
					"4 Leichensäcke",
					"div. Laken und Tücher",
					"div. Nägel und Schrauben",
					"4 Sack Ölbindmittel",
				],
			},
			{
				room: "Dach",
				image: "src/img/rw_g3.jpg",
				items: [
					"1 Krankentrage",
					"1 Rettungsbrett",
					"4 teilige Steckleiter",
					"1 LKW Rettungsplattform",
					"2 Auffangmulden",
					"1 Fasspumpe",
					"Ansaugrohr für Gefahrgut",
					"Saugdruckschläuche säurefest",
				],
			},
		],
	},
	{
		name: "TLF",
		plate: "WL-R 5810",
		equipment: [
			{
				room: "G1",
				image: "",
				items: [
					"2 Wathosen",
					"2 Unterlegkeile",
					"1 Bodengestellt für Werfer",
					"1 Bügelsäge",
					"1 Motorsäge mit Zubehör",
					"2 x Schutzausrüstung für Motorsäge",
					"2 hydraulische Winden 10t",
					"1 Tauchpumpe",
					"2 Leitungstrommeln 230V",
					"1 Mulde",
					"1 Werkzeugkasten",
				],
			},
			{
				room: "G2",
				image: "",
				items: [
					"Druckschläuche D mit Zubehör",
					"1 Kellersaugkorb",
					"1 Wasserstrahlpumpe",
					"4 Druckschläuche C",
					"6 Druckschläuche B",
					"4 Schlauchtragekörbe C",
					"4 Sack Ölbindemittel",
				],
			},
			{
				room: "G3",
				image: "",
				items: [
					"1 Kübelspritze",
					"2 Feuerlöscher PG12",
					"1 Handspritze für Ölbindemittel",
					"1 Kanister flüssiges Ölbindemittel",
					"1 Eimer Streusalz",
					"1 Hilfe Rucksack",
				],
			},
			{
				room: "G4",
				image: "",
				items: [
					"9 Verkehrsleitkegel",
					"8 Euroblitzer",
					"2 Handscheinwerfer",
					"1 Hygienebrett",
				],
			},
			{
				room: "G5",
				image: "",
				items: [
					"Druckschläuche D mit Zubehör",
					"1 Kellersaugkorb",
					"1 Wasserstrahlpumpe",
					"4 Druckschläuche C",
					"6 Druckschläuche B",
					"4 Schlauchtragekörbe C",
					"4 Sack Ölbindemittel",
				],
			},
			{
				room: "G6",
				image: "",
				items: [
					"Druckschlauch S 25",
					"Hohlstrahlrohre C",
					"Strahlrohre C",
					"Strahlrohr B",
					"2 Übergangsstücke B-C",
					"1 Übergangsstück C",
					"4 Seilschlauchhalter",
					"1 Stützkrümmer",
					"1 Kombischaumrohr M4/S4",
					"1 Löschlanze",
					"1 Paar Schachthaken",
					"1 Standrohr",
					"1 Hydroschild B",
					"1 Druckbegrenzungsventil",
					"2 Absperrhähne B",
					"1 Krümmer 90°",
					"2 Verteiler",
					"div. Kupplungsschlüssel",
					"1 Druckschlauch B",
				],
			},
			{
				room: "GR",
				image: "",
				items: [
					"1 x 5m Druckschlauch B",
					"1 Sammelstück",
					"1 Saugkorb",
					"1 Saugschutzkorb",
					"2 Mehrzweckleinen",
					"3 Kupplungsschlüssel",
					"1 x 2m Handsprechfunkgerät",
					"1 Übergangsstück A-B",
					"3.000 Liter Wassertank",
					"150 Liter Schaummitteltank",
					"Pumpe",
				],
			},
			{
				room: "Dach",
				image: "",
				items: [
					"1 Steckleiter",
					"4 Schlauchbrücken",
					"1 Einreißhaken",
					"6 Saugschläuche A",
					"2 Schaufeln",
					"1 Besen",
					"1 Spaten",
					"4 Feuerpatschen",
					"1 Wasserwerfer",
					"1 Abgasschlauch",
				],
			},
			{
				room: "Kabine",
				image: "",
				items: [
					"2 Preßluftatmer",
					"Zubehör für Atemschutz",
					"1 Atemschutznotfalltasche",
					"2 x 2m Funkgeräte",
					"9 Warnwesten",
					"2 Handscheinwerfer",
					"2 Anhaltestäbe",
					"2 Decken",
					"1 Bolzenschneider",
					"Ersatz Einsatzkleidung",
					"div. Fahrzeugzubehör",
					"1 Wärmebildkamera",
				],
			},
		],
	},

	{
		name: "LF",
		plate: "WL-R 5820",
		equipment: [
			{
				room: "G1",
				image: "src/img/lf_g1.jpg",
				items: [
					"Fahrerhaus1 Trennschleifer mit Zubehoer",
					"4 Verkehrsleitkegel",
					"2 Wathosen",
					"1 Auffangmulde VA",
					"1 Stromerzeuger 5 kVA mit Zubehoer",
					"2 Flutlichtstrahler + Zubehoer",
					"4 Blitzleuchten",
					"1 Leistungstrommel",
					"1 Werkzeugkasten",
					"Diverse Ruesthoelze",
				],
			},
			{
				room: "G2",
				image: "src/img/lf_g2.jpg",
				items: [
					"4 Ersatz Einsatzkleidung",
					"1 Erste Hilfe Koffer",
					"2 Feuerwehräxte",
					"1 Standrohr 2B",
					"1 Unter-",
					"1 Überflurhydrantenschlüssel",
					"2 Brechstangen 700",
					"1 Bügelsäge",
					"1 Brechschneideisen",
					"1 Spaten",
					"2 Pressluftatmer + Zubehör",
					"1 Rettungsbrett",
					"1 Hydroaggregat Schere + Spreizer",
				],
			},
			{
				room: "G3",
				image: "src/img/lf_g3.jpg",
				items: [
					"13 Druckschläuche B20",
					"7 Druckschläuche C",
					"4 Schutzanzüge",
					"Körperschutzform 2 / Schuhüberzieher",
					"2 Unterlegkeile",
					"Diverse Rüsthölzer",
				],
			},
			{
				room: "G4",
				image: "src/img/lf_g4.jpg",
				items: [
					"1 Druckschlauch S25",
					"5 Druckschläuche C",
					"1 Strahlrohr B",
					"4 Strahlrohre C",
					"1 Stützkrümmer",
					"2 Übergangsstücke B-C",
					"2 Schaummittelbehälter",
					"1 Mittelschaumpistole",
					"1 Feuerlöscher PG6",
					"1 Feuerlöscher CO<sub>2</sub>",
					"1 Kübelspritze",
					"1 Verbandkasten K",
					"1 Verteiler B-CBC mit Druckschlauch B20",
				],
			},
			{
				room: "GR",
				image: "src/img/lf_gr.jpg",
				items: [
					"800 Liter Wassertank",
					"1 Saugkorb A",
					"1 Saugkorbschutz A",
					"1 Sammelstück A-B2",
					"4 Saugschläuche A",
					"5 Mehrzweckleinen",
					"3 Kupplungsschlüssel",
					"2 Schachthaken",
					"1 Verteiler B-CBC",
					"Pumpe",
				],
			},
			{
				room: "Dach",
				image: "",
				items: [
					"2 Schlauchbrücken",
					"1 Steckleiter 4-teilig",
					"1 Einreißhaken 2,5",
					"2 Feuerpatchen",
					"1 Dunghacke",
					"2 Besen",
					"1 Sack Ölbindemittel",
					"1 Eimer Chemikalienbindemittel",
					"1 Saugschlauch A",
					"6 Chemikalienschutzanzug",
					"6 Sprechgarnituren",
					"Zubehör CSA Anzüge",
				],
			},
			{
				room: "Kabine",
				image: "",
				items: [
					"2 Handsprechfunkgeräte 2m",
					"1 ExWarn-Meßgerät",
					"2 Preßluftatmer + Zubehör",
					"9 Warnwesten",
					"3 Handscheinwerfer",
					"8 Feuerwehrleinen",
					"8 Breitgurte",
					"1 Hommel",
					"1 Krankentrage",
					"2 Decken",
				],
			},
			{
				room: "Fahrerhaus",
				image: "",
				items: [
					"2 Anhaltestäbe",
					"1 Handscheinwerfer",
					"1 Funkgerät 4m",
					"2 Funkgeräte 2m",
					"1 Funkmappe",
					"1 Handy",
					"1 Stoffteddy",
				],
			},
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
if (document.getElementById("tableContainer")) {
	const table = createTable();
	const tableContainer = document.createElement("div");
	tableContainer.innerHTML = table;
	document.getElementById("tableContainer").appendChild(tableContainer);
}

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

// Fügen Sie einen Event-Listener zum Suchfeld hinzu, um die Suchergebnisse anzuzeigen, wenn die Eingabe geändert wird
if (document.getElementById("search")) {
	document.getElementById("search").addEventListener("input", (event) => {
		showSearchResults(event.target.value);
	});
}

// Funktion zum Anzeigen der Suchergebnisse
function showSearchResults(input) {
	if (input.length < 3) {
		// Wenn die Eingabe weniger als drei Zeichen lang ist, leeren Sie die Suchergebnisse
		document.getElementById("results").innerHTML = "";
		// document.getElementById("allItems").classList.remove("invisible");
		return;
	} else {
		// Erstellen Sie eine neue Tabelle für die Suchergebnisse
		document.querySelector("#results").style.display = "block";
		let table = `
			<h2>Suchergebnisse</h2>
			<table>
				<tr>
					<th scope="col">Gegenstand</th>
					<th scope="col">Fahrzeug</th>
					<th scope="col">Geräteraum</th>
				</tr>`;

		// Durchlaufen Sie jedes Fahrzeug und jeden Artikel
		let hasResults = false; // Variable, um festzustellen, ob es Ergebnisse gibt
		vehicle.forEach((v) => {
			v.equipment.forEach((e) => {
				e.items.forEach((i) => {
					// Wenn der Artikel die Eingabe enthält, fügen Sie ihn zur Tabelle hinzu
					if (i.toLowerCase().includes(input.toLowerCase())) {
						table += `<tr><td>${i}</td><td>${v.name} (${v.plate})</td><td>${e.room}</td></tr>`;
						hasResults = true; // Setzen Sie die Variable auf true, wenn es Ergebnisse gibt
					}
				});
			});
		});

		table += "</table>";

		// Überprüfen Sie, ob es Ergebnisse gibt
		if (!hasResults) {
			table = `<div class="alert alert-danger" role="alert">Keine Ergebnisse gefunden.</div>`; // Wenn es keine Ergebnisse gibt, zeigen Sie einen Text an
		}

		// Fügen Sie die Tabelle zum HTML-Dokument hinzu
		document.getElementById("results").innerHTML = table;

		// Blende die Gerätliste aus, wenn es Ergebnisse gibt
		// document.getElementById("allItems").classList.add("invisible");
	}
}
// Fügen Sie einen Event-Listener zum Button hinzu
document.getElementById("clear-input").addEventListener("click", () => {
	// Setzen Sie die value-Eigenschaft des Eingabefelds auf einen leeren String
	document.getElementById("search").value = "";
	document.querySelector("#results").style.display = "none";
	// document.getElementById("allItems").classList.remove("invisible");
});
