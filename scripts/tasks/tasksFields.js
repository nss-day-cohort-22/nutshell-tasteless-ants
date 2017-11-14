// Ryan McPherson - Hide and show the input fields as create button is being clicked

function createTaskCard() {
    if (event.target.id === "create_new_task") {
        document.getElementById("task_create_card").classList.remove("hidden")
    } else /*(event.target.id === "submit_article_button")*/ {
        document.getElementById("task_create_card").classList.add("hidden")
    }
}
// event on "create new article" button
document.getElementById("create_new_task").addEventListener("click", createTaskCard)

// event on "save article" button
document.getElementById("submit_task_button").addEventListener("click", createTaskCard)

module.exports = createTaskCard