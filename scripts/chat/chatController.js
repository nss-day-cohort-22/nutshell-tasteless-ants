//author Keith
console.log("LOADEDEDEDED")
let Nutshell = require("../register_login/NutshellDatabase")
console.log("Nutshell", Nutshell)
const chatFactory = require("./chatFactory")

let addNewMessage = function(Nutshell){
    console.log("testing testing")
    console.log("Nutshell", Nutshell)
    const message = document.getElementById("chatInputField").value
    let chatObject = chatFactory(message)
    Nutshell.messages.push(chatObject)

    let nutshellString = JSON.stringify(Nutshell)
    localStorage.setItem("NutshellDatabase",NutshellString)

    let nutshellJSON = localStorage.getItem("NutshellDatabase")
    let Nutshell = JSON.parse(nutshellJSON)

    let chatWindowMessage = document.querySelector(".chatWindow")
    addToChatWindow()
}
document.getElementById("chatSendButton").addEventListener("click", addNewMessage)
let addToChatWindow = function(){
    chatWindowMessage.innerHTML = ""
    Nutshell.messages.forEach(chat =>{
        chatWindowMessage.innerHTML += `
        <p class='chatBlockStyle'>
        ${chat}
        <br>
        </p>
        `
    })
}

module.exports = addNewMessage

// document.querySelector("#chatInputField").addEventListener("keyup", event => {
//     if(event.key === "Enter") return;
//     document.querySelector("#chatInputField").click();
//     event.preventDefault();
// });

// document.querySelector("#chatInputField").addEventListener("keypress", event => {
//     if(event.key === "Enter") {
//         chatController()
//         document.getElementById("#chatInputField").reset()
//     };
// });
