/* eslint-disable max-lines-per-function */
// Create a function that takes a string as an argument and returns an object containing strings segregated as follows: numbers, upper case letters, lower case letters, other symbols. For example:


console.log(segregate('aad559 $%,')); //{lettersUpper: '', lettersLower: 'aad', numbers: '559', other characters: '$%,' }
console.log(segregate('11AB')); //{lettersUpper: 'AB', lettersLower: '', numbers: '11', other characters: '' }

// input: string
// output: object containing strings, segregated per above example

// convert to array
// remove uppercase letters, put in separate array, convert to string
// remove lowercase letters, put in separate array, convert to string
// remove numbers, put in separate array, convert to string
// put rest of characters in separate array, convert to string
// put strings in object with appropriate keys and return object

function segregate(string) {
  let myArray = string.split('').sort((a, b) => a - b);
  let uppercaseArray = [];
  let lowercaseArray = [];
  let numbersArray = [];
  let miscArray = [];

  for (let elem of myArray) {
    if (elem >= 'A' && elem <= 'Z') {
      uppercaseArray.push(elem);
    } else if (elem >= 'a' && elem <= 'z') {
      lowercaseArray.push(elem);
    } else if (elem >= '0' && elem <= '9') {
      numbersArray.push(elem);
    } else {
      miscArray.push(elem);
    }
  }

  return {
    lettersUpper: uppercaseArray.join(''),
    lettersLower: lowercaseArray.join(''),
    numbers: numbersArray.join(''),
    otherCharacters: miscArray.join('')
  };
}
