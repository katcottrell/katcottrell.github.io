function makeHeader(tab) {
	let abs      = 'https://katcottrell.github.io/';
	let home     = tab === "home"     ? 'class="active" ' : '';
	let about    = tab === "about"    ? 'class="active" ' : '';
	let resume   = tab === "resume"   ? 'class="active" ' : '';
	let tech     = tab === "tech"     ? 'class="active" ' : '';
	let projects = tab === "projects" ? 'class="active" ' : '';
	let art      = tab === "art"      ? 'class="active" ' : '';
	let contact  = tab === "contact"  ? 'class="active" ' : '';
	
	let headerCode = 
	    '<header>\n' +
	    '<link rel="stylesheet" href="https://katcottrell.github.io/style.css">\n' +
	    '<div id="header-image-menu">\n' +
	    '<img src="https://katcottrell.github.io/images/My_Banner.png">\n' +
	    '</div>\n' +
	    '<div class="topnav">\n' +
	    '<code><a href="index.html">Kat Cottrell</a></code>\n' +
	    '<a ' + home     + 'href="' + abs + 'index.html">Home</a>\n' +
	    '<a ' + about    + 'href="' + abs + 'about.html">About</a>\n' +
	    '<a ' + resume   + 'href="' + abs + 'resume.html">Resume</a>\n' +
	    '<a ' + tech     + 'href="' + abs + 'tech.html">Technical Skills</a>\n' +
	    // '<a ' + projects + 'href="' + abs + 'projects.html">Projects</a>\n' +
	    '<a ' + art      + 'href="' + abs + 'art.html">Art</a>\n' +
	    '<a ' + contact  + 'href="' + abs + 'contact.html">Contact</a>\n' +
	    '</div>\n' +
	    '</header>\n';
	
	document.write(headerCode);
}
