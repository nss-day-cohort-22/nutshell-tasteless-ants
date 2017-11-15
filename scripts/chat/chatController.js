//author Keith

//requirements
let Nutshell = require("../register_login/NutshellDatabase")
const chatFactory = require("./chatFactory")

//auto scrolling variable and initial scroll on page load
const autoScroll = () => {chatWindowMessage.scrollTop = chatWindowMessage.scrollHeight; };
setTimeout(autoScroll, 200)

// When you hit enter, it will simulate clicking the 'Send' button
document.getElementById("chatInputField")
    .addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("chatSendButton").click();
}
});

//new message goes to database and comes back
let addNewMessage = function(){
    let message = document.getElementById("chatInputField").value
    let chatObject = chatFactory(message);
    Nutshell.messages.push(chatObject);

    let nutshellString = JSON.stringify(Nutshell)
    localStorage.setItem("NutshellDatabase", nutshellString)

    let nutshellJSON = localStorage.getItem("NutshellDatabase")
    Nutshell = JSON.parse(nutshellJSON)

    addToChatWindow()
    document.getElementById("chatInputField").value = "";
    autoScroll()
}

//displaying the message in HTML
document.getElementById("chatSendButton").addEventListener("click", addNewMessage)
let chatWindowMessage = document.querySelector(".chatWindow")
let addToChatWindow = function(){
    chatWindowMessage.innerHTML = ""
    Nutshell.messages.forEach(chat =>{
        chatWindowMessage.innerHTML += `
        <p class='chatBlockStyle'>
        ${chat.userName}: ${chat.message} 
        <button id="EditChat">Edit</button>
        </p>
        `
    })
    function editMessage() {
        let replaceWith = `${chat.userName}: ${chat.message}`;
        document.getElementById("EditChat").innerHTML = replaceWith;
    }
}

//a 1 second timed refresh of the database
let dbCheck = setInterval(dbCheckRefresh,1000)
    function dbCheckRefresh(){
        Nutshell
        let nutshellJSON = localStorage.getItem("NutshellDatabase");
        JSON.parse(nutshellJSON);
        console.log("hi")
    }

//a 1 second timed check for new messages against the database
let pastChatIndex = Nutshell.messages.length;

let chatCheck = setInterval(chatCheckRefresh, 1000)
    function chatCheckRefresh(){
        let currentChatIndex = Nutshell.messages.length
        if(currentChatIndex > pastChatIndex){
            autoScroll()
            pastChatIndex = Nutshell.messages.length
        }
}

module.exports = {addNewMessage, addToChatWindow}