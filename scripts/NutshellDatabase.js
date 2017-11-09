console.log("this is fine")
const NutshellDatabase =
    {
    "users": [
        {
            "id": 1,
            "userName": "Courtney",
            "email": "courtney@buttz.com",
        },
        {
            "id": 2,
            "userName": "Keith",
            "email": "keith@buttz.com",
        },
        {
            "id": 3,
            "userName": "Ryan",
            "email": "ryan@buttz.com"
        },
        {
            "id": 4,
            "userName": "Jesse",
            "email": "jesse@buttz.com"
        }
        ],
    "messages": [
        { "id": 1, "userId": 1, "message": "What's up?" }
        ],

    "news": [
        { "id": 1, "userId": 2, "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "note": "Check out this recent discovery about workholes" }
        ],

    "friends": [
        { "userId": 1, "friendId": 3 },
        { "userId": 1, "friendId": 2 }
        ],

    "tasks": [
        { "id": 1, "userId": 3, "task": "Take out garbage" }
        ]
    }
    localStorage.setItem("NutshellDatabase", JSON.stringify(NutshellDatabase));

// let JSONNutshell = localStorage.getItem("NutshellDatabase")
// let NutshellDatabase = JSON.parse(JSONNutshell)

// console.log(NutshellDatabase.users)

module.exports = NutshellDatabase