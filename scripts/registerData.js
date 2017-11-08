console.log("ugh i'm trying")

const NutshellDatabase = require("./NutshellDatabase")
const verification = require("./registerVerify")
let button = document.getElementById("submitRegistration")

let userName = document.getElementById("check_userName").value
let email = document.getElementById("check_email").value

const storedDatabase = JSON.parse (
    localStorage.getItem("NutshellDatabase") || {})

// take input form data (email and username) when submit button is clicked, create new object and push it into userDatabase
let userInputData = () => {

 // creates id
    const userId = function* (from) {
        let id = 1 //because of the dummy users
        while (true) {
            yield from + id
            id ++
        }
    }

    const lastId = NutshellDatabase.users[0] || {id: 0}
    const userIdGenerator = userId()

 // create object out of user input
    const userFactory = (userName, email) => {
        const newUser = NutshellDatabase.users.push(Object.create(null, { //pushes into users
            "id": {
                value: userIdGenerator.next().value,
                enumerable: true
            },
            "userName": {
                value: userName,
                enumerable: true
            },
            "email": {
                value: email,
                enumerable: true
            }
        }))
    }
}
// set newUser to local storage
localStorage.setItem("newUser   ", JSON.stringify(NutshellDatabase));

module.exports = userInputData