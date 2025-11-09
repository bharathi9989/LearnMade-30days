const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

let tasks = JSON.parse(localStorage.getItem("tasks") || []);

function renderList() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between item-center  bg-gray-100 p-2 rounded-lg";

    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    if (task.completed) {
      taskText.classList.add("line-through", "text-gray-400");
    }
  });
}

const btnGroup = document.createElement("div");

const completeBtn = document.createElement("button");
completeBtn.textContent = task.completed ? "undo" : "Done";
completeBtn.className = "text-green-600 hover:underline mr-2";
completeBtn.onclick = () => ToggleTask(index);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
deleteBtn.className = "text-red-600 hover:underline mr-2";
deleteBtn.onclick = () => deleteTask(index);

btnGroup.appendChild(completeBtn);
btnGroup.appendChild(deleteBtn);

li.appendChild(taskText);
li.appendChild(btnGroup);
