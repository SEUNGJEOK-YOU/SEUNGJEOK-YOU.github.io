const toDoForm = document.querySelector("#toDoForm");
const toDoText = document.querySelector("#toDoForm span");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

const TODOLIST_KEY = "toDoList";
const CHECKBOX_KEY = "checkbox";
let toDos = [];

function handleBtnCompleClick(evt) {
  const li = evt.target.parentNode;
  const span = li.querySelector("span");
  span.classList.add("done");
  toDos = toDos.filter((toDo) => {
    if (toDo.id === parseInt(li.id)) {
      toDo.done = true;
      console.log(toDos);
    }
    return true;
  });
  saveToDo();
}

function handleBtnDelete(evt) {
  const li = evt.target.parentNode;
  li.classList.remove(APPEAR_KEY);
  li.classList.add(DISAPPEAR_KEY);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  limitToDoNumber(toDos)
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
    span.classList.add("done");
  }
  const btnDelete = document.createElement("input");
  btnDelete.type = "checkbox";
  btnDelete.addEventListener("click", handleBtnDelete);
  li.appendChild(btnComplete);
  li.appendChild(span);
  li.appendChild(btnDelete);
  toDoList.appendChild(li);
}
function limitToDoNumber(toDos) {
  if (toDos.length >= 5) {
    toDoText.innerText = "Five things to do today are enough.";
    toDoInput.classList.add(HIDDEN_KEY);
  }else {
    toDoText.innerText = "What is your main focus for today?";
    toDoInput.classList.remove(HIDDEN_KEY);
  }
}
function handleToDoFormSubmit(evt) {
  evt.preventDefault();
  const toDo = { id: Date.now(), content: toDoInput.value, done: false };
  toDos.push(toDo);
  limitToDoNumber(toDos);
  toDoInput.value = "";
  addToDoList(toDo);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoFormSubmit);

const savedToDoList = localStorage.getItem(TODOLIST_KEY);

if (savedToDoList !== null) {
  const parsedToDoList = JSON.parse(savedToDoList);
  limitToDoNumber(parsedToDoList);
  parsedToDoList.forEach(addToDoList);
  toDos = parsedToDoList;
}
