/* eslint-disable max-len */
// - Create a function that takes two strings as arguments. The second string represents a character that is supposed to be removed from the string. For example:


// console.log(removeIt('abcdefghd', 'd')); //'abcefgh'

// input: 2 strings
// output: string, with char removed as defined by second argument

// loop through every character
// if searchChar matches char, pop from string
// return string

// function removeIt(str, searchChar) {
//   return str.split('').reduce((acc, char, idx, arr) => {
//     if (char === searchChar) {
//       arr.splice(arr.indexOf(char), 1);
//       acc = arr;
//     }
//     return acc;
//   }, []).join('');
// }

// - Create a function that takes an array and a string as arguments and return an array with the second string removed as elements of the first array argument. For example:


console.log(removeIt(['a', 0, undefined, 'aa', 'a', 'A', []], 'a')); //[ 0, undefined, 'aa', 'A', []]

// input: array, string
// output: array, with elements removed as defined by second argument

// loop through array
//   if elem !== searchElem, push to new array
// return new array

function removeIt(array, searchElem) {

  return array.reduce((acc, elem, idx, arr) => {
    if (elem !== searchElem) {
      acc.push(elem);
    }
    return acc;
  }, []);
}