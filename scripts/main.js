const registerOrLogin = require("./register_login/registerVerify")
const pageShown = require("./register_login/dashboard_hide_show")
const eventFactory = require("./events/eventsVerify")
const submitArticle = require("./news_articles/articleController")
const articleFactory = require("./news_articles/articleFactory")
const articleEl = require("./news_articles/dom")
const taskFactory = require("./tasks/tasksData")
const updateTaskDOM = require("./tasks/tasks_hide_show")
const createTaskForm = require("./tasks/tasksSubmit")
const deleteTasks = require("./tasks/tasksDelete")
const createTaskCard = require("./tasks/tasksFields")
const logOut = require("./register_login/logOut")
const updateDashboard = require("./updateDashboard")

pageShown()
updateDashboard()
// submitArticle()  // i don't know if this should be here?

