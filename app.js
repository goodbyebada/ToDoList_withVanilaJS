// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add("hidden");
//   const username = loginInput.value;
//   console.log(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// //addEventListner 함수 직접 실행 x

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// function onLoginBtnClick() {
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  console.log("?");
  // console.log(loginForm);
  // event.preventDefault();
  // loginForm.classList.add(HIDDEN_CLASSNAME);
  // console.log(loginForm);
  // const username = loginInput.value;
  // console.log(username);
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = `Hello ${username}`;

  // console.log(greeting);
}

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
// }
