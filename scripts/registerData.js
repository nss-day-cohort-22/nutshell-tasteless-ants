console.log("i tried")
const userDatabase = require("./users")


// take input form data (email and username) when submit button is clicked, create new object and push it into userDatabase

let userInputData = () => {

// this probably isn't working
    button.addEventListener("click", function(event) {
        let userInput = document.getElementById("check_userName", "check_email").value
        })
// creates id
    const userId = function* () {
        let id = 1
        while (true) {
            yield id
            id ++
        }
    }
    const userIdGenerator = userId()
// create object out of user input
    const userFactory = (id, userName, email) => {
        userDatabase.push(Object.create(null,{ //pushes into userDatabase
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


module.exports = userInputData