const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtnClick() {
  const userName = loginInput.value;

  if (userName === "") {
    alert("Please write your name!");
  } else if (userName.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", handleBtnClick);
