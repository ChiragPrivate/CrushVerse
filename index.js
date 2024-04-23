function unlockGallery() {
  var password = document.getElementById("password").value;
  if (password === "preeti") {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("photo-gallery").style.display = "block";
  } else {
    alert("Incorrect password! Please try again.");
  }
}

function enlargePhoto(photoId) {
  var photo = document.getElementById(photoId);
  var photoImg = photo.querySelector("img").cloneNode(true);

  var enlargedPhoto = document.getElementById("enlarged-photo");
  enlargedPhoto.innerHTML = "";
  enlargedPhoto.appendChild(photoImg);
  enlargedPhoto.style.display = "block";
}

function hideEnlargedPhoto() {
  document.getElementById("enlarged-photo").style.display = "none";
}
