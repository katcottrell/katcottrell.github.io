let absGallery = 'https://katcottrell.github.io/vampire-interviews/';
const generic = ["default_pic.jpg", "https://google.com",
                 "default_pic.jpg", "https://google.com",
                 "default_pic.jpg", "https://google.com",
                 "default_pic.jpg", "https://google.com",
                 "default_pic.jpg", "https://google.com"]

function makeGallery(galList) {
    let galleryCode = '\n';
    for (let rowOffset = 0; rowOffset < galList.length; rowOffset = rowOffset + 6) {
        galleryCode += '<div class="galleryRow"">\n';
        for (let fileNameOffset = 0; fileNameOffset < 6; fileNameOffset = fileNameOffset + 2) {
            let fileNameIdx = parseInt(rowOffset) + parseInt(fileNameOffset);
            let linkIdx = fileNameIdx + 1;
            if (fileNameIdx < galList.length) {
                galleryCode += '<a href="' + galList[linkIdx] + '">';
                galleryCode += '<img class="thirds" src="' + absGallery + galList[fileNameIdx] + '" style="width:31%;margin:1%;">';
                galleryCode += '</a>\n';
            }
        }
        galleryCode += '</div> <!-- end galleryRow -->\n';
    }
    document.write(galleryCode);
} 
makeGallery(generic);
