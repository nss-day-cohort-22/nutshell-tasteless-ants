console.log("register user/email")
const pageShown = require("./dashboard_hide_show")

// import userfacotry
const userFactory = require("./registerData")
const NutshellDatabase = require("./NutshellDatabase")

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
    } else { //(event.target.id === "loginDash")
    userLogin(userName, email)
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


