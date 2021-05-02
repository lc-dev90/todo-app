const textElement = document.querySelector("#input-task");
const submitElement = document.querySelector("#add-task");
const todoList = document.querySelector("#todo-list");

function addTask() {
  createTask(textElement.value);
  clearImput();
}

function createTask(content) {
  const listItem = document.createElement("li");
  const times = document.createElement("i");
  adicionaClasse(times);
  listItem.textContent = content;
  listItem.appendChild(times);
  todoList.appendChild(listItem);
  saveTasks();
}

function clearImput() {
  textElement.value = "";
  textElement.focus();
}

function adicionaClasse(element) {
  element.classList.add("fas");
  element.classList.add("fa-times");
  element.setAttribute("title", "Clear this task");
}

function saveTasks() {
  const tasks = todoList.querySelectorAll("li");
  const listOfAllTaks = [];

  tasks.forEach(function (task) {
    listOfAllTaks.push(task.textContent);
  });
  const tasksJSON = JSON.stringify(listOfAllTaks);
  localStorage.setItem("tasks", tasksJSON);
}

function getTasks() {
  const tasks = localStorage.getItem("tasks");
  const taskList = JSON.parse(tasks);
  taskList.forEach(function (task) {
    createTask(task);
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fas")) {
    e.target.parentElement.remove();
    saveTasks();
  }
});

textElement.addEventListener("keypress", function (e) {
  if (textElement.value !== "") {
    if (e.key === "Enter") {
      addTask();
    }
  }
});

submitElement.addEventListener("click", function () {
  if (textElement.value !== "") {
    addTask();
  }
});
getTasks();
