function sayHello() {
  console.log("hello");
}

const greeting = document.querySelector("#greeting");

greeting.innerText = "Hello youjin!";

// setInterval(sayHello, 5000);
// //-> 5초마다 등장

// setTimeout(sayHello, 5000);
// //-> 5초후에 한번 등장

//setInterval --> 반복 ms 기준
//setTimeout ms기준

const clock = document.querySelector("h2#clock");

function clockFun() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}

clockFun();
setInterval(clockFun, 1000);
//1초마다
