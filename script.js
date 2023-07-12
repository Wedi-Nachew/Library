// Get reference to the html elements
const addBook = document.querySelector(".header > button")
const addBtn = document.querySelector("form button")
const formContainer = document.querySelector("#form")
const form = document.querySelector("form")

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


