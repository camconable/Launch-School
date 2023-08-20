// Blank? Version 1

// Write a function that checks whether a string is empty or not. For example:

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

function isBlank(str) {
  if (str === '') {
    return true;
  } else {
    return false;
  }
}



//LS ANSWER:

// Solution

// function isBlank(string) {
//   return string.length === 0;
// }

// Discussion

// A string is empty if it does not contain any characters. The easiest way to check this is to look at the length of the string.