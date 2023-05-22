const API_KEY = "080d60dbc7be814f87c52d4df1dad646";

// 전역변수로 해도 되나?
const weatherContainer = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
//되넹

function geoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=sunset`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   const weatherContainer = document.querySelector(
      //     "#weather span:first-child"
      //   );
      //   const city = document.querySelector("#weather span:last-child");

      const name = data.name;
      const weather = data.weather[0].main;
      city.innerText = name;
      weatherContainer.innerText = weather;
    });
}

function geoErr() {
  alert("cant find your position");
}

navigator.geolocation.getCurrentPosition(geoOK, geoErr);
