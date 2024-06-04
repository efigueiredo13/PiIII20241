document.addEventListener("DOMContentLoaded", function() {
  // Get the modal
  var modal = document.getElementById("infoModal");
  var modalText = document.getElementById("modal-text");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get all images that should open the modal
  var images = document.querySelectorAll(".imga");

  // Loop through the images and attach click event
  images.forEach(function(img) {
    img.onclick = function() {
      var info = img.getAttribute("data-info");
      modalText.textContent = info;
      modal.style.display = "block";
    };
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
