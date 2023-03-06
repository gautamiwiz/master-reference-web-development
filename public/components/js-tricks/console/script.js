console.log("This is a simple console text");

//Console Groups
let groupOne = "Console Group One";
console.group(groupOne);
console.log("Message 1 to be added to" + groupOne);

for (let i = 0; i < 5; i++) {
  console.log("Message " + i + " to be added to" + groupOne);
}
console.groupEnd(groupOne);
console.log(
  "This is a another simple console text after the group => " + groupOne
);

//Console Groups
let groupTwo = "Console Group Two";
console.group(groupTwo);
console.log("Message 1 to be added to" + groupTwo);

for (let i = 0; i < 5; i++) {
  console.log("Message " + i + " to be added to" + groupTwo);
}
console.groupEnd(groupTwo);
console.log(
  "This is a another simple console text afte the group => " + groupTwo
);

//Console Style
console.log("%c Test One", "color: #ed1c24; font-size: 30px");
console.log(
  "%c JavaScript",
  "font-weight: bold; font-size: 50px; color: blue; text-shadow: 6px 6px #E485F8, 3px 3px #E485F8;"
);

//console Info, warm and error

console.info("This is info");
console.warn("This is console warning");
console.error("This is a console error");

//Console trace
function a() {
  b();
}
function b() {
  console.trace();
}
function trace() {
  a();
}
trace();

//more console groups
console.group("Alphabet");
console.log("A");
console.log("B");
console.log("C");
console.group("Numbers");
console.log("One");
console.log("Two");
console.groupEnd("Numbers");
console.groupEnd("Alphabet");

//console assert
const A = 20;
console.assert(A === 20, "This is true");
//If true it will not print any message, on fail:
console.assert(A === 21, "This is false");
console.assert(A === 22, "This is false");
console.assert(A === 20, "This is true");

//console count
function count(label) {
  console.count(label);
}
count("One");
count("Two");
count("One");
count("One");

//console count reset
console.count();
console.count();
console.countReset();
console.count();
console.count("time");
console.count("time");
console.countReset("time");
console.count("time");

//console dir
const obj = {
  name: "user name",
  email: "test@test.com",
  tags: ["dev", "react", "js"],
};
console.dir(obj);

//console time
function a() {
  for (let i = 0; i < 10; i++) {
    // operation;
  }
}

function b() {
  for (let i = 0; i < 1000; i++) {
    // operation;
  }
}

console.time();
a();
console.timeEnd();

console.time();
b();
console.timeEnd();

//console table
const obj2 = {
  name: "user name",
  email: "test@test.com",
  tags: ["dev", "react", "js"],
};
console.table(obj2);

//console print object
console.log("Print an object with variable name and values");
let value1 = "Hello";
let value2 = "bye";
let value3 = "tata";
console.log({ value1, value2, value3 });

console.log("");
console.log("%c gScript Loaded! arrays!", "color: #ed1c24; font-size: 20px");

//for console logging heading for each topic
let color = "#ed1c24;";
let fontSize = "20px;";
let consolePropertySpecial =
  "font-weight: bold; font-size: 30px; color: blue; text-shadow: 3px 3px #E485F8, 3px 3px #E485F8;";
let consolePropertyGroup = "font-size: 20px; color: #ed1c24;";
console.log("%c gScript Loaded! arrays!", consolePropertySpecial);
