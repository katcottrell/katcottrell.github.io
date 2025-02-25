function makeHeader(tab) {
	let abs      = 'https://katcottrell.github.io/';
	
	let headerCode = 
	    '<header>'                                                                                                    + '\n' +
	    '<link rel="stylesheet" href="https://katcottrell.github.io/vampire-interviews/nightStyle.css">'              + '\n' +
	    '<div id="header-image style="border-bottom:solid 4px var(--myMidGray);">'                                    + '\n' +
	    '<a href="https://katcottrell.github.io/vampire-interviews/nightlinks.html">'                                 + '\n' +
	    '<img src="https://katcottrell.github.io/vampire-interviews/Nightlink%20banner.jpg" style="width:100%;"'      + '\n' +
	    '</a>'                                                                                                        + '\n' +
	    '</div>'                                                                                                      + '\n' +
	    '</header>'                                                                                                   + '\n';
	
	document.write(headerCode);
}
