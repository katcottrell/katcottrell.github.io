const languageLinks    = ['c', 'java', 'matlab', 'python', 'r', 'scheme'];
const languageTitles   = ['C, C++, C#', 'Java', 'MATLAB', 'Python', 'R', 'Scheme (Lisp)'];
const otherSkillLinks  = ['datavis', 'database', 'git', 'ml', 'spreadsheet', 'web', 'more'];
const otherSkillTitles = ['Data Visualization', 'Databases', 'Git', 'Machine Learning', 
			  'Spreadsheets', 'Web Development', 'More']
let abs                = 'https://katcottrell.github.io/tech/';

function makeSideNav(tab) {  
	let sideNavCode = '<div class="sidenav">\n<a1>Languages</a1>\n';
	for (let i = 0; i < languageLinks.length; i++) {
		sideNavCode += '<a2 ';
		if (tab === languageLinks[i]) {
			sideNavCode += 'class="active" ';
		}
		sideNavCode += 'href="' + abs + languageLinks[i] + '-skills.html">' + 
				languageTitles[i] + '</a2>\n';
	}
	sideNavCode += '<a1>Other Skills</a1>\n';
	for (let i = 0; i < otherSkillLinks.length; i++) {
		sideNavCode += '<a2 ';
		if (tab === otherSkillLinks[i]) {
			sideNavCode += 'class="active" ';
		}
		sideNavCode += 'href="' + abs + otherSkillLinks[i] + '-skills.html">' + 
				otherSkillTitles[i] + '</a2>\n';
	}
	sideNavCode += '</div>\n';
	document.write(sideNavCode);
}
