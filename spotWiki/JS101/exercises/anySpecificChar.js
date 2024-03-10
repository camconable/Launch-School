/* eslint-disable max-len */
// Create a function that takes two strings as an argument and returns a boolean value, true if the first string contains the second one. For example:


console.log(hasString('abcd', 'd')); //true
console.log(hasString('abcd', 'f')); //false
console.log(hasString('abcd', 'bcd')); //true

// input: two strings
// output: boolean, true if first string contains second one

// loop through string1
// if first char of string2 is in string1,
//     get chars, from string1, store in compareString
//        concat elem starting at index where string2[0] is
// if compareString === string2 return true

function hasString(string1, string2) {
  let bool = false;
  let compareString = '';
  let string1Array = string1.split('');
  for (let char of string1Array) {
    if (string2[0].includes(char)) {
      for (let idx = string1Array.indexOf(char); idx < string1.length; idx += 1) {
        compareString += string1Array[idx];
      }
    }
  }
  if (compareString === string2) {
    bool = true;
  }
  return bool;
}