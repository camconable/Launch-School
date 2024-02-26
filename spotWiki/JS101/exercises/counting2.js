/* eslint-disable max-lines-per-function */
// Create a function that takes a string as an argument and returns a number of words in that string

// For example:

// countWords('hello world'); // => 2

// input: string
// output: number (of words)

// function countWords(string) {
//   return string.split(' ').length;
// }


// // - **Explore more:**

// Create a function that takes a string as an argument and returns an object containing all of the words from the string and count occurrences of that word. For example:

countWords('Hello, hello world'); // => {'hello' : 2, 'world' : 1};

// input: string
// output: object with
//   keys being words
//   values being their number of occurrences

// define word: unique series of non spaced alphabetic characters

// how to check if alphabetic:
// if uppercase does not equal current character, then it is alphabetic

// pseudocode:
// break (split) string into array on spaces, result will be rawStringArray
// make sure string contains only alphabetical characters
//   loop through each element in rawStringArray
//     loop through each character in each element of rawStringArray
//     if current char does not equal it's uppercase form, then push char to elementString
//   push entire element of elementString to alphStringArray

// loop through alphStringArray
//     shift the first element and assign this as compareElem
//     initialize countArray to [1]
//   compare compareElem to the rest by looping through alphStringArray:
//     if compareElem matches current element in alphStringArray
//       if it matches, shift() then increment counter (at current index)
//     if compareElem doesn't match, then skip to next iteration


//   push element and count as an array to finalArray
//     finalArray after 1 iteration: [['hello', 2]]
// loop through finalArray, convert it's keys/values to finalObj
// return finalObj

function countWords(string) {
  let rawStringArray = string.toLowerCase().split(' ');
  let alphStringArray = [];

  for (let idx = 0; idx < rawStringArray.length; idx += 1) {
    let elementString = '';

    for (let foo = 0; foo < rawStringArray[idx].length; foo += 1) {
      let currentChar = rawStringArray[idx][foo];
      if (currentChar !== currentChar.toUpperCase()) {
        elementString += currentChar;
      }
    }
    alphStringArray.push(elementString);
  }
  console.log(alphStringArray);
  let compareArray = alphStringArray.map((elem) => elem);
  let numbersArray = [];
  for (let idx = 0; idx < alphStringArray.length; idx += 1) {
    let compareElem = compareArray.shift();
    for (let foo = 0; foo < alphStringArray.length; foo += 1) {
      if (compareElem === alphStringArray[idx][foo]) {
        numbersArray.push(1);
      }
    }
  }
  console.log(numbersArray);
}