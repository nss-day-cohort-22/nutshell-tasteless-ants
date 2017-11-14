// Jesse and Ryan - Removes "active" user from session storage, cancelling the current dashboard session.

const logOutButton = document.getElementById("log_out_button")
const logOut = function () {
    sessionStorage.removeItem("activeUser")
    window.location.reload()
}

logOutButton.addEventListener("click", logOut)

module.exports = logOut