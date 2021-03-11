
var pupKey = "https://random.dog/57213dc8-2617-44c9-b72d-a0fb330c194c.jpg";

function getRandomPup () {
    fetch(pupKey).then(function(response) {
        response.text().then(function(text) {
          poemDisplay.textContent = text;
        });
      });
}

console.log(fetch("https://icanhazdadjoke.com/")
  .then(function (response) {
    // The JSON data will arrive here
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  }));

  var mainContainer = document.getElementById("dad");
  var jsonStr = JSON.stringify(jsonVar);

