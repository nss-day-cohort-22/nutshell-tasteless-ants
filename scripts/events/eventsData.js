// The one I HAVE BEEN WORKING ON

console.log("blah, blah, blah")
// This page creates an Event Object
const NutshellDatabase = require("../register_login/NutshellDatabase")
// const {registerOrLogin, activeUserSet} = require("./registerVerify")
// let button = document.getElementById("submitRegistration")

 // creates event id with a generator function
    const eventID = function* (from) {
        let id = 1 //because of the dummy users
        while (true) {
            yield from + id
            id ++
        }
    }
    const lastId = NutshellDatabase.events[NutshellDatabase.events.length - 1] || {id: 0}
    const eventIdGenerator = eventID(lastId.id)

 // create another event object out of user input and event form
    const eventFactory = (eventForm__title, eventForm__location, eventForm__date) => {
        return Object.create(null, {
            "id": {
                value: eventIdGenerator.next().value,
                enumerable: true
            },
            "userID": {
                value: JSON.parse(sessionStorage.getItem("activeUser")).id,
                enumerable: true
            },
            "eventForm__title": {
                value: eventForm__title,
                enumerable: true
            },
            "eventForm__location": {
                value: eventForm__location,
                enumerable: true
            },
            "eventForm__date": {
                value:eventForm__date,
                enumerable: true
            }
        })
    }


module.exports = eventFactory