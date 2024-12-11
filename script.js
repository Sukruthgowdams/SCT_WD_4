const taskInput = document.getElementById("task-input");
const taskDateTime = document.getElementById("task-datetime");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add Task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const dateTime = taskDateTime.value;

    if (!taskText || !dateTime) {
        alert("Please enter a task and set a date and time!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskDetails = document.createElement("div");
    taskDetails.className = "task-details";
    taskDetails.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;
    taskItem.appendChild(taskDetails);

    const completeBtn = createButton("Complete", "complete-btn", () => {
        taskItem.classList.toggle("completed");
    });

    const editBtn = createButton("Edit", "edit-btn", () => editTask(taskItem, taskText, dateTime));

    const deleteBtn = createButton("Delete", "delete-btn", () => taskItem.remove());

    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskDateTime.value = "";
}

function createButton(text, className, onClick) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = className;
    btn.addEventListener("click", onClick);
    return btn;
}

function editTask(taskItem, oldTaskText, oldDateTime) {
    const newTaskText = prompt("Edit your task:", oldTaskText);
    const newDateTime = prompt("Edit the date and time:", oldDateTime);

    if (newTaskText && newDateTime) {
        taskItem.querySelector(".task-details").innerHTML = `<strong>${newTaskText}</strong><br><small>${new Date(newDateTime).toLocaleString()}</small>`;
    }
}
