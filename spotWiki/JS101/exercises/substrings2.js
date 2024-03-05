/* eslint-disable max-len */
// - Create a function that takes a string as an argument and returns an array with all the sub-string of given string. For example:


// console.log(allSubstr('abcd')); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']

// input: string
// output: arrays of substrings, 'counting up', removing first element, counting up, etc (see example)

// convert string to stringArray
// loop this while stringArray > 0
// loop 4 times, 3 times, 2 times, once
// define stringElement
// loop stringArray, 
//   concat current element to stringElement from stringArray
//   push stringElement to finalArray
// end of stringArray, shift first element, repeat loop

// function allSubstr(string) {
//   let finalArray = [];
//   let stringArray = string.split('');
//   while (stringArray.length > 0) {
//     let stringElement = '';
//     for (let idx = 0; idx < stringArray.length; idx += 1) {
//       stringElement += stringArray[idx];
//       finalArray.push(stringElement);
//     }
//     stringArray.shift();
//   }
//   return finalArray;
// }


// - Create a function that takes a string as an argument and returns an array with all the sub-string of given string that are longer than 1 letter. For example:


// allSubstr('abcd');//=> ['ab', 'abc', 'abcd', 'bc', 'bcd', 'cd'];

// input: string
// output: array of substrings (longer than 1 letter), counting up, removing first char, etc.

// initialize finalArray
// get stringArray (split)
// loop through stringArray while length > 0
// define stringElement to empty string
// loop through stringArray
//   concat stringArray first elem to stringElement
//   if stringElement length > 1,
//     push stringElement to finalArray
// end of inner loop: shift stringArray

// function allSubstr(string) {
//   let finalArray = [];
//   let stringArray = string.split('');

//   while (stringArray.length > 0) {
//     let stringElement = '';
//     for (let idx = 0; idx < stringArray.length; idx += 1) {
//       stringElement += stringArray[idx];
//       if (stringElement.length > 1) {
//         finalArray.push(stringElement);
//       }
//     }
//     stringArray.shift();
//   }

//   return finalArray;
// }


// - Create a function that takes a string as an argument and returns an array with all the sub-string of given string that are exactly 3 letters long. For example:


// allSubstr('abcd'); // => ['abc', 'bcd'];

// input: string
// output: array of substrings, counting up, exactly 3 chars long

// initialize finalArray
// coerce string to array (split)
// loop through stringArray while length > 0
// initialize buildString
// loop through inner elements while stringArray length > 0
//   concat current element to buildString
//   if buildString length === 3,
//     push buildString to finalArray
// end of loop: shift stringArray

// function allSubstr(string) {
//   let finalArray = [];
//   let stringArray = string.split('');

//   while (stringArray.length > 0) {
//     let buildString = '';
//     stringArray.forEach((elem) => {
//       buildString += elem;
//       if (buildString.length === 3) finalArray.push(buildString);
//     });
//     stringArray.shift();
//   }
//   return finalArray;
// }