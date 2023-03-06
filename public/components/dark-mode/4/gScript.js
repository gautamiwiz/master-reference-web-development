let darkModeButton = document.querySelector("button");
let body = document.querySelector("body");

const initialTheme = "light";

darkModeButton.addEventListener("click", () => {
  //alert("hello");
  let activeTheme = localStorage.getItem("theme");
  activeTheme === "light" ? setTheme("dark") : setTheme("light");
});

//set theme on button click
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  body.setAttribute("data-theme", theme);
}

//set theme on initial page load

function setThemeOnLoad() {
  let currentTheme = localStorage.getItem("theme");
  console.log(currentTheme);
  currentTheme ? body.setAttribute("data-theme", currentTheme) : setTheme(initialTheme);
}
setThemeOnLoad();
