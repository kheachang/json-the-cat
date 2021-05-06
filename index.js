// This file will be the one that users can run and provide the breed name to. 
// user runs index.js, breedFetcher.js makes the request throuh http and net to the cat api 

const fetchBreedDescription = require('./breedFetcher');

// takes in command line arg
const breed = process.argv[2];


fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
