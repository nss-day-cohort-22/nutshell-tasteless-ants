// Author: Courtney Seward
// Goal of the Module:
// hide and show function that displays differnet aspects of the event box and form

function createEventCard() {
    if (event.target.id === "createEventArticle") {
        document.getElementById("createNewEventArticle").classList.remove("hidden")
    } else /*(event.target.id === "submit_article_button")*/ {
        document.getElementById("createNewEventArticle").classList.add("hidden")
    }
}

// event on "create new article" button
document.getElementById("createEventArticle").addEventListener("click", createEventCard)

// event on "save article" button
document.getElementById("saveEventForm").addEventListener("click", createEventCard)


module.exports = createEventCard