function makeHeader(tab) {
	let home     = tab === "home"     ? '<a class="active" href="index.html">Home</a>\n'            : '<a href="index.html">Home</a>\n';
	let about    = tab === "about"    ? '<a class="active" href="about.html">About</a>\n'           : '<a href="about.html">About</a>\n';
	let resume   = tab === "resume"   ? '<a class="active" href="resume.html">Resume</a>\n'         : '<a href="resume.html">Resume</a>\n';
	let tech     = tab === "tech"     ? '<a class="active" href="tech.html">Technical Skills</a>\n' : '<a href="tech.html">Technical Skills</a>\n';
	let projects = tab === "projects" ? '<a class="active" href="projects.html">Projects</a>\n'     : '<a href="projects.html">Projects</a>\n';
	let art      = tab === "art"      ? '<a class="active" href="art.html">Art</a>\n'               : '<a href="art.html">Art</a>\n';
	let contact  = tab === "contact"  ? '<a class="active" href="contact.html">Contact</a>\n'       : '<a href="contact.html">Contact</a>\n';
	
	let headerCode = 
	    '<header>\n' +
	    '<link rel="stylesheet" href="style.css">\n' +
	    '<div id="header-image-menu">\n' +
	    '<img src="images/My_Banner.png">\n' +
	    '</div>\n' +
	    '<div class="topnav">\n' +
	    '<code><a href="index.html">Kat Cottrell</a></code>\n' +
	    home + about + resume + tech + projects + art + contact +
	    '</div>\n' +
	    '</header>';
	
	document.write(headerCode);
}
