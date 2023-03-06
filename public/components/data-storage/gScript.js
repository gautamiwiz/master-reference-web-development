console.log("gScript loaded!");
//Local Storage

let h1Title = document.querySelector("h1");
let localStorageUserName = localStorage.getItem("name");

if (localStorageUserName != null) {
  h1Title.innerText = localStorageUserName;
} else {
  let userEnteredName = window.prompt("What is the name");
  if (userEnteredName.length > 0 && userEnteredName != null) {
    localStorage.setItem("name", userEnteredName);
    h1Title.innerText = userEnteredName;
  } else {
    alert("please enter a valid name");
  }
}

//Clear the local storage
let clearStorageButton = document.querySelector("button");

clearStorageButton.addEventListener("click", function () {
  localStorage.removeItem("name");
  h1Title.innerText = "";
  clearStorageButton.style.display = "none";
});
