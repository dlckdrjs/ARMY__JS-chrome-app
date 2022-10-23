const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

const TODO_KEY = "todo";

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function onDeleteButton(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(todoValueObj) {
  const li = document.createElement("li");
  li.id = todoValueObj.id;
  const span = document.createElement("span");
  span.innerText = todoValueObj.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", onDeleteButton);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function onTodoFormSubmit(event) {
  event.preventDefault();

  const todoValue = todoInput.value;
  todoInput.value = "";

  const todoValueObj = {
    text: todoValue,
    id: Date.now(),
  };

  paintTodo(todoValueObj);
  toDos.push(todoValueObj);
  saveTodo();
}

todoForm.addEventListener("submit", onTodoFormSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  const parseTodo = JSON.parse(savedTodo);
  parseTodo.forEach(paintTodo);
  toDos = parseTodo;
}
