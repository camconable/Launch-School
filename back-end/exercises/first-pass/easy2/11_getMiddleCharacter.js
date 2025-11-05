
// Get Middle Character

// Write a function that takes a non-empty string argument
// and returns the middle character(s) of the string. If the
// string has an odd length, you should return exactly one
// character. If the string has an even length, you should
// return exactly two characters.

// Examples:

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// input: string
// if string length is odd (str.length % 2 === 1), return middle character
// middle character: str[Math.floor(str.length / 2)]
// if string length is even (str.length % 2 === 0), return middle pair
// middle pair: return str[(str.length / 2) - 1] and str[str.length / 2]

function centerOf(str) {
  if (str.length % 2 === 1) {
    return str[Math.floor(str.length / 2)];
  } else if (str.length % 2 === 0) {
    let finalStr = '';
    finalStr += str[(str.length / 2) - 1];
    finalStr += str[str.length / 2];
    return finalStr;
  }
  return 'error';
}