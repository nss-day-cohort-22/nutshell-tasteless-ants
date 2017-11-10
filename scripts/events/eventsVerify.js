
    // import Events factory and Nutshell Database
const eventFactory = require("../events/eventsData")
const NutshellDatabase = require("../register_login/NutshellDatabase")

let createEventForm = function(event) {
    let eventForm_title = document.getElementById("eventForm__title").value
    let eventForm_location = document.getElementById("eventForm__location").value
    let eventForm_date = document.getElementById("eventForm__date").value
    console.log(event.target.id)

    // Create new variable that calls event Data and parameters
    const finalEventForm = eventFactory(eventForm_title,eventForm_location, eventForm_date)


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







