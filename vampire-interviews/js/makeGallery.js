let absGallery = 'https://katcottrell.github.io/vampire-interviews/';

// GALLERIES
const photos_wanted = ["images/photos_wanted.jpg", "https://google.com",
                       "images/photos_wanted.jpg", "https://google.com",
                       "images/photos_wanted.jpg", "https://google.com"]
const homeCategories = ["images/home/cosmetology.JPG",       "cosmetology.html",
                        "images/home/events-and-venues.JPG", "events-and-venues.html",
                        "images/home/merchants.JPG",        "merchants.html",
                        "images/home/music-and-audio.JPG",   "music-and-audio.html",
                        "images/home/occult.JPG",            "occult.html",
                        "images/home/other.JPG",             "other.html",
                        "images/home/performing-arts.JPG",   "performing-arts.html",
                        "images/home/photo-and-video.JPG",   "photo-and-video.html",
                        "images/home/production.JPG",        "production.html",
                        "images/home/stem.JPG",              "stem.html",
                        "images/home/visual-arts.JPG",       "visual-arts.html",
                        "images/home/writing.JPG",           "writing.html"]

function makeGallery(galList) {
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
}
