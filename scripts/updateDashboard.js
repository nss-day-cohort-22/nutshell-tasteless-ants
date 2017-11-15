const updateTaskDOM = require("./tasks/tasks_hide_show")
const updateEventDOM = require("./events/hide_show_eventsform")
const updateArticleDOM = require("./news_articles/dom")
const welcomeActiveUser = require("./register_login/registerVerify")
const {addToChatWindow}= require("./chat/chatController")

const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))

const updateDashboard = function () {
    if (activeUser !== null) {
    updateTaskDOM()
    updateArticleDOM()
    welcomeActiveUser()
    updateEventDOM()
    addToChatWindow()
    }
}

module.exports = updateDashboard