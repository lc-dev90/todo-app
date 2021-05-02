const textElement = document.querySelector("#input-task");
const submitElement = document.querySelector("#add-task");
const todoList = document.querySelector("#todo-list");

function addTask() {
  createTask();
  clearImput();
}

function createTask() {
  const listItem = document.createElement("li");
  const times = document.createElement("i");
  const content = textElement.value;
  adicionaClasse(times);
  listItem.textContent = content;
  listItem.appendChild(times);
  todoList.appendChild(listItem);
  const times2 = document.querySelectorAll("i");
  times2.forEach(close);
}

function clearImput() {
  textElement.value = "";
  textElement.focus();
}

function adicionaClasse(element) {
  element.classList.add("fas");
  element.classList.add("fa-times");
}

function close(time) {
  time.addEventListener("click", function () {
    time.parentElement.remove();
  });
}

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
