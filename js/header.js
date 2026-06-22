function makeHeader(tab) {
	let abs        = 'https://katcottrell.github.io/';
	let about      = tab === "about"      ? 'class="active" ' : '';
	let resume     = tab === "resume"     ? 'class="active" ' : '';
	let management = tab === "management" ? 'class="active" ' : '';
	let events     = tab === "events"     ? 'class="active" ' : '';
	let tech       = tab === "tech"       ? 'class="active" ' : '';
	let projects   = tab === "community"  ? 'class="active" ' : '';
	let art        = tab === "art"        ? 'class="active" ' : '';
	let contact    = tab === "contact"    ? 'class="active" ' : '';
	
	let headerCode = 
	    '<header>\n' +
	    '<link rel="stylesheet" href="/style.css">\n' +
	    '<div id="header-image-menu">\n' +
	    '<a href="https://katcottrell.github.io">' +
	    '<img src="/images/Katherine Cottrell header padded.jpg" style="width:80%;margin:48px 10% 24px 10%;">\n' +
	    '</a>' +
	    '</div>\n' +
	    '<div class="topnav">\n' +
	    '<a ' + about      + 'href="' + abs + 'index.html">About</a>\n' +
	    '<a ' + resume     + 'href="' + abs + 'resume.html">Résumé</a>\n' +
	    '<a ' + management + 'href="' + abs + 'management.html">Management</a>\n' +
	    '<a ' + events     + 'href="' + abs + 'events.html">Events</a>\n' +
	    '<a ' + tech       + 'href="' + abs + 'tech.html">Technical Skills</a>\n' +
	    '<a ' + projects   + 'href="' + abs + 'community.html">Community</a>\n' +
	    '<a ' + art        + 'href="' + abs + 'art.html">Art</a>\n' +
	    '<a ' + contact    + 'href="' + abs + 'contact.html">Contact</a>\n' +
	    '</div>\n' +
	    '</header>\n';
	
	document.write(headerCode);
}
