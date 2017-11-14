// Ryan McPherson - Creates new object for newly created task with unique ID

const NutshellDatabase = require("../register_login/NutshellDatabase")

 // Creates unique task id
 const taskId = function* (last) {
    let id = 1 // From seeded database
    while (true) {
        yield last + id
        id ++
    }
}
// ID generator instance
const lastTaskId = NutshellDatabase.tasks[NutshellDatabase.tasks.length - 1] || {id: 0}
const taskIdGenerator = taskId(lastTaskId.id)

// create object out of user input
const taskFactory = (taskTitle, taskCompletionDate) => {
    return Object.create(null, {
        "id": {
            value: taskIdGenerator.next().value,
            enumerable: true
        },
        "userID": {
            value: JSON.parse(sessionStorage.getItem("activeUser")).id,
            enumerable: true
        },
        "taskTitle": {
            value: taskTitle,
            enumerable: true
        },
        "taskCompletionDate": {
            value: taskCompletionDate,
            enumerable: true
        },
        "completed": {
            value: false,
            enumerable: true
        },
        "timeStamp:": {
            value: Date.now(),
            enumerable: true
        }
    })
}

module.exports = taskFactory