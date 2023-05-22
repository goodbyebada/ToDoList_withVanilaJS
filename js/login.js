const loginForm = document.getElementById("login-form");
// const loginInput = document.getElementById("login-form input");
//-> 어떻게 작성한담
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const USERNAME_TYPE = "username";
const HIDDEN_CLASS = "hidden";

function paintGreeting(username) {
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `반가워요! ${username}`;
}

function submitFun(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_TYPE, username);

  paintGreeting(username);
}

loginForm.addEventListener("submit", submitFun);

//새로고침하면 다시 로그인창이 뜸!
//if문 추가

if (localStorage.getItem(USERNAME_TYPE) == null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", submitFun);
} else {
  paintGreeting(localStorage.getItem(USERNAME_TYPE));
}
