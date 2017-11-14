// Author: Courtney Seward

// this module populates the events once the event form is submitted and the page is refreshed
const deleteEventArrays = require("./deleteButton")

console.log("Event Dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")

const eventsDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let eventsEl = document.getElementById("events__displayer")

let updateEventDom = function(){
    eventsEl.innerHTML= ""
    for (let i = 0; i < NutshellDatabase.events.length; i++) {
        let currentEvent = NutshellDatabase.events[i];
        // create and if/else statment that finds the first element in the array and style it
// if (currentEvent[0]) {
//     return

// }
        console.log(currentEvent)


        // call the IDs we want to collect from the Database
        // assign a class here that you will style with CSS
        // confused about placement for new class name: <div class="${newEventStyled.class}"> </div>
        let writeToDom =
        `<div id="${currentEvent.id}">
            <div class= "editEventButton" id= "editEventTitle" contenteditable = "true"> ${currentEvent.title}</div>
            <div class= "editEventButton" id= "editEventLocation" contenteditable = "true"> ${currentEvent.location}</div>
            <div class= "editEventButton" id= "editEventdate" contenteditable = "true"> ${currentEvent.date}</div>
       <button class="delete_article" id = "${currentEvent.id}">Delete</button> <button class = "editEventButton">Edit Event</button>
       </div>`
       eventsEl.innerHTML += writeToDom
    }
    addListeners()
    deleteEventArrays()
}
// now call the specific class that holds the editEventButton
let addListeners = function () {
    debugger
    let finalizeEventButton = document.getElementsByClassName("editEventButton")
    // call a for loop to run through the speciifc ids within the Event Button Class
    for (let i = 0; i < finalizeEventButton.length; i++) {
        const element = finalizeEventButton[i];
        // create an event listener for when the new edits have been made you can submit the "Edit Event" button
            element.addEventListener("click", function (e) {
                console.log(e)
                e.preventDefault()
                //calls the specific ids
                let idToEdit = parseInt(e.target.parentNode.id)
                let completedEventObject = NutshellDatabase.events.filter(function(evnt){
                    return idToEdit === evnt.id
            })
            console.log(completedEventObject)
            completedEventObject[0].title = e.target.parentNode.children[0].innerText
            completedEventObject[0].location = e.target.parentNode.children[1].innerText
            completedEventObject[0].date = e.target.parentNode.children[2].innerText
             // when the event is called with a click on the Edit Event Button it will store the new information in the Nutshell Database
            //  need to add it to the local storage
            localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase))
        })
    }
}

module.exports = updateEventDom