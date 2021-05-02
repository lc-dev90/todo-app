const textElement = document.querySelector("#input-task");
const submitElement = document.querySelector("#add-task");
const todoList = document.querySelector("#todo-list");

function addTask() {
  const listItem = document.createElement("li");
  const times = document.createElement("i");
  const content = textElement.value;
  times.classList.add("fas");
  times.classList.add("fa-times");
  listItem.textContent = content;
  listItem.appendChild(times);
  todoList.appendChild(listItem);
}

textElement.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

submitElement.addEventListener("click", function () {
  addTask();
});
