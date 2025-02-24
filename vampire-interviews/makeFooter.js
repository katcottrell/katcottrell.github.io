function makeFooter() {
	let abs = 'https://katcottrell.github.io/';
	let linkAttributes = 'target="_blank" rel="noopener noreferrer" style="color:transparent;"';
  
	let footerCode =                                                                                      '\n' +
	    '<footer>'                                                                                      + '\n' +
	    '<p class="footer-text"> Website by Kat | '                                                     + '\n' +
	    
	    '<a href="google.com" ' + linkAttributes + '>'                                                  + '\n' +
	    '<img src="' + abs + 'vampire-interviews/ig_icon.png"   class="footer-icon" alt="Instagram">'   + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '<a href="https://github.com/katcottrell/" ' + linkAttributes + '>'                             + '\n' +
	    '<img src="' + abs + 'vampire-interviews/fb_icon.png"   class="footer-icon" alt="Facebook">'    + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '<a href="mailto:fledermischief@gmail.com" ' + linkAttributes + '>'                             + '\n' + 
	    '<img src="' + abs + 'images/mailFtIcon.png"     class="footer-icon" alt="Email">'              + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '</p>'                                                                                          + '\n' +
	    '</footer>'                                                                                     + '\n';
  
	document.write(footerCode);
}
