/* eslint-disable max-len */
// Create a function that takes a string as an argument and return a new, reversed string. For example:


console.log(reverseIt('abcdef')); //'fedcba'

// input: string
// output: string, reversed

// loop through string
//   push every element onto newString
// return newString

function reverseIt(string) {
  // return string.split('').reduce((acc, char, idx, arr) => {
  //   acc.unshift(char);
  //   return acc;
  // }, []).join('');

  return string.split('').reverse().join('');
}