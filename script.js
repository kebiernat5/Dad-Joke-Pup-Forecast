fetch("https://icanhazdadjoke.com/")
  .then(function (response) {
    // The JSON data will arrive here
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  });

  var mainContainer = document.getElementById("dad");
  var jsonStr = JSON.stringify(jsonVar);