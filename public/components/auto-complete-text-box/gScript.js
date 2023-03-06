/**
 * https://www.youtube.com/watch?v=ResWVWI333o
 * https://github.com/tutsplus/javascript-for-web-designers
 */
console.log("gScript loaded!");

var targetInput = document.getElementById("country"),
  results = document.getElementById("autocomplete-results"),
  countryList = ["india", "uae", "usa", "thailand", "china", "germany", "london", "denmark", "italy", "poland"],
  matches = [],
  resultsCursor = 0;

targetInput.focus(); //always bring the cursor on the input field on page load

//event listener for input key down
targetInput.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});

console.log(resultsCursor);

//event listenrer for input keyup
targetInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  /*keycoded
  enter : 13,
  arrow up : 38
  arrow down : 40 */

  results.innerHTML = ""; // hide the previous results inititally
  toggleResults("hide");

  //if anyone types anything in the text box
  if (this.value.length > 0) {
    //console.log("typed : ", this.value);

    matches = getMatches(this.value); //get the matches in an array

    //if matches found.. generate html and add it to list
    if (matches.length > 0) {
      displayMatches(matches);
    }
  }

  if (results.classList.contains("visible")) {
    switch (event.keyCode) {
      case 13:
        targetInput.value = results.children[resultsCursor].innerHTML;
        toggleResults("hide");
        resultsCursor = 0;
        //console.log("enter clicked");
        break;

      case 38:
        console.log(resultsCursor);
        if (resultsCursor > 0) {
          resultsCursor--;
          moveCursor(resultsCursor);
        }
        //console.log("keyup clicked");
        break;

      case 40:
        console.log(resultsCursor);
        if (resultsCursor < matches.length - 1) {
          resultsCursor++;
        }
        moveCursor(resultsCursor);
        //console.log("keydown clicked");
        break;
    }
  }
});

function toggleResults(action) {
  if (action == "show") {
    results.classList.add("visible");
  } else if (action == "hide") {
    results.classList.remove("visible");
  }
}

function getMatches(inputTetxt) {
  var matchList = [];
  for (var i = 0; i < countryList.length; i++) {
    if (countryList[i].toLocaleLowerCase().indexOf(inputTetxt.toLocaleLowerCase()) != -1) {
      matchList.push(countryList[i]);
    }
  }

  return matchList;
}

function displayMatches(matchList) {
  var j = 0;

  while (j < matchList.length) {
    results.innerHTML += '<li class="result">' + matchList[j] + "</li>";
    j++;
  }

  moveCursor(resultsCursor);

  toggleResults("show");
}

function moveCursor(pos) {
  for (var x = 0; x < results.children.length; x++) {
    results.children[x].classList.remove("highlighted");
  }
  results.children[pos].classList.add("highlighted");
}
