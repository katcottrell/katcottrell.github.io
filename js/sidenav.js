const languageLinks    = ['c', 'java', 'matlab', 'python', 'r', 'scheme'];
const languageTitles   = ['C, C++, C#', 'Java', 'MATLAB', 'Python', 'R', 'Scheme (Lisp)'];
const otherSkillLinks  = ['datavis', 'database', 'git', 'ml', 'spreadsheet', 'web', 'more'];
const otherSkillTitles = ['Data Visualization', 'Databases', 'Git', 'Machine Learning', 
			  'Spreadsheets', 'Web Development', 'More']
let abs                = 'https://katcottrell.github.io/tech/';

function makeSideNav(tab) {  
	let sideNavCode = '<div class="sidenav">\n<a class="cats">Languages</a>\n';
	for (let i = 0; i < languageLinks.length; i++) {
		if (tab === languageLinks[i]) {
			sideNavCode += '<a class="active" ';
		} else {
			sideNavCode += '<a class="tabs" ';
		}
		sideNavCode += 'href="' + abs + languageLinks[i] + '-skills.html">' + 
				languageTitles[i] + '</a>\n';
	}
	sideNavCode += '<a class="cats">Other Skills</a>\n';
	for (let i = 0; i < otherSkillLinks.length; i++) {
		if (tab === otherSkillLinks[i]) {
			sideNavCode += '<a class="active" ';
		} else {
			sideNavCode += '<a class="tabs" ';
		}
		sideNavCode += 'href="' + abs + otherSkillLinks[i] + '-skills.html">' + 
				otherSkillTitles[i] + '</a>\n';
	}
	sideNavCode += '</div>\n';
	document.write(sideNavCode);
}
