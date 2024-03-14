/* eslint-disable max-len */
// Create a function that takes a two-dimensional array and transforms it into a one-dimensional array. For example:


console.log(transformIt([[1], [2], [3]])); // [1,2,3]

// input: 2d array
// output: 1d array ("flattened" from input array)

// loop through outer array
//   loop through inner array
//   push each element to finalArray
// return finalArray

function transformIt(array) {
  let finalArray = [];
  for (let elem of array) {
    for (let idx = 0; idx < elem.length; idx += 1) {
      finalArray.push(elem[idx]);
    }
  }
  return finalArray;
}