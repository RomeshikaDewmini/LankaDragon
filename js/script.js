import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// the additional code you saw in the video will not be needed :)


// Get the modal and button elements
var modal = document.getElementById("popupForm");
var btn = document.getElementById("getStartedButton");
var closeBtn = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

