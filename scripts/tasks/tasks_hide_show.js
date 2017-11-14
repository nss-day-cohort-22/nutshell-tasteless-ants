// Ryan McPherson - This hides/shows the login or dashboard based on whether the user is "active"

const NutshellDatabase = require("../register_login/NutshellDatabase")
const deleteTasksFunction = require("./tasksDelete")

const tasksDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let taskEl = document.getElementById("Task__displayer")

let updateTaskDOM = function () {
for (let i = 0 ; i < NutshellDatabase.tasks.length ; i++) {
    let currentTask = NutshellDatabase.tasks[i];
    if (currentTask.completed  === false) {
    console.log("UPDATE TASK DOM IS BEING CALLED")
        let writeTaskDOM = `
            <div id="${currentTask.id}">
                <h2>To Do: </h2><div class="edit_task" contenteditable="true"> ${currentTask.taskTitle}</div>
                <p>Due Date: ${currentTask.taskCompletionDate}</p>
                <button class="delete_task">✓</button>
            </div>
            `
            taskEl.innerHTML += writeTaskDOM
        }
    deleteTasksFunction()
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && e.target.className === "edit_task") {
        e.preventDefault()
        let idToEdit = parseInt(e.target.parentNode.id)
        let completedTaskObject = NutshellDatabase.tasks.filter(function(evnt){
            return idToEdit === evnt.id
        })
        completedTaskObject[0].taskTitle = e.target.textContent
        // save database
        localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase))
    }
})

module.exports = updateTaskDOM