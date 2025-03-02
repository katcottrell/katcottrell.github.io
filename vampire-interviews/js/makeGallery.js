let absGallery = 'https://katcottrell.github.io/vampire-interviews/images/';

// GALLERIES
const photos_wanted = ["photos_wanted.jpg", "https://google.com",
                       "photos_wanted.jpg", "https://google.com",
                       "photos_wanted.jpg", "https://google.com"]
const homeCategories = ["home/cosmetology.JPG",       "cosmetology.html",
                        "home/events-and-venues.JPG", "events-and-venues.html",
                        "home/merchants.JPG",        "merchants.html",
                        "home/music-and-audio.JPG",   "music-and-audio.html",
                        "home/occult.JPG",            "occult.html",
                        "home/performing-arts.JPG",   "performing-arts.html",
                        "home/photo-and-video.JPG",   "photo-and-video.html",
                        "home/production.JPG",        "production.html",
                        "home/stem.JPG",              "stem.html",
                        "home/visual-arts.JPG",       "visual-arts.html",
                        "home/writing.JPG",           "writing.html",
                        "home/other.JPG",             "other.html"]

/*function makeGallery(galList) {
    let galleryCode = '\n';
    for (let rowOffset = 0; rowOffset < galList.length; rowOffset = rowOffset + 6) {
        galleryCode += '<div class="galleryRow"">\n';
        for (let fileNameOffset = 0; fileNameOffset < 6; fileNameOffset = fileNameOffset + 2) {
            let fileNameIdx = parseInt(rowOffset) + parseInt(fileNameOffset);
            let linkIdx = fileNameIdx + 1;
            if (fileNameIdx < galList.length) {
                galleryCode += '<a href="' + galList[linkIdx] + '">';
                galleryCode += '<img class="thirds" src="' + absGallery + galList[fileNameIdx] + '">';
                galleryCode += '</a>';
            }
        }
        galleryCode += '</div> <!-- end galleryRow -->\n';
    }
    document.write(galleryCode);
}*/

function makeGallery(galList) {
    let galleryCode = '\n';
    for (let fileNameIdx = 0; fileNameIdx < galList.length; fileNameIdx = fileNameIdx + 2) {
      let linkIdx = fileNameIdx + 1;
      galleryCode += '<a href="' + galList[linkIdx] + '">';
      galleryCode += '<img class="thirds" src="' + absGallery + galList[fileNameIdx] + '">';
      galleryCode += '</a>';
    }
    document.write(galleryCode);
}
