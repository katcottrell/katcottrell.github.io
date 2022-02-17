function makeSideNav(tab) {
	let tech   = tab === "tech"   ? '<code><a class="active" href="tech.html">My Technical Skills</a></code>'  : '<code><a href="tech.html">My Technical Skills</a></code>\n';
	let c      = tab === "c"      ? '<a class="active" href="c-skills.html">C</a>\n'                           : '<a href="c-skills.html">C</a>\n';
	let excel  = tab === "excel"  ? '<a class="active" href="excel-openrefine-skills.html">Spreadsheets</a>\n' : '<a href="excel-openrefine-skills.html">Spreadsheets</a>\n';
	let git    = tab === "git"    ? '<a class="active" href="git-skills.html">Git & Github</a>\n'              : '<a href="git-skills.html">Git & Github</a>\n';
	let html   = tab === "html"   ? '<a class="active" href="html-css-skills.html">HTML & CSS</a>\n'           : '<a href="html-css-skills.html">HTML & CSS</a>\n';
	let java   = tab === "java"   ? '<a class="active" href="java-skills.html">Java</a>\n'                     : '<a href="java-skills.html">Java</a>\n';
	let linux  = tab === "linux"  ? '<a class="active" href="linux-unix-skills.html">Linux & Unix</a>\n'       : '<a href="linux-unix-skills.html">Linux & Unix</a>\n';
	let ml     = tab === "ml"     ? '<a class="active" href="ml-skills.html">Machine Learning</a>\n'           : '<a href="ml-skills.html">Machine Learning</a>\n';
	let matlab = tab === "matlab" ? '<a class="active" href="matlab-skills.html">MATLAB</a>\n'                 : '<a href="matlab-skills.html">MATLAB</a>\n';
	let python = tab === "python" ? '<a class="active" href="python-skills.html">Python</a>\n'                 : '<a href="python-skills.html">Python</a>\n';
	let r      = tab === "r"      ? '<a class="active" href="r-skills.html">R</a>\n'                           : '<a href="r-skills.html">R</a>\n';
	let db     = tab === "db"     ? '<a class="active" href="sql-skills.html">Databases</a>\n'                 : '<a href="sql-skills.html">Databases</a>\n';
	let stata  = tab === "stata"  ? '<a class="active" href="stata-skills.html">Stata</a>\n'                   : '<a href="stata-skills.html">Stata</a>\n';
	let dv     = tab === "dv"     ? '<a class="active" href="tableau-skills.html">Data Visualization</a>\n'    : '<a href="tableau-skills.html">Data Visualization</a>\n';
  
	let sideNavCode = 
	    '<div class="sidenav">\n' + 
	    tech + c + excel + git + html + java + linux + ml + matlab + python + r + db + stata + dv + 
	    '</div>\n';
	
	document.write(sideNavCode);
}
