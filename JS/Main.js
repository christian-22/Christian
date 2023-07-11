// loading bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loading-bar");
    var width = 1;
    var id = setInterval(frame, 6);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


// loading transition animation
const body = document.body;
const lastPanel = document.querySelector(".panels .panel:last-child");

window.addEventListener("load", () => {
  body.classList.add("loaded");
  move();
  
  lastPanel.addEventListener("transitionend", () => {
    if (body.classList.contains("second-round")) {
      body.classList.add("third-round");
    } else {
      body.classList.add("second-round");
    }
  });
});
