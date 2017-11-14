const chatId = function* () {
    let id = 1
    while (true) {
        yield id
        id ++
    }}

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