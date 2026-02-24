/**
 * Navigation-Funktionalität
 * @module navigation
 */

/**
 * Lädt die Navigation und markiert den aktiven Link
 * @param {string} activePage - Die aktuelle Seite ('search' oder 'list')
 */
export async function loadNavigation(activePage) {
	const navContainer = document.getElementById('nav-container');
	
	if (!navContainer) {
		console.warn("Navigation-Container nicht gefunden");
		return;
	}

	try {
		const response = await fetch('src/components/navigation.html');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const html = await response.text();
		navContainer.innerHTML = html;

		// Markiere den aktiven Link
		setActiveNavLink(activePage);
	} catch (error) {
		console.error("Fehler beim Laden der Navigation:", error);
		// Fallback: Zeige eine einfache Navigation
		navContainer.innerHTML = createFallbackNavigation(activePage);
	}
}

/**
 * Markiert den aktiven Navigationslink
 * @param {string} activePage - Die aktuelle Seite ('search' oder 'list')
 */
function setActiveNavLink(activePage) {
	const searchLink = document.getElementById('nav-search');
	const listLink = document.getElementById('nav-list');

	if (activePage === 'search' && searchLink) {
		searchLink.classList.add('active');
		searchLink.setAttribute('aria-current', 'page');
	} else if (activePage === 'list' && listLink) {
		listLink.classList.add('active');
		listLink.setAttribute('aria-current', 'page');
	}
}

/**
 * Erstellt eine Fallback-Navigation, falls das Laden fehlschlägt
 * @param {string} activePage - Die aktuelle Seite
 * @returns {string} HTML-String der Navigation
 */
function createFallbackNavigation(activePage) {
	const searchActive = activePage === 'search' ? 'active' : '';
	const listActive = activePage === 'list' ? 'active' : '';

	return `
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Geraetefinder</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link ${searchActive}" href="index.html">Suche</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${listActive}" href="list.html">Liste</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`;
}
