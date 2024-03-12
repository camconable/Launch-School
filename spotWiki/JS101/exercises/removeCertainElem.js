/* eslint-disable max-len */
// Create a function that takes two arguments: an array with elements and another element, which can be any primitive data type, and return the same array with the second argument of the function, removed from that array. For example:


let arr = [1,2,3];
let arr3 = removeEl(arr, 2); //[1, 3]
console.log(arr === arr3); //true

console.log(`arr: ${arr}`); //[1, 3]
console.log(`arr3: ${arr3}`); //[1, 3]

// input: inputArr, inputElem
// output: array, with the second argument from function removed from array
// removeEl is destructive; it removes the element and returns the reference to the mutated array

// splice inputElem from inputArr
//   inputArr.splice(inputArr.indexOf(inputElem), 1)
// return inputArr

function removeEl(inputArr, inputElem) {
  inputArr.splice(inputArr.indexOf(inputElem), 1);
  return inputArr;
}