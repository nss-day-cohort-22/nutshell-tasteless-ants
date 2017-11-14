// author: Jesse Page
console.log("Article Dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")
const deleteArticleArrays = require("./deleteButton")

const articleDatabase = JSON.parse(localStorage.getItem("NutshellDatabase")) || {}

let articleEl = document.getElementById("article__displayer")

let articleDOM = function() {
    articleEl.innerHTML = ""
    // sort
   NutshellDatabase.news.sort((previous, next) => next.timestamp - previous.timestamp)
    for (let i = 0; i < NutshellDatabase.news.length; i++) {
        let currentArticle = NutshellDatabase.news[i];
    let writeToDOM = `
        <div id="${currentArticle.id}">
            <h2>${currentArticle.title}</h2>
            <div>${currentArticle.synopsis}</div>
            <div>${currentArticle.url}</div>
            <div id="${currentArticle.timestamp}"></div>
            <button class="delete_article" id="${currentArticle.id}">Delete</button>
        </div>
        `
        articleEl.innerHTML += writeToDOM
    }
    deleteArticleArrays()
}

module.exports = articleDOM