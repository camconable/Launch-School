/* eslint-disable max-len */
// Create a function that takes two strings as an argument and returns a boolean value, true if the first string contains the second one. For example:


hasString('abcd', 'd'); //true
// hasString('abcd', 'f'); //false
// hasString('abcd', 'cd'); //true

// input: two strings
// output: boolean, true if first string contains second one

// loop through string1
// if string2 is within string1, true
//   if first char of string2 is in string1,
//     get chars of string2 length, from string1, store in compareString
//       loop through string1 string2.length times, concat every elem into compareString
// if compareString === string2 return true

function hasString(string1, string2) {
  let compareString = '';
  for (let char of string1.split('')) {
   if (string2[0].includes(char)) {

   } 
  }
} 