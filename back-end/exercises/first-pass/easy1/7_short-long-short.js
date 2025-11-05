// Short Long Short

// Write a function that takes two strings as arguments, determines
// the length of the two strings, and then returns the result of
// concatenating the shorter string, the longer string, and the
// shorter string once again. You may assume that the strings
// are of different lengths.

// Examples:

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"


// PEDAC:

// Problem:

// inputs: 2 strings of different lengths

// outputs: return the result of concatenating the shorter string,
// longer string, and shorter string again

// Data Structure: arrays and variables

// Algorithm:

// assume other string is longer assign to variable

// define new string and concatenate short + long + short

// return new string

// Code

function shortLongShort(str1, str2) {
  // identify shorter length string assign to variable,
  let shortString = str1.length < str2.length ? str1 : str2;
  // identify longer length string assign to variable,
  let longString = str1.length > str2.length ? str1 : str2;
  // return concatenated string
  return shortString + longString + shortString;
}