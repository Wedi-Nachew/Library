// Get reference to the html elements
const addBook = document.querySelector(".header > button")
const addBtn = document.querySelector("form button")
const formContainer = document.querySelector("#form")
const form = document.querySelector("form")
const input = document.querySelectorAll("input")
const checkBox = document.querySelector("input[type=checkbox]")
const container = document.querySelector(".container")
const display = document.querySelector("tbody")
const bookStatus = document.querySelectorAll(".book-satus")


bookStatus.forEach(btn=>btn.addEventListener("click", (event)=>{
    console.log(event.target.textContent==="To Read")
    if(event.target.textContent==="To Read"){
        btn.style.cssText = "background-color: green;";
        btn.textContent = "Have Read"
    } else if(event.target.textContent==="Have Read"){
        btn.style.cssText = "background-color:  rgb(184, 55, 29);";
        btn.textContent = "To Read"
    }
}))




let readStatus = "To Read"
const myLibrary=[
                    {title: "Sapiens", author: "prof. Yuval Harari", pages: 123, read: "Have Read"},
                    {title: "Eloquent Javascript", author: "Majin Haverbeke", pages: 448, read: "To read"}
                ]
const bookInfo ={}


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function checkBoxValue(){
    (checkBox.checked) ? readStatus = "Have Read" : readStatus = "To Read";
}

input.forEach(input=>input.addEventListener("input", (event)=>{
   switch(event.target.name){
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
        checkBoxValue()
        bookInfo["read"] = readStatus;
   }
}))

function addBookToLibrary(){
    let newBook = new Book(bookInfo.title, bookInfo.author, bookInfo.pages, bookInfo.read)
    myLibrary.push(newBook)
}
addBtn.addEventListener("click", (event)=>{
    if(Boolean(bookInfo.title) && Boolean(bookInfo.author) && Boolean(bookInfo.pages)){
        event.preventDefault()
        addBookToLibrary();
        formContainer.className = "hide";
        renderBooks()
        // console.table(bookInfo)
    } else{
        return false
    }
})

function renderBooks(){
    for (const book of myLibrary){
        let tr = document.createElement("tr")
        let datas = Object.values(book);
        for(data of datas){
            const td = document.createElement("td")
            if(datas.indexOf(data) == 3){
                const btn = document.createElement("button")
                btn.textContent = data
                td.appendChild(btn)
            } else {
                td.textContent = data
            }
            tr.appendChild(td)
        }
        display.appendChild(tr)
   }
}
renderBooks()


// Pop up if "Add Book" is clicked
// Disappear if clicked outside of the form or the Add button
document.addEventListener("click", (event)=>{
    if(!form.contains(event.target) && event.target !== addBook){
        formContainer.className = "hide"
    }else if(event.target === addBook ){
        formContainer.className= "show"
    } 
})

// Set the default settings of the Library
document.addEventListener("DOMContentLoaded", ()=>{
    formContainer.className = "hide"
    bookInfo["read"] = readStatus;
})


