function makeSideNav(tab) {
	let abs    = 'https://katcottrell.github.io/';
	let tech   = tab === "tech"   ? 'class="active" ' : '';
	let c      = tab === "c"      ? 'class="active" ' : '';
	let excel  = tab === "excel"  ? 'class="active" ' : '';
	let git    = tab === "git"    ? 'class="active" ' : '';
	let html   = tab === "html"   ? 'class="active" ' : '';
	let java   = tab === "java"   ? 'class="active" ' : '';
	let linux  = tab === "linux"  ? 'class="active" ' : '';
	let ml     = tab === "ml"     ? 'class="active" ' : '';
	let matlab = tab === "matlab" ? 'class="active" ' : '';
	let python = tab === "python" ? 'class="active" ' : '';
	let r      = tab === "r"      ? 'class="active" ' : '';
	let db     = tab === "db"     ? 'class="active" ' : '';
	let stata  = tab === "stata"  ? 'class="active" ' : '';
	let dv     = tab === "dv"     ? 'class="active" ' : '';
  
	let sideNavCode = 
	    '<div class="sidenav">\n' + 
	    '<code><a ' + tech + 'href="' + abs + 'tech.html">My Technical Skills</a></code>\n' +
	    '<a ' + c      + 'href="' + abs + 'tech/c-skills.html">C</a>\n' +
	    '<a ' + excel  + 'href="' + abs + 'tech/excel-openrefine-skills.html">Spreadsheets</a>\n' +
	    '<a ' + git    + 'href="' + abs + 'tech/git-skills.html">Git & Github</a>\n' +
	    '<a ' + html   + 'href="' + abs + 'tech/html-css-skills.html">HTML & CSS</a>\n' +
	    '<a ' + java   + 'href="' + abs + 'tech/java-skills.html">Java</a>\n' +
	    '<a ' + linux  + 'href="' + abs + 'tech/linux-unix-skills.html">Linux & Unix</a>\n' +
	    '<a ' + ml     + 'href="' + abs + 'tech/ml-skills.html">Machine Learning</a>\n' +
	    '<a ' + matlab + 'href="' + abs + 'tech/matlab-skills.html">MATLAB</a>\n' +
	    '<a ' + python + 'href="' + abs + 'tech/python-skills.html">Python</a>\n' +
	    '<a ' + r      + 'href="' + abs + 'tech/r-skills.html">R</a>\n' +
	    '<a ' + db     + 'href="' + abs + 'tech/sql-skills.html">Databases</a>\n' +
	    '<a ' + stata  + 'href="' + abs + 'tech/stata-skills.html">Stata</a>\n' +
	    '<a ' + dv     + 'href="' + abs + 'tech/tableau-skills.html">Data Visualization</a>\n' +
	    '</div>\n';
	
	document.write(sideNavCode);
}
