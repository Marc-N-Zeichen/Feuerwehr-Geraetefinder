/**
 * Lightbox-Funktionalität für Bildanzeige
 * @module lightbox
 */

/**
 * Öffnet eine Lightbox mit dem angegebenen Bild
 * @param {string} imageSrc - Der Pfad zum Bild
 */
export function openLightbox(imageSrc) {
	try {
		// Erstellen Sie ein neues div-Element für die Lightbox
		const lightbox = document.createElement("div");
		lightbox.id = "lightbox";

		// Erstellen Sie ein neues img-Element für das Bild
		const img = document.createElement("img");
		img.src = imageSrc;
		img.alt = "Vergrößertes Bild";

		// Fügen Sie das img-Element zur Lightbox hinzu
		lightbox.appendChild(img);

		// Fügen Sie die Lightbox zum body-Element hinzu
		document.body.appendChild(lightbox);

		// Schließen Sie die Lightbox, wenn sie angeklickt wird
		lightbox.addEventListener("click", () => {
			document.body.removeChild(lightbox);
		});

		// Schließen mit ESC-Taste
		const handleEscape = (event) => {
			if (event.key === "Escape") {
				if (document.getElementById("lightbox")) {
					document.body.removeChild(lightbox);
				}
				document.removeEventListener("keydown", handleEscape);
			}
		};
		document.addEventListener("keydown", handleEscape);
	} catch (error) {
		console.error("Fehler beim Öffnen der Lightbox:", error);
	}
}

// Mache die Funktion global verfügbar für onclick-Handler
if (typeof window !== 'undefined') {
	window.openLightbox = openLightbox;
}
