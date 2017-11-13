// Author: Courtney Seward

// this module populates the events once the event form is submitted and the page is refreshed
const deleteEventArrays = require("./deleteButton")

console.log("Event Dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")

const eventsDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let eventsEl = document.getElementById("events__displayer")

let updateEventDom = function(){
    for (let i = 0; i < NutshellDatabase.events.length; i++) {
        let currentEvent = NutshellDatabase.events[i];

console.log(currentEvent)


// call the IDs we want to collect from the Database
   let writeToDom =
    `<div id="${currentEvent.id}">
        <div>${currentEvent.title}</div>
        <div>${currentEvent.location}</div>
        <div>${currentEvent.date}</div>
     <button class="delete_article" id = "${currentEvent.id}">Delete</button>
       </div> `
       eventsEl.innerHTML += writeToDom
    }
    deleteEventArrays()
}
module.exports = updateEventDom