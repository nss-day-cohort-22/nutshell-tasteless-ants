console.log("this is fine")
// let NutshellDatabase =
//     {
//     "users": [
//         {
//             "id": 1,
//             "userName": "Courtney",
//             "email": "courtney@buttz.com",
//         },
//         {
//             "id": 2,
//             "userName": "Keith",
//             "email": "keith@buttz.com",
//         },
//         {
//             "id": 3,
//             "userName": "Ryan",
//             "email": "ryan@buttz.com"
//         },
//         {
//             "id": 4,
//             "userName": "Jesse",
//             "email": "jesse@buttz.com"
//         }
//         ],

//     "events": [
//         {
//             "id": 1,
//             "userID" :2,
//             "eventForm_title": "Event title",
//             "eventForm_location": "Memphis,TN",
//             "eventForm_date": "June 12th, 2016"
//         }

//         ],
//     "messages": [
//         { "id": 1, "userId": 1, "message": "What's up?" }
//         ],

//     "news": [
//         { "id": 1, "userId": 2, "title": "Monkeybuttz", "synopsis": "Check out this recent discovery about Monkeybuttz", "url": "www.yep.com" }
//         { "id": 2, "userId": 2, "title": "Monkeybuttz", "synopsis": "Check out this recent discovery about Monkeybuttz", "url": "www.yep.com" }
//         { "id": 3, "userId": 2, "title": "Monkeybuttz", "synopsis": "Check out this recent discovery about Monkeybuttz", "url": "www.yep.com" }
//         ],

//     "friends": [
//         { "userId": 1, "friendId": 3 },
//         { "userId": 1, "friendId": 2 }
//         ],

//     "tasks": [
//         { "id": 1, "userId": 3, "task": "Take out garbage" }
//         ]
//     }
//     localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase));

let JSONNutshell = localStorage.getItem("NutshellDatabase")
 NutshellDatabase = JSON.parse(JSONNutshell)

console.log(NutshellDatabase.users)

module.exports = NutshellDatabase