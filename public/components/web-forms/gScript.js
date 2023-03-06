console.log("gScript loaded!");

function addKeyHint(element) {
  let textNode = Array.from(element.childNodes).find((node) => node.nodeName === "#text");
  if (textNode) {
    let ak = element.getAttribute("accesskey");
    let txt = textNode.nodeValue;
    let pos = txt.indexOf(ak);

    let newSpan = document.createElement("span");
    newSpan.appendChild(document.createTextNode(ak));
    newSpan.className = "accesskey";

    let newText1 = document.createTextNode(txt.substr(0, pos));
    let newText2 = document.createTextNode(txt.substr(pos + 1));

    if (newText1.length > 0) {
      element.insertBefore(newText1, textNode);
    }
    element.insertBefore(newSpan, textNode);
    if (newText2.length > 0) {
      element.insertBefore(newText2, textNode);
    }
    element.removeChild(textNode);
  }
}

function addAccessKeyHints() {
  var theForm = document.getElementById("testform");
  var elems = Array("LABEL", "A", "BUTTON");
  elems.forEach((elemType) => {
    var items = Array.from(theForm.getElementsByTagName(elemType));
    items.forEach((el) => {
      if (el.hasAttribute("accesskey")) {
        addKeyHint(el);
      }
    });
  });
}

//document.getElementById("testform").addEventListener("submit", (e) => e.preventDefault());

window.addEventListener("load", addAccessKeyHints);

window.addEventListener("load", (e) => {
  let theform = document.getElementById("testform");
  let cb1 = document.getElementById("cb1");
  let charcount = document.getElementById("charcount");
  let countfield = document.getElementById("count");

  // TODO: prevent the form from being auto-submitted when the user
  // clicks the Submit button or types Enter in a field
  theform.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // TODO: The change event is called when the user commits
  // a change to an input control
  cb1.addEventListener("change", (e) => {
    console.log(`Checkbox change event ${e.srcElement.checked}`);
  });
  //   charcount.addEventListener("change", (e) => {
  //     let count = charcount.value.length;
  //     countfield.value = count;
  //   });
  charcount.addEventListener("input", (e) => {
    let count = charcount.value.length;
    countfield.value = count;
  });
  // TODO: The input event is called immediately whenever the content is modified

  // TODO: event bubbling can be used to catch events on multiple fields
  // You can also pass an object as the event listener, as long as it has
  // a handleEvent() function to receive the event callback
  let formListener = new FormEventListener(theform);
  theform.addEventListener("click", formListener);
});

class FormEventListener {
  constructor(formElem) {
    this.formElem = formElem;
  }
  handleEvent(e) {
    console.log(`Event ${e.type} on> ${e.srcElement.tagName} for: ${this.formElem.id}`);
  }
  // TODO: define the handleEvent function to make this object an event handler
}
