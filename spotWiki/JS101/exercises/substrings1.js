// - Create a function that takes a string as an argument and returns an array with all leading sub-strings of that string. For example:


// console.log(allLeadSubstr('abcd')); // => ['a', 'ab', 'abc', 'abcd'];

// input: string
// output: array of substrings, each element adding 1 more string

// convert string to array (split) origArray
// loop through each element of origArray
// produce new array loopArray
// on each iteration, concat element of current idx from origArray to loopElem,
//   and push loopElem to loopArray

// function allLeadSubstr(string) {
//   let arr = string.split('');
//   let loopElem = '';
//   let loopArray = [];
//   arr.forEach((elem) => {
//     loopElem += elem;
//     loopArray.push(loopElem);
//   });
//   return loopArray;
// }


// - Create a function that takes a string as an argument and returns an array with all leading sub-strings of that string that are 3 letters or longer. For example:


// console.log(allLeadSubstr('abcdef')); //=> ['abc', 'abcd', 'abce', 'abcdef'];

// input: string
// output: array of substrings, each substring 3 or more letters

// convert to array
// define substr
// (shift) first 3 chars to finalArray (as substr), remove from orig array
// loop through origArray length, keep idx 0
//   shift char to loopElem
//   push loopElem to finalArray
// return finalArray

// function allLeadSubstr(string) {
//   let origArray = string.split('');
//   let substr = '';
//   let substrLength = 3;

//   while (substr.length < substrLength) {
//     substr += origArray.shift();
//   }
//   let finalArray = [substr];

//   for (let idx = 0; idx < origArray.length; idx += 0) {
//     substr += origArray.shift();
//     finalArray.push(substr);
//   }
//   return finalArray;
// }


// - Create a function that takes a string as an argument and returns an array with all leading sub-strings of that string that are shorter than 5 letters, starting from the longest to the shortest. For example:


// console.log(allLeadSubstr('abcdefg')); //=> ['abcd', 'abc', 'ab', 'a'];
// console.log(allLeadSubstr('defgh')); //=> ['defg', 'def', 'de', 'd'];
// console.log(allLeadSubstr('abc')); //=> [];

// input: string
// output: array of substrings, its elements shorter than 5 chars, from longest to shortest

// convert string to origArray
// shift 4 elements as 1 string to substring
//   if less than 4 elements exist, return empty array
// push substring (to finalArray)
// convert substring to substrArray
// loop through length of substring
//   on each iteration: 
//     pop last element off substrArray
//     push substrArray (converted to string) to finalAray
//       finalArray.push(substrArray.split(''))

// function allLeadSubstr(string) {
//   let origArray = string.split('');
//   let minLength = 4;
//   if (origArray.length < minLength) return [];

//   let substr = '';
//   for (let idx = 0; idx < minLength; idx += 1) {
//     substr += origArray.shift();
//   }

//   let finalArray = substr.split(' ');
//   let finalArrayElems = substr.split('');

//   for (let idx = 1; idx < finalArrayElems.length; idx += 0) {
//     finalArrayElems.pop();
//     finalArray.push(finalArrayElems.join(''));
//   }

//   return finalArray;
// }