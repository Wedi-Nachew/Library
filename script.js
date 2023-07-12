const addBook = document.querySelector(".header > button")
const addBtn = document.querySelector("form button")
const formContainer = document.querySelector("#form")
addBook.addEventListener("click", ()=>{
    formContainer.className= "show"
})
addBtn.addEventListener("click", ()=>{
    formContainer.className = "hide"
})
document.addEventListener("DOMContentLoaded", ()=>{
    formContainer.className = "hide"
})

