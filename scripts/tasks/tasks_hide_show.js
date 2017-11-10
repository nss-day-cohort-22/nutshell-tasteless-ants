// This hides/shows the login or dashboard based on whether the user is "active"
function showTaskCreateFields() {
    const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))
    if (activeUser.id === activeUser.id) {
        document.getElementById("loginPage").classList.add("hidden")
        document.getElementById("dashboardPage").classList.remove("hidden")
    } else {
        document.getElementById("dashboardPage").classList.add("hidden")
    }
}

// module.exports = showTaskCreateFields