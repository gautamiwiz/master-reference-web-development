/**
 * https://www.youtube.com/watch?v=ResWVWI333o
 * https://github.com/tutsplus/javascript-for-web-designers
 */
console.log("gScript loaded!");
/*
 * - Declare variables
 * - Get the slide width
 * - Set the proper left value for each slide
 * - Calculate tallest slide
 * - Add the animated class to each slide
 * - Add an event listener for next button
 * - Add an event listener for previous button
 * - Add an event listener for window resize
 * - Declare a function that calculates the tallest slide
 * - Declare a function that will change the slide position
 */

var slides = document.getElementsByClassName("slide"),
  slider = document.getElementById("slider"),
  cursor = 0,
  slideWidth = 0,
  topHeight = 0,
  slideCount = slides.length;

if (slideCount > 0) {
  // Get the slide width
  slideWidth = slides[0].offsetWidth;

  for (var i = 0; i < slideCount; i++) {
    // Set the proper left value for each slide
    slides[i].style.left = slideWidth * i + "px";

    // Add the animated class to each slide
    slides[i].classList.add("animated");
  }

  // Calculate tallest slide
  calculateTallestSlide();

  // Add an event listener for next button
  document.getElementById("next").addEventListener("click", function (event) {
    event.preventDefault();

    if (cursor < slideCount - 1) {
      moveSlides("forward");
      cursor++;
    }
  });

  // Add an event listener for previous button
  document.getElementById("prev").addEventListener("click", function (event) {
    event.preventDefault();

    if (cursor > 0) {
      moveSlides("backward");
      cursor--;
    }
  });

  // Add event listener for window resize
  window.addEventListener("resize", function () {
    // Get the new slide width
    slideWidth = slides[0].offsetWidth;

    // Recalculate the left position of the slides
    for (i = 0; i < slides.length; i++) {
      if (i <= cursor) {
        slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
        console.log(slides[i].style.left);
      } else if (i > cursor) {
        slides[i].style.left = slideWidth * (i - cursor) + "px";
        console.log(slides[i].style.left);
      }
    }

    // Recalculate the height of the tallest slide
    calculateTallestSlide();
  });
}

// Declare a function that calculates the tallest slide
function calculateTallestSlide() {
  for (var i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }

  slider.style.height = topHeight + "px";
}

// Declare a function that will change the slide position
function moveSlides(direction) {
  for (var j = 0; j < slides.length; j++) {
    if (direction == "backward") {
      slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, "") + slideWidth + "px";
    } else if (direction == "forward") {
      slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, "") - slideWidth + "px";
    }
  }
}
