// const updateTaskDOM = require("./tasks/tasks_hide_show")
const updateEventDom = require("./events/hide_show_eventsform")
const updateArticleDOM = require("./articles/dom")

const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))

const updateDashboard = function () {
    debugger
    if (activeUser !== null) {
    // updateTaskDOM()
    updateEventDom()
    updateArticleDOM()
    }
}

module.exports = updateDashboard