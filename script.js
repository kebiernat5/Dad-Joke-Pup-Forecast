// fetch("https://icanhazdadjoke.com/")
//   .then(function (response) {
//     document.getElementById("dad");
//   })
//   .catch(function (err) {
//     // If an error occured, you will catch it here
//   });

fetch("https://icanhazdadjoke.com/", {
  headers: {
    'accept': "application/json",
  }
}).then((res) => res.json())
.then(data => displayData(data));

var mainContainer = document.getElementById("dad");

function displayData(data){
    console.log(data)
}