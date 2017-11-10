console.log("Tasks Submit Showing!")
const pageShown = require("./dashboard_hide_show")

// import userfactory
const taskData = require("./tasksData")
const NutshellDatabase = require("./NutshellDatabase")

let createTaskForm = function(event) {
    // Need to change where I'm getting the userID from...
    let taskTitle = document.getElementById("taskForm__title").value
    let taskCompletionDate = document.getElementById("taskForm__completion_date").value

    if (event.target.id === "submitRegistration") {
       const activeUser = userFactory(userName, email)
       NutshellDatabase.users.push(activeUser)
       localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase));
       console.log(NutshellDatabase.users)
        activeUserSet(activeUser)
    } else { //(event.target.id === "loginDash")
    userLogin(userName, email)
}
// Has to be called in order to run hide or show login or dashboard pages
tasksShown()
}

document.getElementById("whichButton").addEventListener("click", registerOrLogin)


let userLogin = function(userName, email) {
    // Iterate over all the orders
    const activeUser = NutshellDatabase.users.find(
        u => u.email === email && u.userName === userName
    )
    activeUserSet(activeUser)
}

function activeUserSet(activeUser) {
    sessionStorage.setItem("activeUser", JSON.stringify(activeUser));
}