const addBook = document.querySelector(".header > button");
const addBtn = document.querySelector("form button");
const formContainer = document.querySelector("#form");
const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const checkBox = document.querySelector("input[type=checkbox]");
const container = document.querySelector(".container");
const display = document.querySelector("tbody");
const bookBtn = document.querySelectorAll("td button");
const tableRow = document.querySelectorAll("tr");
let readStatus = "To Read";
let myLibrary = [];
let bookInfo = {};

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function checkBoxValue() {
    checkBox.checked ? (readStatus = "Have Read") : (readStatus = "To Read");
}
input.forEach((input) =>
    input.addEventListener("input", (event) => {
        switch (event.target.name) {
            case "title":
                bookInfo["title"] = event.target.value;
                break;
            case "author":
                bookInfo["author"] = event.target.value;
                break;
            case "pages":
                bookInfo["pages"] = event.target.value;
                break;
            case "read":
                checkBoxValue();
                bookInfo["read"] = readStatus;
        }
    })
);
function addBookToLibrary() {
    let newBook = new Book(
        bookInfo.title,
        bookInfo.author,
        bookInfo.pages,
        bookInfo.read
    );
    myLibrary.push(newBook);
}
addBtn.addEventListener("click", (event) => {
    if (
        Boolean(bookInfo.title) &&
        Boolean(bookInfo.author) &&
        Boolean(bookInfo.pages)
    ) {
        event.preventDefault();
        input.forEach((input) => (input.value = ""));
        addBookToLibrary();
        formContainer.className = "hide";
        renderBooks();
        bookInfo = {};
        input.forEach((field) => (field.value = ""));
    } else {
        return false;
    }
});
function renderBooks() {
    for (const book of myLibrary) {
        book["remove"] = `Remove`;
        book["dataset"] = myLibrary.indexOf(book);
        if (myLibrary.indexOf(book) === myLibrary.length - 1) {
            const tr = document.createElement("tr");
            const datas = Object.values(book);
            for (data of datas) {
                const td = document.createElement("td");
                if (datas.indexOf(data) == 3 && data == "To Read") {
                    const btn = document.createElement("button");
                    btn.className = "not-readed";
                    btn.textContent = data;
                    td.appendChild(btn);
                } else if (datas.indexOf(data) == 3 && data == "Have Read") {
                    const btn = document.createElement("button");
                    btn.className = "readed";
                    btn.textContent = data;
                    td.appendChild(btn);
                } else if (datas.indexOf(data) == 4) {
                    const btn = document.createElement("button");
                    btn.textContent = data;
                    td.appendChild(btn);
                } else if (datas.indexOf(data) === 5) {
                    continue;
                } else {
                    td.textContent = data;
                }
                tr.appendChild(td);
            }
            display.appendChild(tr);
        }
    }
}
renderBooks();
display.addEventListener("click", (event) => {
    if (
        event.target.nodeName === "BUTTON" &&
        event.target.textContent === "To Read"
    ) {
        event.target.className = "readed";
        event.target.textContent = "Have Read";
    } else if (
        event.target.nodeName === "BUTTON" &&
        event.target.textContent === "Have Read"
    ) {
        event.target.className = "not-readed";
        event.target.textContent = "To Read";
    } else if (
        event.target.nodeName === "BUTTON" &&
        event.target.textContent === "Remove"
    ) {
        let toBeRemoved = event.target.parentNode.parentNode;
        display.removeChild(toBeRemoved);
        let removedBook =
            event.target.parentNode.parentNode.firstChild.textContent;
        for (const book of myLibrary) {
            if (book["title"] === removedBook) {
                myLibrary.splice(book["dataset"], 1);
            }
        }
    }
});
document.addEventListener("click", (event) => {
    if (!form.contains(event.target) && event.target !== addBook) {
        formContainer.className = "hide";
    } else if (event.target === addBook) {
        formContainer.className = "show";
        checkBox.checked = false;
        bookInfo["read"] = readStatus;
        input.forEach((field) => (field.value = ""));
    }
});
document.addEventListener("DOMContentLoaded", () => {
    formContainer.className = "hide";
    input.forEach((field) => (field.value = ""));
});

const formValidation = () => {
    const form = document.querySelector("form");
    const title = form.querySelector("[name='title']");
    const author = form.querySelector("[name='author']");
    const pages = form.querySelector("[name='pages']");
    const addBtn = form.querySelector("[type='submit']");

    title.addEventListener(
        "blur",
        (event) => {
            checkValidy(event);
            addBtn.click();
        },
        true
    );
    author.addEventListener(
        "blur",
        (event) => {
            checkValidy(event);
            addBtn.click();
        },
        true
    );
    pages.addEventListener(
        "blur",
        (event) => {
            checkValidy(event);
            addBtn.click();
        },
        true
    );

    function checkValidy(event) {
        if (event.target.validity.valueMissing) {
            event.target.setCustomValidity(
                event.target.name.replace(
                    event.target.name[0],
                    event.target.name[0].toUpperCase()
                ) + " is required!"
            );
        } else if (event.target.validity.typeMismatch) {
            event.target.setCustomValidity(
                `${event.target.value} is not ${event.target.type}`
            );
        } else if (
            !event.target.validity.valueMissing ||
            !event.target.validity.typeMismatch
        ) {
            event.target.setCustomValidity("");
        }
    }
};

formValidation();
