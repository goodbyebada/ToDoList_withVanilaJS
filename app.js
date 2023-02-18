const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginsubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
  localStorage.setItem("username", username);
  //localStorage에 저장

  //greeting 문구만 보여주기
  loginForm.classList.add("hidden");
  //loginform 없애기
  greeting.classList.remove("hidden");
  //greeting 보여주기
  greeting.innerText = `Hello ${username}!`;
}

loginForm.addEventListener("submit", onLoginsubmit);
//submit하면 onLoginsubmit 실행

const savedUsername = localStorage.getItem("username");
//localStorage에 저장된 username, savedUsername에 저장
//새로고침해도 localStorage에 저장되어있음
