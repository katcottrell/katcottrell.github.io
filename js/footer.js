function makeFooter() {
	let abs = 'https://katcottrell.github.io/';
	let footerCode =                                                                                       '\n' +
	    '<footer>'                                                                                       + '\n' +
	    '<p class="footer-text"> Website by Kat Cottrell | '                                             + '\n' +
	    '<img src="' + abs + 'images/mailFtIcon.png"     class="footer-icon" alt="Email me!">'           + '\n' +
	    '<img src="' + abs + 'images/phoneFtIcon.png"    class="footer-icon" alt="Call me!">'            + '\n' +
	    '<img src="' + abs + 'images/linkedinFtIcon.png" class="footer-icon" alt="Link to my LinkedIn">' + '\n' +
	    '<img src="' + abs + 'images/githubFtIcon.png"   class="footer-icon" alt="Link to my GitHub">'   + '\n' +
	    '</p>'                                                                                           + '\n' +
	    '</footer>'                                                                                      + '\n';
	document.write(footerCode);
}
