
    // import Events factory and Nutshell Database
const eventFactory = require("../events/eventsData")
const NutshellDatabase = require("../register_login/NutshellDatabase")

let createEventForm = function(event) {
    let title = document.getElementById("eventForm__title").value
    let location = document.getElementById("eventForm__location").value
    let date = document.getElementById("eventForm__date").value
    console.log(event.target.id)

    // Create new variable that calls event Data and parameters
    const finalEventForm = eventFactory(title, location, date)


    // push new object into a database
    NutshellDatabase.events.push(finalEventForm)

    // set into local Storage
    localStorage.setItem("NutshellDatabase",JSON.stringify(NutshellDatabase));
    let database = JSON.parse(localStorage.getItem("NutshellDatabase"))
    console.log(database)
}

    // EVENT LISTENERS for both buttons
    // make an event listener with a click and create event form
// document.getElementById("createEventArticle").addEventListener("click",saveEventForm)

    // make an event listener with a click and save the event form
document.getElementById("saveEventForm").addEventListener("click",createEventForm)







