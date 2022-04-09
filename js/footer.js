function makeFooter() {
	let abs = 'https://katcottrell.github.io/';
	let linkAttributes = 'target="_blank" rel="noopener noreferrer" style="color:transparent;"';
	let footerCode =											  '\n' +
	    '<footer>'												+ '\n' +
	    '<p class="footer-text"> Website by Kat Cottrell | '						+ '\n' +
	    
	    '<a href="mailto:cottrellkat@gmail.com" ' + linkAttributes + '>'					+ '\n' +
	    '<img src="' + abs + 'images/mailFtIcon.png"     class="footer-icon" alt="Email me!">'		+ '\n' +
	    '</a>'												+ '\n' +
	    
	    '<a href="tel:7274531850" ' + linkAttributes + '>'							+ '\n' +
	    '<img src="' + abs + 'images/phoneFtIcon.png"    class="footer-icon" alt="Call me!">'		+ '\n' +
	    '</a>'												+ '\n' +
	    
	    '<a href="https://www.linkedin.com/in/katherine-cottrell-656490168/" ' + linkAttributes + '>'	+ '\n' +
	    '<img src="' + abs + 'images/linkedinFtIcon.png" class="footer-icon" alt="Link to my LinkedIn">'	+ '\n' +
	    '</a>'												+ '\n' +
	    
	    '<a href="https://github.com/katcottrell/" ' + linkAttributes + '>'					+ '\n' +
	    '<img src="' + abs + 'images/githubFtIcon.png"   class="footer-icon" alt="Link to my GitHub">'	+ '\n' +
	    '</a>'												+ '\n' +
	    
	    '</p>'												+ '\n' +
	    '</footer>'												+ '\n';
	document.write(footerCode);
}
