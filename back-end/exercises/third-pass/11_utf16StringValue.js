/* eslint-disable max-len */
// UTF-16 String Value

// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

// Examples:

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.

// input: 1 string
// loop through string
// initialize sum
// get utf value of every character, add to sum
// return sum

function utf16Value(inputStr) {
  // let sum = 0;
  // let idx = 0;
  // while (idx < inputStr.length) {
  //   sum += inputStr.charCodeAt(idx);
  //   idx += 1;
  // }
  // return sum;
  return inputStr.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}