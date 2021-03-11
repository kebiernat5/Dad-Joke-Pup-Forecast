var form = document.querySelector(".top-banner form");
var api_key = "83516de6bf1e3fb4d87d3823f33c6bd2"
 
form.addEventListener("submit", e => {
  e.preventDefault();
  var inputVal = input.value;
});

var historyEl = document.querySelector("#history");
var inputEl = document.querySelector("#city-name");
var weatherHistory = JSON.parse(localStorage.getItem("city-name")) || [];
console.log(weatherHistory);
//function takes city name and retrieves weather data for that city
function getWeather(city) {
  var currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  //send fetch request to get latitude and longitude
  fetch(currentWeatherUrl)
    .then((data) => data.json())
    .then(function (weather) {
      console.log(weather);
      var lat = weather.coord.lat;
      var lon = weather.coord.lon;
      if (weather.cod === "404") {
        alert("City not found");
        return;
      }
      //api call for the latitude and longitude
      var onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`;
      fetch(onecallURL)
        .then((data) => data.json())
        .then(function (onecallData) {
          console.log(onecallData);
          buildDashboard(onecallData);
        });
    });
}

    getWeather("")