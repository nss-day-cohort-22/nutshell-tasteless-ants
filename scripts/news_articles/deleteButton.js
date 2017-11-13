let deleteArray = document.getElementsByClassName("delete_article")
for (let i = 0; i < deleteArray.length; i++) {
    let deleteBtns = deleteArray[i];
    deleteBtns.addEventListener("click", function (event) {
        event.target.parentNode.remove();
    });
}

/* <button id="delete_article">Delete</button> */
module.exports = deleteArray