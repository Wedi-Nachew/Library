// Get reference to the html elements
const addBook = document.querySelector(".header > button")
const addBtn = document.querySelector("form button")
const formContainer = document.querySelector("#form")
const form = document.querySelector("form")

const myLibrary=[]
const bookInfo ={}

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

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}






// Set the default class of the formContainer
document.addEventListener("DOMContentLoaded", ()=>{
    formContainer.className = "hide"
})


