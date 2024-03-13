/* eslint-disable max-len */
// - Create a function that takes three strings as arguments and return a string with all the characters that are the same as the second argument replaced with the thirds argument character. For example:

 
// console.log(replaceIt('abcdefgaa', 'a', '00')); // '00bcdefg0000'
// console.log(replaceIt('abcdefgaa', 'h', '00')); // 'abcdefgaa'


// input: 3 strings
// output: string being the result of replacement per above example

// check if string2 exists in string1
//   if it does, replace all occurrences of string2 in string1 with string3
//   if it does not, return string1

// function replaceIt(string1, string2, string3) {
//   return string1.includes(string2) ?
//     string1.replaceAll(string2, string3) :
//     string1;
// }

// - Create a function that takes three arguments: an array, a string, and a string and returns an array with all the elements that are the same as the second argument replaced with the third argument. For example:


console.log(replaceIt(['a', 'b', NaN, [], 'A', 'aa', 'a'], 'a', '00')); //['00', 'b', NaN, [], 'A', 'aa', '00']

// input: array, string1, string2
// output: array of replaced elements

// if string1 exists in array,
//   map method: if each elem === string1
//     return string1
// if it doesn't exist, return array

function replaceIt(arr, string1, string2) {
  if (arr.includes(string1)) {
    return arr.map((elem) => (elem === string1 ? string2 : elem));
  } else {
    return arr;
  }
}