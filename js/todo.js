const toDoForm = document.querySelector("#toDoForm");
const toDoText = document.querySelector("#toDoForm span");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

const TODOLIST_KEY = "toDoList";
const CHECKBOX_KEY = "checkbox";
let toDos = [];

function checkAllDone() {
  const doneArr = [];
  toDos.forEach((toDo) => {
    doneArr.push(toDo.done);
  });
  if (doneArr.includes(false) || doneArr.length === 0) {
    return false;
  } else {
    return true;
  }
}

function handleBtnCompleClick(evt) {
  const li = evt.target.parentNode;
  const span = li.querySelector("span");
  let isChecked = true;

  if (evt.target.checked) {
    span.classList.add("done");
  } else {
    span.classList.remove("done");
    isChecked = false;
  }
  toDos = toDos.filter((toDo) => {
    if (toDo.id === parseInt(li.id)) {
      toDo.done = isChecked;
    }
    return true;
  });
  changeToDoText(toDos);
  saveToDo();
}

function handleBtnDelete(evt) {
  const li = evt.target.parentNode;
  li.classList.remove(APPEAR_KEY);
  li.classList.add(DISAPPEAR_KEY);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  changeToDoText(toDos);
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function addToDoList(toDo) {
  const toDoItem = toDo.content;
  const li = document.createElement("li");
  li.id = toDo.id;
  li.classList.add(APPEAR_KEY);
  const btnComplete = document.createElement("input");
  btnComplete.type = CHECKBOX_KEY;
  btnComplete.addEventListener("click", handleBtnCompleClick);
  const span = document.createElement("span");
  span.innerText = toDoItem;
  if (toDo.done) {
    btnComplete.checked = true;
    span.classList.add("done");
  }
  const btnDelete = document.createElement("input");
  btnDelete.type = CHECKBOX_KEY;
  btnDelete.addEventListener("click", handleBtnDelete);
  li.appendChild(btnComplete);
  li.appendChild(span);
  li.appendChild(btnDelete);
  toDoList.appendChild(li);
}
function changeToDoText(toDos) {
  console.log(checkAllDone());
  if (checkAllDone()) {
    toDoText.innerText = "You are AWESOME!!";
    if (toDos.length === 5) {
      toDoInput.classList.add(HIDDEN_KEY);
    } else {
      toDoInput.classList.remove(HIDDEN_KEY);
    }
  } else {
    if (toDos.length === 5) {
      toDoText.innerText = "Five things to do are enough.";
      toDoInput.classList.add(HIDDEN_KEY);
    } else {
      toDoText.innerText = "What is your main focus for today?";
      toDoInput.classList.remove(HIDDEN_KEY);
    }
  }
}
function handleToDoFormSubmit(evt) {
  evt.preventDefault();
  const toDo = { id: Date.now(), content: toDoInput.value, done: false };
  toDos.push(toDo);
  toDoInput.value = "";
  addToDoList(toDo);
  changeToDoText(toDos);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoFormSubmit);

const savedToDoList = localStorage.getItem(TODOLIST_KEY);

if (savedToDoList !== null) {
  const parsedToDoList = JSON.parse(savedToDoList);
  parsedToDoList.forEach(addToDoList);
  toDos = parsedToDoList;
  changeToDoText(parsedToDoList);
}
