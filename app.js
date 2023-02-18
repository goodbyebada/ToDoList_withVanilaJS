// const Login = document.getElementById("login-from");
// const Name = Login.querySelector("input");
// const Button = Login.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit() {
//   const userName = loginInput.value;
//   console.log(userName);
// }

function onLoginSubmit(event) {
  event.preventDefault();
  //브라우저의 기본동작을 막을 수 있다

  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 브라우저는 브라우저내의 event의 정보를 받아내서
//onClickbtn을 누르고 있음

//event가 발생할때 브라우저가  onLoginSubmit라는 함수를 호출
//onLoginSubmit() -> argument(파라미터)를 가진채로
//추가적인 정보를 가진채로 호출
//argument 이름이 암거나 상관없음 tomato 라고 해보자
//공간만 제공하면 됨 -> 방금 일어난 event에 대해 정보를 지닌 argument를 채워놓을거야
