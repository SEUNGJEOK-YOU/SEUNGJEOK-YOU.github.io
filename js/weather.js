const weather = document.querySelector("#weather");
const weatherText = document.querySelector("#weather span");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "de3682cff22d47e078950f68509e4f4d";
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const position = data.name;
      const temperature = data.main.temp;
      const sky = data.weather[0].main;
      weatherText.innerText = `${temperature}℃ ${sky} @ ${position}`;
      weather.classList.remove(HIDDEN_KEY);
      weather.classList.add(APPEAR_KEY);
    });
}
function onGeoError() {
  alert("Can's access your location. No weather for you :[");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
