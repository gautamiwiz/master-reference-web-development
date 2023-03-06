console.log("gScript Loaded!");
//https://dev.to/swarnaliroy94/reverse-a-string-in-javascript-e1i

let stringToReverse = "Software Developer";
console.log("Original String =>", stringToReverse);

let splitString = stringToReverse.split("");
console.log("string.split method gives this =>", splitString);

let reverseString = splitString.reverse();
console.log("Array method reverse=>", reverseString);

let joinString = reverseString.join("");
console.log("array join method =>", joinString);

//Other methods

//Chainning the methods

let stringToReverseAnother = "Gautam Sharma";
console.log(
  "Reverse using chain methods : ",
  stringToReverseAnother,
  "=>",
  stringToReverseAnother.split("").reverse().join("")
);

//use spreat operator and convert to array and get rid of split method

let anotherStringToReverse = "Reverse String";
let reversedAnotherStringToReverse = [...anotherStringToReverse]
  .reverse()
  .join("");
console.log(
  "Reverse using spread and chain : ",
  reversedAnotherStringToReverse
);

//use decrement for loop

function reverseStringFunction(str) {
  let reversedString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

console.log(
  "Reverse using for loop : ",
  reverseStringFunction("Revere this String")
);

//use decrement for loop es6 syntax

function reverseStringFunctionES(str) {
  let reversedString = "";
  for (var x of str) {
    reversedString = x + reversedString;
  }

  return reversedString;
}

console.log(
  "Reverse using for loop ES6 Syntax : ",
  reverseStringFunctionES("abc")
);

//Using Array.prototype.reduce() Method

let testStringToReverse = "123";

function arrayReduceFunctionToReverse(str) {
  let arrayString = str.split("");
  let reversedString = arrayString.reduce((total, char) => {
    return char + total;
  }, "");
  return reversedString;
}

//the above function can be cut short to
function arrayReduceFunctionToReverseT(str) {
  return str.split("").reduce((total, char) => char + total, "");
}

console.log(
  "Reversing a string using array reduce function =>",
  arrayReduceFunctionToReverseT(testStringToReverse)
);

//regex method
let str = "My name is Swarnali Roy";
let regex = /.{1,1}/gi;

let result = str.match(regex);
let reveresed = result.reverse().join("");

console.log(reveresed); //yoR ilanrawS si eman yM
