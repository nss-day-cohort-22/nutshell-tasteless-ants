// Authors: Team and Instructor Effort!
// This hides/shows the login or dashboard based on whether the user is "active" user or not
function pageShown() {
    const showCurrentUserPage = JSON.parse(sessionStorage.getItem("activeUser"))
    console.log("In pageShown")
    if (showCurrentUserPage !== null) {
        document.getElementById("loginPage").classList.add("hidden")
        document.getElementById("dashboardPage").classList.remove("hidden")
    } else {
        document.getElementById("dashboardPage").classList.add("hidden")
    }
}

module.exports = pageShown

