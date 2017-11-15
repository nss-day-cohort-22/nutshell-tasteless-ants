// Author: Courtney Seward
// Goal of the Module:

const NutshellDatabase = require("../register_login/NutshellDatabase")
const hideShowEventsForm = require("../events/hide_show_eventsform")

// create an array and function to delete a specific event and delete it in local storage as well
let whatever = function() {
    let deleteEventArrays = document.getElementsByClassName("delete_article")
    for (let i = 0; i < deleteEventArrays.length; i++) {
        let deleteBtns = deleteEventArrays[i];
        deleteBtns.addEventListener("click", function (event) {
            console.log(event)
            // deleting the event from the DOM
            event.target.parentNode.remove();
            // this new variable grabs the id and sets the id to be a number not a string ()-check in console.log
            let idToDelete = parseInt(event.target.parentNode.id)
            // Once event is deleted from the DOM we want to delete it in Local Storage / create a new events database -filter is returning a new array where the id of the button that was clicked is removed
            let newDatabase = NutshellDatabase.events.filter(function(evnt){
                return idToDelete !== evnt.id
            })
            // save database
            NutshellDatabase.events = newDatabase
            localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase))

        });
    }

}

/* <button id="delete_article">Delete</button> */
module.exports = whatever