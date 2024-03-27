/* eslint-disable max-len */
// Create a function that takes a string a s an argument and returns a number of words in that string

// For example:


// console.log(countWords('hello world')); // => 2

// input: string
// output: number, of words in given string

function countWords(string) {
  // return string.split(' ').length;
  return string.split(' ').reduce((acc) => ++acc, 0);
}



// - **Explore more:**

// Create a function that takes a string as an argument and returns an object containing all of the words from the string and count occurrences of that word. For example:


countWords('Hello, hello world'); // => {'hello' : 2, 'world' : 1};


// input: string
// output: object, keys are words from string, values are # of occurrences

// convert to array, 
// remove punctuation, convert to lowercase, split on spaces
// convert to object, with keys being words, initialize values to 0
// loop through object, updating count for each word matching key

function countWords(string) {
  let cleanedArr = string.split('').filter((char) => ![',', '.', "'"].includes(char)).join('').toLowerCase().split(' ');
  
  let countObj = cleanedArr.reduce((obj, word) => {
    obj[word] = 0;
    return obj;
  }, {});

  cleanedArr.forEach(word => {
    if (word in countObj) {
      countObj[word] += 1;
    }
  });
  console.log(countObj);
  return countObj;
}









