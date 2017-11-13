// author: Jesse Page
console.log("Article Dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")
const deleteArticleArrays = require("./deleteButton")

const articleDatabase = JSON.parse(localStorage.getItem("NutshellDatabase")) || {}

let articleEl = document.getElementById("article__displayer")

let articleDOM = function() {
    for (let i = 0; i < NutshellDatabase.news.length; i++) {
        let currentArticle = NutshellDatabase.news[i];
// sort
    let writeToDOM = `
        <div id="${currentArticle.id}">
            <h2>${currentArticle.title}</h2>
            <div>${currentArticle.synopsis}</div>
            <div>${currentArticle.url}</div>
            <div>${currentArticle.timestamp}</div>
            <button class="delete_article" id="${currentArticle.id}">Delete</button>
        </div>
        `
        articleEl.innerHTML += writeToDOM
    }
    deleteArticleArrays()
}

module.exports = articleDOM