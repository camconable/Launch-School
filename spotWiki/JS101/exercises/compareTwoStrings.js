/* eslint-disable max-len */
// - Create a function that takes two strings as arguments and return a boolean value `true` if those two strings are the same and `false` otherwise. For example:


// console.log(theSame('abcdf', 'Abcdf'));  //false
// console.log(theSame('abcdf', 'abcdf'));  //true

// input: two strings
// output: boolean, true if both strings are the same

// function theSame(string1, string2) {
//   return string1 === string2;
// }


// - Create a function that takes two strings as arguments and return a boolean value `true` if those two strings have the same characters (ignoring the case), and `false` otherwise. For example:


console.log(theSame('abcdef', 'ABCDef')); //true
console.log(theSame('abcdef', 'ABCfdE')); //true
console.log(theSame('abcdef ', 'a b cdef')); //false


// input: two strings
// output: boolean, true if string have the same characters (case-insensitive)
// "have the same characters" => 1 for 1 of the same characters, order doesn't matter

// convert both strings to uppercase arrays
// loop through array1
//   if char in array1 is in array2
//     remove char from array2
// if array2 is not empty at end of loop,
//   return false, otherwise return true

function theSame(string1, string2) {
  let array1 = string1.toUpperCase().split('');
  let array2 = string2.toUpperCase().split('');

  for (let idx = 0; idx < array1.length; idx += 0) {
    if (array2.includes(array1[idx])) {
      array2.splice(array2.indexOf(array1[idx]), 1);
      array1.splice(array1.indexOf(array1[idx]), 1);
    }
    if (array2.length < 1) break;
  }
  return (array2.length < 1) && (array1.length < 1);
}