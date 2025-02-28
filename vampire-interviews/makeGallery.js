let abs = 'https://katcottrell.github.io/vampire-interviews/';
const generic = ["default_pic.jpg", "https://www.w3schools.com/js/js_arrays.asp"]

function makeGallery(galList) {
  let galleryCode = '\n';
  for (let i = 0; i < galList.length; i = i + 6) { // Index of first image of each row in the gallery
    galleryCode += '<div class="galleryRow" style="margin:auto;">\n';
    for (let imgIdx = i; imgIdx < 6; imgIdx = imgIdx + 2) { // Index of filename of each image
      linkIdx = imgIdx + 1;
      galleryCode += '<a href="' + galList[linkIdx] + '">\n';
      galleryCode += '<img src="' + abs + galList[imgIdx] + '">\n';
      galleryCode += '</a>\n'
    }
    galleryCode += '</div> <!-- end galleryRow -->\n';
  }
  document.write(galleryCode);
}
