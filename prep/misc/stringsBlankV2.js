// Blank? Version 2

// Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

function isBlank(str) {
  return /^\s*$/.test(str);
}


// LS ANSWER:

// function isBlank(string) {
//   return string.trim().length === 0;
// }

// Discussion

// The String.prototype.trim() method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.