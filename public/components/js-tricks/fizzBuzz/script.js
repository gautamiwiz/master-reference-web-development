let toBePrinted = "";

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz");
    toBePrinted += `<p>fizzbuzz</p>`;
  } else if (i % 3 === 0) {
    console.log("fizz");
    toBePrinted += `<p>fizz</p>`;
  } else if (i % 5 === 0) {
    console.log("buzz");
    toBePrinted += `<p>buzz</p>`;
  } else {
    console.log(i);
    toBePrinted += `<p>${i}</p>`;
  }
}

let main = document.querySelector("main");
let heading = document.createElement("h1");
heading.innerText = "Fizz Buzz Challenge";

// main.append(heading, toBePrinted);
main.innerHTML = toBePrinted;
main.prepend(heading);
// main.innerHTML = heading;

//- fizz buzz solution using if else
// for (let i = 1; i <= 100; i++) {
//   //Doubt... in the below switch.. what cant I pass i and why true
//   switch (true) {
//     case i % 5 === 0 && i % 3 === 0:
//       console.log("FizzBuzz at : ", i);
//       break;
//     case i % 3 === 0:
//       console.log("Fizz at : ", i);
//       break;
//     case i % 5 === 0:
//       console.log("Buzz at : ", i);
//       break;
//     default:
//       console.log(i);
//   }
// }
