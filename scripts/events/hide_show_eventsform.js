// Author: Courtney Seward
// Goal of the Module:
// this module styles the events depending on their array order
// Editing Events: when I call the specific class that holds the editEventButton, then a for loop to runs through the speciifc ids within the Event Button Class, creates an event listener for when the new edits have been made you can submit the "Edit Event" button, call the specific ids,when the event is called with a click on the Edit Event Button it will store the new information in the Nutshell Database abd need to add it to the local storage.

const deleteEventArrays = require("./deleteButton")

console.log("Event Dom")
const NutshellDatabase = require("../register_login/NutshellDatabase")

const eventsDatabase = JSON.parse(localStorage.getItem("NutshellDatabase"))

let eventsEl = document.getElementById("events__displayer")

let updateEventDom = function(){
    eventsEl.innerHTML= ""
    let writeToDom = ""
    let counter = 0
    const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))
    for (let i = 0; i < NutshellDatabase.events.length; i++) {
        let currentEvent = NutshellDatabase.events[i];
        // this if statment allows each registered user to have their own events/ wont spill over from one user to another
            if (currentEvent.userID === activeUser.id) {
        // create an if/else statment that finds the first element in the array and style it
        // if the value of the array is not [0 style it accordingly and if it is an array of [0] then style it specifically with that class
            if (counter !== 0){
                writeToDom =
                `<div id="${currentEvent.id}">
                    <div class= "editEventButton" id= "editEventTitle" contenteditable = "true"> ${currentEvent.title}</div>
                    <div class= "editEventButton" id= "editEventLocation" contenteditable = "true"> ${currentEvent.location}</div>
                    <div class= "editEventButton" id= "editEventdate" contenteditable = "true"> ${currentEvent.date}</div>
               <button class="delete_article" id = "${currentEvent.id}">Delete</button> <button class = "editEventButton">Edit Event</button>
               </div>`
                // return "${newEventStyled.class}" if it is the first item in the array
        console.log("if ", currentEvent)
            } else {
                console.log("else", currentEvent)
                writeToDom =
                `<div id="${currentEvent.id}" class="newEventStyled">
                    <div class= "editEventButton" id= "editEventTitle" contenteditable = "true"> ${currentEvent.title}</div>
                    <div class= "editEventButton" id= "editEventLocation" contenteditable = "true"> ${currentEvent.location}</div>
                    <div class= "editEventButton" id= "editEventdate" contenteditable = "true"> ${currentEvent.date}</div>
               <button class="delete_article" id = "${currentEvent.id}">Delete</button> <button class = "editEventButton">Edit Event</button>
               </div>`
            }
            eventsEl.innerHTML += writeToDom
            counter ++
        }

    }
    addListeners()
    deleteEventArrays()
}
// now call the specific class that holds the editEventButton
let addListeners = function () {
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