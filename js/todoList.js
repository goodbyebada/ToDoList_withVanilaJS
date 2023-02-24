const loginForm = document.getElementById("login-form");
// const loginInput = document.getElementById("login-form input");
const loginInput = document.querySelector("#login-form input");
function submitFun(event) {
  event.peventDefault();

  console.log("hi");
  //   const username = loginInput.value;
  //   console.log(username);
  //   console.log(loginInput.value);
}

loginInput.addEventListener("submit", submitFun);

// event.preventDefault()가 안되는거 같지
//input 값 새로 고침하면 사라짐 ㅠ
