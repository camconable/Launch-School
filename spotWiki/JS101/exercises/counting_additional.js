/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// Additional Exercises (Counting)

// count how many uppercase letters in a string
countUpperCase('Tis the Season to be JOLLY. BE JOLLY NOW') // => 17

// take out non-alphabetic chars
//   use filter with this conditional: (lowercase char !== uppercase char)
// count and return only uppercase chars
//   use reduce with this conditional: (char === uppercase char)

function countUpperCase(inputString) {
  let onlyLettersArray = inputString.split('').filter((char) => char.toLowerCase() !== char.toUpperCase());

  return onlyLettersArray.reduce((acc, char) => {
    return char === char.toUpperCase() ? acc + 1 : acc;
  }, 0);
}


// count how many numbers in a string
countNumbers('T1s the S3ason to be J0lly.'); // => 3

// take out non-numeric characters (alphabetic, punctuation)
// use filter with this condition: Number.isInteger(Number(char))
// remove spaces
//   use filter with this condition: char.toUpperCase !== char.toLowerCase
// return remaining string length

function countNumbers(string) {
  return string.split('').filter((char) => Number.isInteger(Number(char)) && char !== ' ').length;
}


// count how many of each characters in a string

// console.log(countEachChar('hello There john'));
// => {h: 3, e: 3, l: 2, o: 2, T: 1, r: 1, j: 1, n: 1}

// input: string
// output: object. keys are chars, values are number of occurrences

// remove non-alphabetic chars from string (nums, punc)
// array to store unique chars (order matters)
//   loop through string
//   shift char to charArray
//   initialize count
//   loop through rest of string
//     compare char to every other char
//     on match increment count, splice, idx -= 1
//     at end of loop: push count to numArray
//   end of outer loop: push char to charArray

// loop through both arrays, assemble object

// function countEachChar(stringInput) {
//   let cleanedArray = stringInput.split('').filter((char) => char.toLowerCase() !== char.toUpperCase() && char !== ' ');

//   let charArray = [];
//   let numArray = [];
//   for (let idx = 0; idx < cleanedArray.length; idx += 0) {
//     let comparChar = cleanedArray.shift();
//     let count = 1;
//     for (let foo = 0; foo < cleanedArray.length; foo += 1) {
//       if (comparChar === cleanedArray[foo]) {
//         count += 1;
//         cleanedArray.splice(cleanedArray.indexOf(cleanedArray[foo]), 1);
//         foo -= 1;
//       }
//     }
//     numArray.push(count);
//     charArray.push(comparChar);
//   }

//   const obj = {};

//   charArray.forEach((key, val) => {
//     obj[key] = numArray[val];
//   });

//   return obj;
// }


// how many words in a string

// console.log(howManyWords('hello there nancy how r u')); // => 6

// input: string
// output: number of words
// a word is 1 or many consecutive letters

// input: string
// output: number of words

// convert to array, split on spaces, count number of elements

// function howManyWords(stringInput) {
//   return stringInput.split(' ').length;
// }


// how many , in a string

// console.log(howManyCommas('hello, john, my name is: cam. goodbye, cam.')); // => 3

// input: string
// output: number of commas

// use reduce, increment count when char === ','

// function howManyCommas(stringInput) {
//   return stringInput.split('').reduce((count, char) => {
//     return char === ',' ? count + 1 : count + 0;
//   }, 0);
// }



// how many sub-strings 'hel' in a string

// console.log(howManySubstrings('hello there, i need help with my helicopter', 'hel')); // => 3

// input: string, substring (search string)
// output: number of occurrences of provided search string (substring)

// use loop:
//   while string includes substring,
//     remove the substring from main string,
//       splice() or str.replace(this, that)
//     increment count
// repeat using .includes until false
// return count

// function howManySubstrings(string, searchString) {
//   let count = 0;

//   while (string.includes(searchString)) {
//     count += 1;
//     string = string.slice(string.indexOf(searchString) + searchString.length, string.length);
//   }

//   return count;
// }




// how many 'car' in an array

// how many different types of car in an array and how many of each type:
console.log(numDiffCars(['Lambo', 'Tesla', 'Mercedes', 'Mercedes', 'Fiat', 'Lambo', 'Lambo'])); // => 4

// input: array of strings
// output: number of different types of elements

// sort array
// remove duplicates
//   if a[0] === a[1], remove a[1], decrement idx
//   if a[0] !== a[1], continue to a[1]
// count array length

function numDiffCars(array) {
  let sortedArr = array.sort();

  for (let idx = 0; idx < sortedArr.length; idx += 1) {
    if (sortedArr[idx] === sortedArr[idx + 1]) {
      sortedArr.splice(sortedArr.indexOf(sortedArr[idx]), 1);
      idx -= 1;
    }
  }

  return sortedArr.length;
}
