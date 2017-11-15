// author: Jesse
console.log("display friends")
const NutshellDatabase = require("../register_login/NutshellDatabase")
const registerData = require("../register_login/registerData")

const articleDatabase = JSON.parse(localStorage.getItem("NutshellDatabase")) || {}

let friendEL = document.getElementById("friend__displayer")

let updateFriendsDOM = function() {
    for (let i = 0; i < NutshellDatabase.users.length; i++) {
        let currentUser = NutshellDatabase.users[i];
        friendEL.innerHTML += `
        <div class="friendsToAdd">
            <div>${currentUser.userName}</div>
            <div><img src="${currentUser.picture}" width="100"></div>
            <button type="button" class="addFriend">Add Friend</button>
        </div>
        `
    }
}
module.exports = updateFriendsDOM
// function play(){
//     let audio = document.getElementById("sound1");
//     audio.play();
//     }

{/* <button type="button" onclick="audio.play()" class="addFriend">Add Friend</button>
<audio id="sound1" src="./friends-theme.mp3" preload="auto"></audio>  */}