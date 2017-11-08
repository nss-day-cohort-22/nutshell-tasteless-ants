console.log("register user/email")

let verification = () => {
    // check required username field for entry
    let checkUser = () => {
    console.log("username checked")
    if (document.getElementsById("check_userName")[0].value === ""){
            alert("Please enter your username"); //replace with toaster laster
            return false;
        }
    }
// check required email field for entry
    let checkEmail = () => {
        console.log("email checked")
        if (document.getElementsById("check_email")[0].value === ""){
                alert("Please enter your email"); //replace with toaster laster
                return false;
            }
        }
    let button = document.getElementsById("submitRegistration")[0]
    button.addEventListener("click", checkUser, checkEmail)
}

// check email for unique entry in database somehow?

// check username for unique entry in database somehow?

module.exports = verification