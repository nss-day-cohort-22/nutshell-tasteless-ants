console.log("RegisterData is working!")

const NutshellDatabase = require("./NutshellDatabase")
const {registerOrLogin, activeUserSet} = require("./registerVerify")
let button = document.getElementById("submitRegistration")

 // creates id
    const userId = function* (from) {
        let id = 1 //because of the dummy users
        while (true) {
            yield from + id
            id ++
        }
    }
    const lastId = NutshellDatabase.users[NutshellDatabase.users.length - 1] || {id: 0}
    const userIdGenerator = userId(lastId.id)

 // create object out of user input
    const userFactory = (userName, email) => {
        return Object.create(null, {
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
        })
    }


module.exports = userFactory