// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) {
      functionToRunWhenThingsAreDone(data)
    };
  })
};
const printCatBreed = breed => {
  console.log('Return value: ', breed )
}

const bombay = breedDetailsFromFile('Bombay', printCatBreed);
console.log('Return Value: ', bombay);