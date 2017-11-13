// const articleEl = require("./news_articles/dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")


let deleteArticle = document.getElementsByClassName("delete_article")
for (let i = 0; i < deleteArticle.length; i++) {
    let deleteBtns = deleteArticle[i];
    deleteBtns.addEventListener("click", function (event) {
        console.log(event)
        // delete from DOM
        event.target.parentNode.remove();
        // this new variable grabs the id and sets the id to be a number not a string ()-check in console.log
        let idToDelete = parseInt(event.target.parentNode.id)
        // Once event is deleted from the DOM we want to delete it in Local Storage / create a new events database -filter is returning a new array where the id of the button that was clicked is removed
        let newDatabase = NutshellDatabase.news.filter(function(evnt){
            return idToDelete !== evnt.id
        })
        // save database
        NutshellDatabase.news = newDatabase
        localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase))

    });
}
/* <button id="delete_article">Delete</button> */
module.exports = deleteArticle