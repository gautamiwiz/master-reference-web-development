console.log("gScript Loaded");

//model
let toDosArray;

let localTodos = JSON.parse(localStorage.getItem("todos"));

if (Array.isArray(localTodos)) {
  toDosArray = localTodos;
} else {
  toDosArray = [
    {
      title: "To Do 1",
      date: "2021-10-04",
      id: "id1",
    },
    {
      title: "To Do 2",
      date: "2021-10-04",
      id: "id2",
    },
    {
      title: "To Do 3",
      date: "2021-10-04",
      id: "id3",
    },
    {
      title: "To Do 4",
      date: "2021-10-04",
      id: "id4",
    },
  ];
}

//creates a todo
function createTodo(toDoTitleValue, datePicker, toDoTitle) {
  //adding a blank string at start to make the date a string..
  //because else its a number and gets failed in the filter method below
  let uniqueId = "" + new Date().getTime();
  toDosArray.push({
    title: toDoTitleValue,
    date: datePicker,
    id: uniqueId,
  });
  toDoTitle.value = "";
  saveToDos();
}

//deletes a todo
function removeTodo(idClicked) {
  //filter returns the same array filtered based on the condition
  //so if the todo id == clicked button id, return true...
  //here we are retaining the elements where condition returns false
  toDosArray = toDosArray.filter((todo) => todo.id !== idClicked);
  saveToDos();
}

//save todos to local storage
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDosArray));
}

//view

render();
console.log(toDosArray);

function render() {
  let toDoHolder = document.getElementById("toDosHolder");
  toDoHolder.innerHTML = ""; //empty the dom and re render it below.. else entire array will be copied below

  toDosArray.forEach(function (todo) {
    let eachToDo = document.createElement("div");
    eachToDo.innerText = todo.title + "  " + todo.date;
    let deleteButton = document.createElement("img");
    deleteButton.src = "delete.svg";
    // deleteButton.style = "margin-left: 20px;";
    deleteButton.id = todo.id;
    deleteButton.onclick = deleteToDo;
    eachToDo.append(deleteButton);
    toDoHolder.append(eachToDo);
  });
}

//Controller

//add a todo on button click
let addBtn = document.getElementById("addTodo");
addBtn.addEventListener("click", addToDo);

//create a todo
function addToDo() {
  let toDoTitle = document.getElementById("todo");
  let toDoTitleValue = toDoTitle.value;
  let datePicker = document.getElementById("date-picker").value;
  createTodo(toDoTitleValue, datePicker, toDoTitle);
  render();
}

//delete a todo
function deleteToDo(event) {
  removeTodo(event.target.id);
  render();
}
