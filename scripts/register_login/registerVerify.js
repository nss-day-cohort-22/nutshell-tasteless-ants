console.log("register user/email")
const pageShown = require("./dashboard_hide_show")
const updateArticleDOM = require("../news_articles/dom")
const updateEventDom = require("../events/hide_show_eventsform")
const {addToChatWindow}= require("../chat/chatController")

// import userfacotry
const userFactory = require("./registerData")
const NutshellDatabase = require("./NutshellDatabase")
const updateTaskDOM = require("../tasks/tasks_hide_show")

let registerOrLogin = function(event) {
    let userName = document.getElementById("check_userName").value
    let email = document.getElementById("check_email").value
    console.log(event.target.id)
    if (event.target.id === "submitRegistration") {
        const activeUser = userFactory(userName, email)
        NutshellDatabase.users.push(activeUser)
        localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase));
        console.log(NutshellDatabase.users)
        activeUserSet(activeUser)
        updateTaskDOM()
        updateArticleDOM()
        updateEventDom()
        addToChatWindow()
    } else { //(event.target.id === "loginDash")
        userLogin(userName, email)
        updateTaskDOM()
        updateArticleDOM()
        updateEventDom()
        addToChatWindow()
}
// Has to be called in order to run hide or show login or dashboard pages
pageShown()
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

// display welcome "active user" in at top of browser
const currentActiveUser = JSON.parse(sessionStorage.getItem("activeUser"))
let welcomeEl = document.getElementById("welcomeUser")

let welcomeActiveUser = function() {
    welcomeEl.innerHTML += `
    <h1>Welcome ${currentActiveUser.userName}!</h1>
    `
}

module.exports = registerOrLogin
module.exports = welcomeActiveUser
