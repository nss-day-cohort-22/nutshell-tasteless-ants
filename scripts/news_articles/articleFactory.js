console.log("articleFactory")
const submitArticle = require("./articleController")
const NutshellDatabase = require("../register_login/NutshellDatabase")


// id generator
const articleId = function* () {
    let id = 0
    while (true) {
        yield id
        id ++
    }
}
// dat instance tho
const lastNewsId = NutshellDatabase.news[NutshellDatabase.news.length - 1] || {id: 0}
const articleIdGenerator = articleId()

// object factory
const articleFactory = function(title, synopsis, url) {
    return Object.create(null, {
        "id": {
            value: articleIdGenerator.next().value,
            enumerable: true
        },
        "userId": { //i don't know how this will turn out?
            value: JSON.parse(sessionStorage.getItem("activeUser")).id,
            enumerable: true
        },
        "title": {
            value: title,
            enumerable: true
        },
        "synopsis": {
            value: synopsis,
            enumerable: true
        },
        "url": {
            value: url,
            enumerable: true
        }
    })
}

module.exports = articleFactory