const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const inputBox = document.querySelector(".input-box");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

document.addEventListener("DOMContentLoaded", showNotes);

function showNotes() {
    if (localStorage.getItem("notes")) {
        notesContainer.innerHTML = localStorage.getItem("notes");
    }
}

createBtn.addEventListener("click", function (e) {
    let inputBox = document.createElement("p");
    let img = document.createElement("IMG");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./Img/dlet.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
