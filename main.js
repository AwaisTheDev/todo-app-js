//selectors

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var todoFilter = document.querySelector(".todo-filter-item");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodoItems);

//functions

todoInput.focus();
function addTodo(event) {
  event.preventDefault();

  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");

  const todoListItem = document.createElement("li");
  todoListItem.innerText = todoInput.value;
  todoListItem.classList.add("todo-list-item");
  tododiv.appendChild(todoListItem);

  const completeIcon = document.createElement("button");
  completeIcon.innerHTML = "<i class='fa fa-check'></i>";
  completeIcon.classList.add("complete-button");
  tododiv.appendChild(completeIcon);

  const deleteIcon = document.createElement("button");
  deleteIcon.innerHTML = "<i class='fa fa-trash'></i>";
  deleteIcon.classList.add("delete-button");
  tododiv.appendChild(deleteIcon);

  console.log(tododiv);

  todoList.appendChild(tododiv);

  todoInput.value = "";
  todoInput.focus();
}

function deleteCheck(e) {
  var item = e.target;
  if (item.classList[0] === "delete-button") {
    var todo = item.parentElement;
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-button") {
    item.parentElement.classList.toggle("completed");
  }
}

function filterTodoItems(e) {
  const todos = todoList.childNodes;

  console.log(todos);

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "incomplete":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}
