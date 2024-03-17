/* eslint-disable max-len */
// Create a function that takes two strings as an argument and returns a number representing an index number of the the character passed as a second argument in the first string argument. If the character doesn't exist in the string the function should return `false`. For example:


console.log(findIndex('Aabcdefgh ab A', 'a')); //1
console.log(findIndex('bcdefgBA', 'a')); //false

// input: string1, string2
// output: number, representing index of char passed as 2nd arg (string2), false otherwise

function findIndex(string1, string2) {
  return string1.includes(string2) ? string1.indexOf(string2) : 'false';
}