// - Create a function that takes a string as an argument and return a boolean, true if the string contains only upper case letters and false otherwise. For example:

// console.log(hasUpperC('OOPDDBW')); //true
// console.log(hasUpperC('dujjJJD')); //false

// input: string
// output: boolean, true if string has ONLY uppercase letters

// initialize bool to true
// convert string to array and loop through array
// if char !== char.toUpperCase return false
// otherwise return true

// function hasUpperC(string) {
//   let bool = true;
//   for (let char of string.split('')) {
//     if (char !== char.toUpperCase()) {
//       bool = false;
//     }
//   }
//   return bool;
// }

// - Create a function that takes a string as an argument and return a boolean, true if the string contains only lower case letters and false otherwise. For example:

console.log(hasLowerC('opddghrr')); //true
console.log(hasLowerC('dujjJJDdd')); //false

// input: string
// output: boolean, true if string has ONLY lowercase

// check if char equals itself lowercased, if it doesn't return false

function hasLowerC(string) {
  let bool = true;
  for (let char of string.split('')) {
    if (char !== char.toLowerCase()) {
      bool = false;
    }
  }
  return bool;
}