const languageLinks    = ['c', 'java', 'matlab', 'python', 'r', 'scheme'];
const languageTitles   = ['C, C++, & C#', 'Java', 'MATLAB', 'Python', 'R', 'Racket (Lisp/Scheme)'];
const otherSkillLinks  = ['coursework', 'database', 'datavis', 'git', 'ml', 'spreadsheet', 'web', 'more'];
const otherSkillTitles = ['Coursework', 'Databases', 'Data Visualization', 'Git', 'Machine Learning', 
			  'Spreadsheets', 'Web Development', 'More']
let abs = 'https://katcottrell.github.io/';

function makeSideNav(tab) {  
	let sideNavCode = '\n<div class="sidenav">\n';
	sideNavCode    += '<a class="sideTitle" href="' + abs + 'tech.html">My Tech Skills</a>\n';
	sideNavCode    += '<hr style="width:90%;margin:10px 5%;">\n';
	sideNavCode    += '<a class="sideHeading">Programming Languages</a>\n';
	for (let i = 0; i < languageLinks.length; i++) {
		if (tab === languageLinks[i]) {
			sideNavCode += '<a class="active" ';
		} else {
			sideNavCode += '<a class="sideTabs" ';
		}
		sideNavCode += 'href="' + abs + 'tech/' + languageLinks[i] + '-skills.html">' + 
				languageTitles[i] + '</a>\n';
	}
	sideNavCode += '<a class="sideHeading" style="margin-top:20px;">Other Skills</a>\n';
	for (let i = 0; i < otherSkillLinks.length; i++) {
		if (tab === otherSkillLinks[i]) {
			sideNavCode += '<a class="active" ';
		} else {
			sideNavCode += '<a class="sideTabs" ';
		}
		sideNavCode += 'href="' + abs + 'tech/' + otherSkillLinks[i] + '-skills.html">' + 
				otherSkillTitles[i] + '</a>\n';
	}
	sideNavCode += '</div>\n';
	document.write(sideNavCode);
}
