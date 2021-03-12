// function to perform a get request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage()
{   
  // get the json from the server
  var json = httpGet('https://random.dog/doggos');
  console.log(json);
  // get the image object 
var image = document.querySelector('.puppy');

  // decode the json into an array
  var array = JSON.parse(json);
  console.log(array);
  
  // get the image url from the array
  var url = array.message;
  for (let index = 0; index < 200; index++) {
    image.innerHTML = `<img src="https://random.dog/${array[index]}">`;  
}
  
  // set the src of the image object
  image.src = url;
}
getRandomImage();





console.log(fetch("https://icanhazdadjoke.com/")
  .then(function (response) {
    // The JSON data will arrive here
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  }));

  var mainContainer = document.getElementById("dad");
  var jsonStr = JSON.stringify(jsonVar);

