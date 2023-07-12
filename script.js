// Get reference to the html elements
const addBook = document.querySelector(".header > button")
const addBtn = document.querySelector("form button")
const formContainer = document.querySelector("#form")
// Add the class show to the formContainer
addBook.addEventListener("click", ()=>{
    formContainer.className= "show"
})
// Add the class hide to the formContainer
addBtn.addEventListener("click", ()=>{
    formContainer.className = "hide"
})
// Set the default class of the formContainer
document.addEventListener("DOMContentLoaded", ()=>{
    formContainer.className = "hide"
})

