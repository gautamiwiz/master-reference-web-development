/**
 * https://www.youtube.com/watch?v=ResWVWI333o
 * https://github.com/tutsplus/javascript-for-web-designers
 */

console.log("gScript loaded!");

/*
*----------- 
- calculate document height and the set the offset to a quarter of that value
- add event listeners for scroll and click
*/

var goToTopLink = document.querySelector("footer a"),
  body = document.body,
  docElem = document.documentElement,
  offset = 100,
  scrollPos,
  docHeight,
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1; //check if the browser is firefox or not

//console.log("is firefox : ", isFirefox);

//calculate document height
//different browsers have different syntax.. so we check via multiple height methods

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

console.log("docHeight : ", docHeight);

if (docHeight != "undefined") {
  offset = docHeight / 4;
  console.log("offset : ", offset);
}

//scroll event listener
window.addEventListener("scroll", function (event) {
  scrollPos = body.scrollTop || docElem.scrollTop;
  //console.log("Scroll top values :", scrollPos);
  goToTopLink.className = scrollPos > offset ? "visible" : "";
});

//add click event listener
goToTopLink.addEventListener("click", function (event) {
  //event.preventDefault();
  console.log("go to top, a link clicked");
  if (isFirefox) {
    docElem.scrollTop = 0;
  } else {
    docElem.scrollTop = 0;
  }
});

/*

---For testing
------------------

*/

console.log(body.clientHeight); //this gets the complete page height
console.log(docElem.clientHeight); //this gets the viewport height

console.log("Scroll top values :", body.scrollTop); //gets the scroll value

//see all the types
console.log(
  "Body Scroll Height : ",
  body.scrollHeight,
  "Body Offset Height : ",
  body.offsetHeight,
  "Body Client Height : ",
  body.clientHeight,
  "Document Element Client Height : ",
  docElem.clientHeight,
  "Document Element Scroll Height : ",
  docElem.scrollHeight,
  "Document Element Offset Height : ",
  docElem.offsetHeight
);
