// Get reference to the html elements
const addBook = document.querySelector(".header > button")
const addBtn = document.querySelector("form button")
const formContainer = document.querySelector("#form")
const form = document.querySelector("form")
const input = document.querySelectorAll("input")

const myLibrary=[]
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

input.forEach(input=>input.addEventListener("input", (event)=>{
   switch(event.target.name){
    case "title":
        bookInfo.title = event.target.value;
        break;
    case "author":
        bookInfo.author = event.target.value;
        break;
    case "pages":
        bookInfo.pages = event.target.value;
        break;
    case "read":
        bookInfo.read = event.target.value;
   }
}))




// Pop up if "Add Book" is clicked
// Disappear if clicked outside of the form or the Add button
document.addEventListener("click", (event)=>{
    if((event.target === addBtn) || 
        (!form.contains(event.target) && event.target !== addBook)){
        formContainer.className = "hide"
    }else if(event.target === addBook){
        formContainer.className= "show"
    } 
})

// Set the default class of the formContainer
document.addEventListener("DOMContentLoaded", ()=>{
    formContainer.className = "hide"
})


