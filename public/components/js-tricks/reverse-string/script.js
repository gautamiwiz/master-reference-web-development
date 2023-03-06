console.log("gScript Loaded!");

let inputString = "Hello my name is gautam";

console.log(`String : ${inputString}`);

let reversedString = inputString.split("").reverse().join("");
console.log(`Reversed String : ${reversedString}`);

let reversedOfReversed = reversedString.split(" ").reverse().join(" ");
console.log(`Final reverse of reverse : ${reversedOfReversed}`);

function reverseTheInputString() {
  let userInputString = prompt("Enter your string");
  document.getElementById(
    "stringEntered"
  ).innerHTML = `String Entered = ${userInputString}`;

  let reversedString = userInputString.split("").reverse().join("");
  let reversedOfReversed = reversedString.split(" ").reverse().join(" ");
  document.getElementById(
    "stringReversed"
  ).innerHTML = `String Reversed = ${reversedOfReversed}`;
}

let theButtonClick = document.querySelector("main button");
theButtonClick.addEventListener("click", reverseTheInputString);

/* 
let stringExample = "Hello my name is gautam";
console.log(stringExample);

let stringSplit = stringExample.split("");
console.log("string split -->", stringSplit);

let stringSplitReverse = stringSplit.reverse();

console.log("string split reverse -->", stringSplitReverse);

let stringSplitReverseJoined = stringSplitReverse.join("");
console.log("string split reverse Join --> ", stringSplitReverseJoined);

let reverseOfReversed2 = stringSplitReverseJoined.split(" ");
console.log("Split the reversed joined string", reverseOfReversed2);

let reverseOfReversed2Reversed = reverseOfReversed2.reverse();
console.log("Reverse of reversed string --> ", reverseOfReversed2Reversed);

console.log("Final reversed string -->", reverseOfReversed2Reversed.join(" ")); */
