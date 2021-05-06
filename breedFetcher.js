const request = require("request");

// takes in command line arg
const breed = process.argv[2];
// url from the thecatapi 
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

// node request package to make http calls
// consists of the url and a function 
request(url, function(error, response, body){
  // if an error occurs, print this message
  if (error) {
    return console.log("Failed to request details: ", error);
  }
  // turns string into object
  const data = JSON.parse(body);

  // retrieves the description from the data object 
  if (!data) {
    console.log(data[0].description);
    // if the breed does not exist in api 
  } else {
    console.log(`Failed to find breed ${breed}`);
  }
});

