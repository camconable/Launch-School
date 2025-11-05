// Odd Lists

// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// input: array of any size
// output: every other (odd) elements in the array => 1st, 3rd, 5th, etc
// odd elements will be even indexes
  // declare finalArray
  // loop through array
  // if index is even (index % 2 === 0), push element to finalArray
  // return finalArray

function oddities(inputArray) {
  return inputArray.filter((elem, idx) => idx % 2 === 0);
}