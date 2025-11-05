// Short Long Short

// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// Examples:

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('abcde', 'dfhgh'));    // "Strings must be different lengths"
console.log(shortLongShort('', 'xyz'));         // "xyz"

// input: 2 strings of different lengths
// output: short string, followed by long string, followed by short string

function shortLongShort(str1, str2) {
  if (str1.length === str2.length) throw new Error('Strings must be different lengths');
  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
}