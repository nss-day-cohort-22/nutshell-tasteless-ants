// const updateTaskDOM = require("./tasks/tasks_hide_show")
// const updateEventDOM = require("./events/eventsVerify")
const updateArticleDOM = require("./news_articles/dom")

const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))

const updateDashboard = function () {
    if (activeUser !== null) {
    // updateTaskDOM()
    // updateEventDOM()
    updateArticleDOM()
    }
}

module.exports = updateDashboard