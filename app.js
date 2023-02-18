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

if (savedUsername == null) {
  // loginForm 다시 보여주기
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  //greeting message 띄우기

  //새로고침하면 모든것은 초기화
  //기억하는건 savedUsername밖에 없음
  //--> loginForm도 없애는 코드 추가해줘야함
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${savedUsername}`;
}
