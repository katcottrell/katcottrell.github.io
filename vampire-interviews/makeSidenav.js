let abs = 'https://katcottrell.github.io/vampire-interviews/';

function makeSideNav(tab) {  
	let sideNavCode =                                                                                    '\n' +
                    '<div class="sidenav">'                                                                + '\n' +
                    '<a class="sideHeading" href="' + abs + 'nightlinks.html">Home</a>'                    + '\n' +
                    '<hr style="width:90%;margin:10px 5%;">'                                               + '\n' +
                    '<a class="sideHeading" href="' + abs + 'rules_faq.html">Rules & FAQ</a>'              + '\n' +
                    '<hr style="width:90%;margin:10px 5%;">'                                               + '\n' +
                    '<a class="sideHeading" href="' + abs + 'join.html">Join</a>'                          + '\n' +
                    '<hr style="width:90%;margin:10px 5%;">'                                               + '\n' +
                    '<a class="sideTabs" href="' + abs + 'all-listings.html">ALL LISTINGS</a>'             + '\n' +
                    '<a class="sideTabs" href="' + abs + 'cosmetology.html">Cosmetology</a>'               + '\n' +
                    '<a class="sideTabs" href="' + abs + 'events-and-venues.html">Events &amp; Venues</a>' + '\n' +
                    '<a class="sideTabs" href="' + abs + 'media.html">Media</a>'                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'merchants.html">Merchants</a>'                   + '\n' +
                    '<a class="sideTabs" href="' + abs + 'music-and-audio.html">Music &amp; Audio</a>'     + '\n' +
                    '<a class="sideTabs" href="' + abs + 'occult.html">Occult</a>'                         + '\n' +
                    '<a class="sideTabs" href="' + abs + 'performing-arts.html">Performing Arts</a>'       + '\n' +
                    '<a class="sideTabs" href="' + abs + 'photo-and-video.html">Photo &amp; Video</a>'     + '\n' +
                    '<a class="sideTabs" href="' + abs + 'stem.html">STEM</a>'                             + '\n' +
                    '<a class="sideTabs" href="' + abs + 'visual-arts.html">Visual Arts</a>'               + '\n' +
                    '<a class="sideTabs" href="' + abs + 'writing.html">Writing</a>'                       + '\n' +
                    '<a class="sideTabs" href="' + abs + 'other.html">Other</a></div>'                     + '\n' +
                    '</div>'                                                                               + '\n';
	document.write(sideNavCode);
}
