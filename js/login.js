const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  loginForm.classList.add(CLASSNAME_HIDDEN);
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.innerText = username;

  localStorage.setItem(USERNAME_KEY, username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.innerText = `Hi ${savedUsername}`;
}
