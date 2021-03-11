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
