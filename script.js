// function to perform a get request
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }
  // function to get a random image
  function getRandomImage() {
    // get the json from the server
    var json = httpGet("https://random.dog/doggos");
    // console.log(json);
    // get the image object
    var image = document.querySelector(".puppy");
    // decode the json into an array
    var array = JSON.parse(json);
    console.log(array);
    // get the image url from the array
    var url = array.message;
    console.log(url);
    console.log(image);
  
    var randomPhotoIndex = Math.floor(Math.random() * array.length);
    image.innerHTML = `<img src="https://random.dog/${array[randomPhotoIndex]}">`;
  
    
  }
  getRandomImage();
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then(displayData);
  function displayData(data) {
    var dadEl = $("#dad");
    dadEl.text(data.joke);
  }
  var pupKey = "https://random.dog/57213dc8-2617-44c9-b72d-a0fb330c194c.jpg";
  function getRandomPup() {
    fetch(pupKey).then(function (response) {
      response.text().then(function (text) {
        poemDisplay.textContent = text;
      });
    });
  }
  //Myrla...........
  //Key into the server
  var api_key = "b709b8b1255dbfd93b409d2ca2ece655";
  var historyEl = document.querySelector("#history");
  var inputEl = document.querySelector("#city-name");
  var currentCity = document.querySelector("#currentCity");
  var searchedCities = document.querySelector("#searchedCities");
  
  function renderSearchedCities() {
      searchedCities.innerHTML = "";
    for (i = 0; i < weatherHistory.length; i++) {
      var searchedEl = document.createElement("p");
      searchedEl.textContent = weatherHistory[i];
      searchedCities.append(searchedEl);
    }
  }

  function getFahrenheit(K) {
    return Math.floor((K - 273.15) * 1.8 + 32);
  }
  //function takes city name and retrieves weather data for that city
  function getWeather(city) {
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    //send fetch request to get latitude and longitude
    fetch(currentWeatherUrl)
      .then((data) => data.json())
      .then(function (weather) {
        console.log(weather);
        if (weather.cod === "404") {
          alert("City not found");
          return;
        }
        currentCity.innerHTML = "" + weather.name;
        
        var lat = weather.coord.lat;
        var lon = weather.coord.lon;
        
        //api call for the latitude and longitude
        var onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`;
        fetch(onecallURL)
          .then((data) => data.json())
          .then(function (onecallData) {
            console.log(onecallData);
            buildDashboard(onecallData);
          });
      });
  }
  
  function buildDashboard(data) {
    var currentDate = new Date(data.current.dt * 1000);
    console.log(currentDate);
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var currentTemperature = document.querySelector("#temp");
    var currentHumidity = document.querySelector("#humidity");
    var currentUvi = document.querySelector("#uvi");
    var searchBtn = document.querySelector("#searchBtn");
    var clearHistoryBtn = document.querySelector("#clearHistoryBtn");


    currentCity.innerHTML += " (" + month + "/" + day + "/" + year + ") ";
    currentTemperature.innerHTML =
      "Temperature: " + getFahrenheit(data.current.temp) + " F";
    currentHumidity.innerHTML = "Humidity: " + data.current.humidity + " %";
    currentUvi.innerHTML = "UV Index: " + data.current.uvi;
    var cityForecast = document.querySelector("#forecast");
    cityForecast.innerHTML = "";


    for (i = 0; i < 5; i++) {
      var forecastIndex = data.daily[i];
      console.log(forecastIndex);
      cityForecast.append(buildForecast(forecastIndex));
    }
  }
  
  function buildForecast(forecast) {
    // Container for the forecast
    var col = document.createElement("div");

    col.classList.add("col", "cards");
    var forecastContainer = document.createElement("div");
    forecastContainer.classList.add("big-primary", "rounded", "p-5");
  
    // Create forecast image
    var forecastImg = document.createElement("img");
    forecastImg.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`
    );
  
    // Format forecast Date
    var forecastDate = new Date(forecast.dt * 1000);
    var forecastDay = forecastDate.getDate();
    var forecastMonth = forecastDate.getMonth() + 1;
    var forecastYear = forecastDate.getFullYear();
    var forecastDateEl = document.createElement("h4");

    forecastDateEl.innerHTML =
      forecastMonth + "/" + forecastDay + "/" + forecastYear;
  
    // Forecast Temperature
    var forecastTemp = document.createElement("p");
    forecastTemp.innerHTML = "Temp: " + getFahrenheit(forecast.temp.day) + " F";
  
    // Forecast Humidity
    var forecastHumidity = document.createElement("p");
    forecastHumidity.innerHTML = "Humidity: " + forecast.humidity + "%";
  
    // Append to forecast Container
    forecastContainer.append(
      forecastDate,
      forecastImg,
      forecastTemp,
      forecastHumidity
    );
  
    // append forecast container to parent div
    col.append(forecastContainer);
  
    // Return formatted col div
    return col;
  }
  
  var weatherHistory = JSON.parse(localStorage.getItem("search")) || [];
  console.log(weatherHistory);
  renderSearchedCities();
  
  searchBtn.addEventListener("click", function (e) {
    var searchCity = inputEl.value;
    getWeather(searchCity);
    getRandomImage();
    weatherHistory.push(searchCity);
    renderSearchedCities();
    localStorage.setItem("search", JSON.stringify(weatherHistory));
  });
  
  clearHistoryBtn.addEventListener("click", function () {
    localStorage.clear();
    weatherHistory = [];
    searchedCities.innerHTML = "";
  });
  // Myrla.....
  