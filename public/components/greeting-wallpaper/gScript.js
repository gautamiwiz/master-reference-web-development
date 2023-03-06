console.log("gScript Loaded");

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  nameDisplay = document.getElementById("name"),
  focus = document.getElementById("focus");

//show the time
function showTheTime() {
  //to test
  //let today = new Date(2019, 06, 10, 20, 33, 10),
  let today = new Date(),
    hours = today.getHours(),
    min = today.getMinutes(),
    secs = today.getSeconds();

  //hours will be between 0 to 23
  const amPM = hours > 12 ? "PM" : "AM";

  //12 hours format
  hours = hours % 12 || 12;

  //add 0 to minutes and seconds and hours
  hours = hours < 10 ? `0${hours}` : hours;
  min = min < 10 ? `0${min}` : min;
  secs = secs < 10 ? `0${secs}` : secs;

  //separator class for blinking ":"
  let sepClass = "";
  if (secs % 2 == 0) {
    sepClass = "trans";
  }

  s = '<span class="' + sepClass + '">' + ":" + "</span>";

  time.innerHTML = `${hours}${s}${min} ${amPM}`;

  setTimeout(showTheTime, 1000);
}

//set background image
function setBgGreet() {
  //to test
  //let today = new Date(2019, 06, 10, 20, 33, 10);
  let today = new Date();
  let hours = today.getHours();
  if (hours < 12) {
    //morning
    document.body.style.backgroundImage = "url('images/day.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hours < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('images/noon.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    //evening
    document.body.style.backgroundImage = "url('images/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

//set Name
function setName(e) {
  if (e.type === "keypress") {
    //make sure if enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      nameDisplay.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //make sure if enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    nameDisplay.textContent = "[Enter Name]";
  } else {
    nameDisplay.textContent = localStorage.getItem("name");
  }
}

//get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Your Mission For Today]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

nameDisplay.addEventListener("keypress", setName);
nameDisplay.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//call the showtime function and set timeout to itself inside
showTheTime();

//set the background and greeting
setBgGreet();

//get name and focus from local storage or show default text
getName();
getFocus();
