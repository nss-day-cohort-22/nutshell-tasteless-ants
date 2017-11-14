// author: Jesse Page
console.log("articleController")
const articleFactory = require("./articleFactory")
const NutshellDatabase = require("../register_login/NutshellDatabase")
const updateArticleDOM = require("./dom")
const deleteMaster = require("./deleteButton")


// update article dom
let submitArticle = function(event) {
    // get input value from form
    let articleTitle = document.getElementById("articleForm__title").value
    let articleSynopsis = document.getElementById("articleForm__synopsis").value
    let articleUrl = document.getElementById("articleForm__url").value
    // call object factory function to create new object from input data
    const newArticle = articleFactory(articleTitle, articleSynopsis, articleUrl)
    // push new object into database
    NutshellDatabase.news.push(newArticle)
    // set in local storage
    localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase))
    console.log(NutshellDatabase.news)
    updateArticleDOM()
}
// submit button click creates new object with input value and pushes to database
document.getElementById("submit_article_button").addEventListener("click", submitArticle)



module.exports = submitArticle