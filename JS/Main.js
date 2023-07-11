const body = document.body;
const lastPanel = document.querySelector(".panels .panel:last-child");

window.addEventListener("load", () => {
  body.classList.add("loaded");
  
  lastPanel.addEventListener("transitionend", () => {
    if (body.classList.contains("second-round")) {
      body.classList.add("third-round");
    } else {
      body.classList.add("second-round");
    }
  });
});