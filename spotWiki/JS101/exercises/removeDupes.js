/* eslint-disable max-len */
// Create a function that takes an array as argument and returns  a new array with all the elements that appears more than once removed. For example:


console.log(removeDuplicate([1, 2, 3, 5, 2, 1, 5, 2 ])); //=> [1, 2, 3, 5];

// input: array
// output: new array that has elements that appear more than once REMOVED
// (repeating elements only appear once)

// loop through inputArray,
//   if element exists in tempArray
//     remove from inputArray
//   if element doesn't exist in tempArray
//     push element to tempArray
//     remove from inputArray

function removeDuplicate(inputArray) {
  // let tempArray = [];
  // for (let elem of inputArray) {
  //   if (!tempArray.includes(elem)) {
  //     tempArray.push(elem);
  //   }
  // }
  // console.log(tempArray);
  // return inputArray.reduce((acc, elem) => {
  //   if (!acc.includes(elem)) {
  //     acc.push(elem);
  //   }
  //   return acc;
  // }, []);

  return inputArray.reduce((acc, elem) => {
    return !acc.includes(elem) ? (acc.push(elem), acc) : acc;
  }, []);
}