// Ryan McPherson - This hides/shows the login or dashboard based on whether the user is "active"

const NutshellDatabase = require("../register_login/NutshellDatabase")
const deleteTasksFunction = require("./tasksDelete")

const tasksDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let taskEl = document.getElementById("Task__displayer")

let updateTaskDOM = function () {
for (let i = 0 ; i < NutshellDatabase.tasks.length ; i++) {
    let currentTask = NutshellDatabase.tasks[i];
console.log("UPDATE TASK DOM IS BEING CALLED")
    let writeTaskDOM = `
        <div id="${currentTask.id}">
            <h2 contenteditable="true">To Do: ${currentTask.taskTitle}</h2>
            <p>Due Date: ${currentTask.taskCompletionDate}</p>
            <button class="delete_task">✓</button>
        </div>
        `
        taskEl.innerHTML += writeTaskDOM
    }
    deleteTasksFunction()
}

module.exports = updateTaskDOM