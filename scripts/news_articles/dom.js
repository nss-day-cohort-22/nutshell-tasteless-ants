console.log("Article Dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")

const articleDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))
let articleEl = document.getElementById("article__displayer")

    for (let i = 0; i < NutshellDatabase.news.length; i++) {
        let currentArticle = NutshellDatabase.news[i];

    articleEl.innerHTML += `
        <h2>${currentArticle.title}</h2>
        <div>${currentArticle.synopsis}</div>
        <div>${currentArticle.url}</div>
        <button id="delete_article">Delete</button>
        `
    }


module.exports = articleEl