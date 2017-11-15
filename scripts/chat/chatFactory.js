//author Keith

const chatId = function* (last) {
    let id = 1
    while (true) {
        yield last + id
        id ++
    }}

const lastId = NutshellDatabase.messages[NutshellDatabase.messages.length - 1].id || {id:0}
let chatMessageId = chatId()

let chatMessage = function(message){
    let timestamp = Date.now();
    return Object.create(null,{
        chatIdNumber: {
            value: chatMessageId.next().value,
            enumerable: true
        },
        userId: {
            value: JSON.parse(sessionStorage.getItem("activeUser")).id,
            enumerable: true
      },
        userName: {
            value: JSON.parse(sessionStorage.getItem("activeUser")).userName,
            enumerable: true
      },
        message: {
            value: message,
            enumerable : true
        },
        timestamp: {
            value: timestamp,
            enumerable : true
        }
    })

}

module.exports = chatMessage