let abs = 'https://katcottrell.github.io/vampire-interviews/';

function makeSideNav(tab) {  
	let sideNavCode =                                                                                               '\n' +
                    '<div class="sidenav">'                                                                           + '\n' +
                    '<a class="sideHeading" href="' + abs + 'nightlinks.html">Home</a>'                               + '\n' +
                    '<hr class="thickHr">'                                                                            + '\n' +
                    '<a class="sideHeading" href="' + abs + 'about.html">About</a>'                                   + '\n' +
                    '<hr class="thickHr">'                                                                            + '\n' +
                    '<a class="sideHeading" href="' + abs + 'calendar.html">Calendar</a>'                             + '\n' +
                    '<hr class="thickHr">'                                                                            + '\n' +
                    '<a class="sideHeading" href="' + abs + 'join.html">Join</a>'                                     + '\n' +
                    '<hr class="thickHr">'                                                                            + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/all-listings.html">All Listings</a>'             + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/cosmetology.html">Cosmetology</a>'               + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/events-and-venues.html">Events &amp; Venues</a>' + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/merchants.html">Merchants</a>'                   + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/music-and-audio.html">Music &amp; Audio</a>'     + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/occult.html">Occult</a>'                         + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/performing-arts.html">Performing Arts</a>'       + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/photo-and-video.html">Photo &amp; Video</a>'     + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/production.html">Production</a>'                 + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/stem.html">STEM</a>'                             + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/visual-arts.html">Visual Arts</a>'               + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/writing.html">Writing</a>'                       + '\n' +
                    '<hr class="skinnyHr">'                                                                           + '\n' +
                    '<a class="sideTabs" href="' + abs + 'categories/other.html">Other</a>'                           + '\n' +
                    '</div> <!-- END class="sidenav" -->'                                                             + '\n';
	document.write(sideNavCode);
}
