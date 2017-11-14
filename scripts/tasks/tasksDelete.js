// Ryan McPherson - Deleting individual tasks from DOM and Database
const NutshellDatabase = require("../register_login/NutshellDatabase")
const tasksEl = require("../tasks/tasks_hide_show")

// create an array and function to delete a specific event and delete it in local storage as well
let deleteTasksFunction = function () {
    let deleteTasks = document.getElementsByClassName("delete_task")
    for (let i = 0; i < deleteTasks.length; i++) {
        let deleteBtns = deleteTasks[i];
        deleteBtns.addEventListener("click", function (event) {
            console.log(event)
            // deleting the event from the DOM
            event.target.parentNode.remove();
            // this new variable grabs the id and sets the id to be a number not a string ()-check in console.log
            let idToDelete = parseInt(event.target.parentNode.id)
            // Once event is deleted from the DOM we want to delete it in Local Storage / create a new tasks database -filter is returning a new array where the id of the button that was clicked is removed
            let completedTaskObject = NutshellDatabase.tasks.filter(function(evnt){
                return idToDelete === evnt.id
            })
            completedTaskObject[0].completed = true
            // save database
            localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase))
        });
    }
}

/* <button id="delete_article">Delete</button> */
module.exports = deleteTasksFunction