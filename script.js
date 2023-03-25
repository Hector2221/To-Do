import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
//IIFE
(() => {
  const btn = document.querySelector("[data-form-btn]");

  const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;

    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  };

  btn.addEventListener("click", createTask);
})();
