function makeFooter() {
    let footerCode =                                                                            '\n' +
        '<footer>'                                                                            + '\n' +
        '<p class="footer-text"> Website by Kat Cottrell | '                                  + '\n' +
        '<img src="images/mailFtIcon.png"     class="footer-icon" alt="Email me!">'           + '\n' +
        '<img src="images/phoneFtIcon.png"    class="footer-icon" alt="Call me!">'            + '\n' +
	'<img src="images/linkedinFtIcon.png" class="footer-icon" alt="Link to my LinkedIn">' + '\n' +
	'<img src="images/githubFtIcon.png"   class="footer-icon" alt="Link to my GitHub">'   + '\n' +
        '</p>'                                                                                + '\n' +
        '</footer>'                                                                           + '\n';
    document.write(footerCode);
}
