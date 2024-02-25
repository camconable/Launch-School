// Create a function that takes a string as an argument and return an object with letters of the string and their occurrence as properties:

// eg: `{a:2, b: 3}`

countOccurrences('abbab'); // => {a:2, b: 3}

// lettersArray = ['a', 'b'];
// numbersArray = [2, 3];

// input: single string, may include spaces
// output: 1 object, with the letters as the keys and
// the number of occurrences as their values

// pseudocode: 
// use 2 arrays: 1 for letters, 1 for their counters (order matters)

// loop through string input
// if current char is not in lettersArray,
//   push current char to lettersArray,
//   push 1 to numbersArray (as a new entry, do not increment)
// else if current char is in lettersArray,
//   increment numbersArray, as in,
//     get index of matching char of lettersArray, and
//     increment corresponding number +1 in numbersArray

//  build object from both arrays to create keys and values
// loop through length of lettersArray,
//   adding each as a key to the object (from lettersArray)
//   adding each as a value to the key (from numbersArray)

// return object

function countOccurrences(string) {
  let finalObj = {};
  let lettersArray = [];
  let numbersArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    if (!lettersArray.includes(string[idx])) {
      lettersArray.push(string[idx]);
      numbersArray.push(1);
    } else if (lettersArray.includes(string[idx])) {
      let matchingCharIdx = lettersArray.indexOf(string[idx]);
      numbersArray[matchingCharIdx] += 1;
    }
  }

  for (let idx = 0; idx < lettersArray.length; idx += 1) {
    finalObj[lettersArray[idx]] = numbersArray[idx];
  }

  return finalObj;
}