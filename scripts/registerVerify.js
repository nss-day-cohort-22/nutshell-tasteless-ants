console.log("register user/email")
// import userfacotry
const userInputData = require("./registerData")


let verification = () => {
    // check required username and email field for entry
        console.log("username checked")
        if (document.getElementById("check_userName").value === ""
        && document.getElementById("check_email").value === "@"){
            alert("Please check yer shit"); //replace with toaster later
            return false;

            // check email for unique entry in database somehow?
            // check username for unique entry in database somehow?
            //call register data
        } else (userInputData())
    }


let button = document.getElementById("submitRegistration")
button.addEventListener("click", verification)



module.exports = verification