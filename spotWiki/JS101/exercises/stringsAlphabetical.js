/* eslint-disable max-len */
// Create a function that takes a string as a an argument and returns a boolean, true if the string is in alphabetical order and false if it's not. For example:


console.log(isAlphabetical('abcdefg')); //true
console.log(isAlphabetical('abcdefghijklmnop')); //true

console.log(isAlphabetical('abcdefghijklmnpo')); //false
console.log(isAlphabetical('adegttksn')); //false

// input: string
// output: boolean, true if alphabetical
// alphabetical: string is in order, as defined by utf-8 character list


// loop through string, if current char is not one less than next char (utf-16), return false
//   in other words, if char code of current elem - char code of next elem is not equal to 1, return false
//   if next char is undefined (end of loop), break out of loop

function isAlphabetical(string) {
  let stringArray = string.split('');
  let finalBool = true;

  for (let [idx, elem] of stringArray.entries()) {
    if (stringArray[idx + 1] === undefined) {
      break;
    } else if ((elem.charCodeAt(0) - stringArray[idx + 1].charCodeAt(0)) !== -1) {
      finalBool = false;
    }
  }
  return finalBool;
}