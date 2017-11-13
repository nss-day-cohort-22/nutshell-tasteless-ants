// Ryan McPherson - This hides/shows the login or dashboard based on whether the user is "active"

const NutshellDatabase = require("../register_login/NutshellDatabase")
const tasksDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let taskEl = document.getElementById("Task__displayer")

for (let i = 0 ; i < NutshellDatabase.tasks.length ; i++) {
    let currentTask = NutshellDatabase.tasks[i];

    taskEl.innerHTML += `
    <div id="${currentTask.id}">
    <h2>${currentTask.taskTitle}</h2>
    <p>${currentTask.taskCompletionDate}</p>
    <button class="delete_task">Mark Complete</button>
    </div>
    `
}

module.exports = taskEl