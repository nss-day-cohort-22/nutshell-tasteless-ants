const welcomeActiveUser = require("./register_login/registerVerify")
const pageShown = require("./register_login/dashboard_hide_show")
const eventFactory = require("./events/eventsVerify")
const submitArticle = require("./news_articles/articleController")
const articleFactory = require("./news_articles/articleFactory")
const createCard = require("./news_articles/create_hide_show")
const deleteMaster = require("./news_articles/deleteButton")
const updateDashboard = require("./updateDashboard")
const taskFactory = require("./tasks/tasksData")
const updateTaskDOM = require("./tasks/tasks_hide_show")
const createTaskForm = require("./tasks/tasksSubmit")
const chatController = require("./chat/chatController")
const createEventForm = require("./events/hide_show_eventsform")
const deleteButton = require("./events/deleteButton")
const toggleEventsPage = require("./events/toggleButtonsEventForm")
const deleteTasks = require("./tasks/tasksDelete")
const createTaskCard = require("./tasks/tasksFields")
const logOut = require("./register_login/logOut")
const updateFriendsDOM = require("./friends/friendsDOM")

// const editTheCurrentEvent = require("./events/eventsButton")
pageShown()

updateDashboard()
updateFriendsDOM()



// Jesse's Merges
// submitArticle()  // i don't know if this should be here?
// const updateFriendsDOM = require("./friends/friendsDOM")

// pageShown()
// updateDashboard()
// updateFriendsDOM()





