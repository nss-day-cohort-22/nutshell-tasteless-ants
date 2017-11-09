console.log("register user/email")
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




// let verification = () => {
//     // check required username and email field for entry
//         console.log("username checked")
//         if (document.getElementById("check_userName").value === ""
//         && document.getElementById("check_email").value === "@"){
//             alert("Please check yer shit"); //replace with toaster later
//             return false;

//             // check email for unique entry in database somehow?
//             // check username for unique entry in database somehow?
//             //call register data
//         } else (userInputData())
//     }


// let button = document.getElementById("submitRegistration")
// button.addEventListener("click", verification)


// module.exports = {registerOrLogin, activeUserSet}