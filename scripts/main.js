const registerOrLogin = require("./register_login/registerVerify")
const pageShown = require("./register_login/dashboard_hide_show")
const submitArticle = require("./news_articles/articleController")
const articleFactory = require("./news_articles/articleFactory")
const articleEl = require("./news_articles/dom")
const taskFactory = require("./tasks/tasksData")
const taskEl = require("./tasks/tasks_hide_show")
const createTaskForm = require("./tasks/tasksSubmit")

pageShown()
// submitArticle()  // i don't know if this should be here?
