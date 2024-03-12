/* eslint-disable max-len */
// Create a function that takes a string as an argument and return a new string with all the letters upper-cased. For example:


// console.log(allUpper('abcd')); //'ABCD'

// input: string
// output: string, with letters uppercased

// function allUpper(string) {
//   return string.toUpperCase();
// }


// Create a function that takes a string as an argument and return a new string with every second letter changed to upper case. For example:


console.log(toUpper('abcdef')); //'aBcDeF'

// input: string
// output: string, every 2nd letter upper-cased

// loop through stringArray
// if even letter (idx % 2 === 0), uppercase letter

function toUpper(string) {
  // let stringArray = string.split('');
  // for (let idx = 0; idx < stringArray.length; idx += 1) {
  //   if (idx % 2 === 1) {
  //     stringArray[idx] = stringArray[idx].toUpperCase();
  //   }
  // }
  // return stringArray.join('');

  return string.split('').reduce((acc, elem, idx, arr) => {
    if (idx % 2 === 1) {
      arr[idx] = elem.toUpperCase();
    }
    return arr;
  }, []).join('');
}