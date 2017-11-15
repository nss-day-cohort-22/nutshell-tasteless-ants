// Ryan McPherson - This hides/shows the login or dashboard based on whether the user is "active"

const NutshellDatabase = require("../register_login/NutshellDatabase")
const deleteTasksFunction = require("./tasksDelete")
const registerOrLogin = require("../register_login/registerVerify")

const tasksDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let taskEl = document.getElementById("Task__displayer")

// Looping through task dabatase, clears the DOM first, then prints only they are marked as "completed: false"
let updateTaskDOM = function () {
    taskEl.innerHTML= ""
    for (let i = 0 ; i < NutshellDatabase.tasks.length ; i++) {
        let currentTask = NutshellDatabase.tasks[i];
        const activeUserInfo = JSON.parse(sessionStorage.getItem("activeUser"))
    if (currentTask.userID === activeUserInfo.id && currentTask.completed  === false) {
        let writeTaskDOM = `
            <div class="tasks" id="${currentTask.id}">
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

// Function to save edited titles when enter button is clicked
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