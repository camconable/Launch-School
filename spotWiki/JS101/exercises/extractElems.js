/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
// - Create a function that takes a string and a number as arguments and return an array containing all the characters that appears in the string as many times as the second argument. For Example:


// extractChar('abcabcdefra', 2); // ['b', 'b', 'c', 'c'];
// extractChar('abcabcdefrac', 3); // ['a', 'a', 'a', 'c', 'c', 'c'];

// input: string, number
// output: array, containing all chars that appear as many times as second arg (chars can repeat)

// convert to inputArray
// loop through inputArray
// initialize count
//   in loop through inputArray
//     if char = innerChar, increment count
//   end of loop: if count === numTimes,
//     push char to finalArray (numTimes)

// function extractChar(str, numTimes) {
//   let arr = str.split('');
//   let finalArray = [];
//   for (let char of arr) {
//     let count = 0;
//     for (let idx = 0; idx < arr.length; idx += 1) {
//       if (char === arr[idx]) {
//         count += 1;
//       }
//     }
//     if (count === numTimes) {
//       finalArray.push(char);
//     }
//   }
//   return finalArray.sort();
// }


// - Create a function that takes an array and a number as arguments and return an array containing all the elements that appears in the array as many times as the second argument. For Example:


extractEl(['a', 1, 'A', 'a', 'a', '111', 1, 1], 3); // ['a', 'a', 'a', 1, 1, 1];

// input: array, number
// output: array, containing all elems that appear in array as many times as second argument

// outer loop through elems
// initialize count
// inner loop through elems, comparing each elem and incrementing count
//   if (char === arr[idx]), increment count
// end of inner loop: if count === numTimes,
//   push char to finalArray
// sort and return finalArray

function extractEl(arr, numTimes) {
  let finalArray = [];
  for (let char of arr) {
    let count = arr.reduce((acc, elem) => {
      return char === elem ? ++acc : acc;
    }, 0);
    if (count === numTimes) {
      finalArray.push(char);
    }
  }

  return finalArray;
}