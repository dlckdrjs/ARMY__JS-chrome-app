const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`
}

function handleBtnClick(event){
    event.preventDefault();
    const username = loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreeting(username)
    localStorage.setItem(USERNAME_KEY, username)
}



const saveUsername = localStorage.getItem(USERNAME_KEY)
if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", handleBtnClick)
} else{
    paintGreeting(saveUsername)
}