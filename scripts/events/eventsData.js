// Author: Courtney Seward
// Goal of the Module:
// Step 1: Create an event generator function that creates an intial event id
// Step 2: Create a factory function that allows the user to continually create new event IDs and export the Event Factory

console.log("blah, blah, blah")
// This page creates an Event Object
const NutshellDatabase = require("../register_login/NutshellDatabase")
// const {registerOrLogin, activeUserSet} = require("./registerVerify")
// let button = document.getElementById("submitRegistration")

 // creates an event id with a generator function
    const eventID = function* (last) {
        let id = 1 //because of the dummy users
        while (true) {
            yield last + id
            id ++
        }
    }
    const lastId = NutshellDatabase.events[NutshellDatabase.events.length - 1] || {id: 0}
    const eventIdGenerator = eventID(lastId.id)

 // create another event object out of user input and event form
    const eventFactory = (title, location, date) => {
        return Object.create(null, {
            "id": {
                value: eventIdGenerator.next().value,
                enumerable: true
            },
            "userID": {
                value: JSON.parse(sessionStorage.getItem("activeUser")).id,
                enumerable: true
            },
            "title": {
                value: title,
                enumerable: true
            },
            "location": {
                value: location,
                enumerable: true
            },
            "date": {
                value: date,
                enumerable: true
            }
        })
    }


module.exports = eventFactory