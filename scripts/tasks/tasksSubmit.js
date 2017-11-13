// Ryan McPherson - Takes the input from the task title and completion date and pushes it into Nutshell Database
console.log("Tasks Submit Showing!")

// import userfactory
const taskFactory = require("./tasksData")
const NutshellDatabase = require("../register_login/NutshellDatabase")

let createTaskForm = function(event) {
    // Need to change where I'm getting the userID from...
    let taskTitle = document.getElementById("taskForm__title").value
    let taskCompletionDate = document.getElementById("taskForm__completion_date").value

    const newTask = taskFactory(taskTitle, taskCompletionDate)
    NutshellDatabase.tasks.push(newTask)
    localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase));
    console.log(NutshellDatabase.tasks)
}
// Has to be called in order to run hide or show login or dashboard pages
// tasksShown()

document.getElementById("submit_task_button").addEventListener("click", createTaskForm)

module.exports = createTaskForm