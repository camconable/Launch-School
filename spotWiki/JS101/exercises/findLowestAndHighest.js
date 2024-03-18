/* eslint-disable max-len */
// - Create a function that takes an array with numbers and returns a number that is the lowest number in that array. For example:


// console.log(lowest([1,3,4,6,11,9,0,1])); //0
// console.log(lowest([5,6,3,4,8,1])); //1

// input: array of numbers
// output: number, lowest in the array

// after using sort function, return 1st element from array

// function lowest(arr) {
//   return arr.sort().shift();
// }


// - Create a function that takes an array with numbers and returns a number that is the highest number in that array. For example:


// console.log(highest([1,2,4,66,2224, 189, 0])); //2224
// console.log(highest([3,222,156,109, 999, 1])); //999


// manual method of comparing to each

// loop through array, if highestElem is less than than currElem, assign highestElem to currElem

// function highest(arr) {
//   return arr.reduce((acc, curr) => {
//     if (acc < curr) {
//       acc = curr;
//     }
//     return acc;
//   });
// }
