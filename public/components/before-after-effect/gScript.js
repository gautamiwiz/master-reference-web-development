console.log("gScript loaded");

const container = document.querySelector(".container");
const before = document.querySelector(".container-before");
const after = document.querySelector(".container-after");
const separator = document.querySelector(".separator");

const beforeAfter = (e) => {
  //console.log(e);
  let mouseXposition = e.layerX;

  //get the screen width
  let screenWidth = container.offsetWidth;

  after.style.width = mouseXposition + "px";
  separator.style.left = mouseXposition + "px";

  if (mouseXposition < 30) {
    after.style.width = 0;
    separator.style.left = -20 + "px";
  }
  if (mouseXposition + 20 > screenWidth) {
    after.style.width = screenWidth + "px";
    separator.style.left = screenWidth + 20 + "px";
  }
};

container.addEventListener("mousemove", beforeAfter);
