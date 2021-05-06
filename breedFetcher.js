const request = require("request");

// make function to take in parameters for command line
const fetchBreedDescriptions = (breed, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, function (error, response, body) {
    const data = JSON.parse(body);
    if (error) {
      // if there is an error in fetching the data, run this callback
      callback("Failed to get information ", error);
    }
    if (breed) {
      // if breed is found, console log the call back
      callback(data[0].description);
    } else {
      callback(`${breed} not found!`, null);
    }
  });
};
