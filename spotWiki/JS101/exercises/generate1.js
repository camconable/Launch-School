// from: https://fine-ocean-68c.notion.site/Simple-coding-exercises-21ed053e840f44cfb721083afbbc9848

// Generate an array of numbers from startNum to endNum

// Create a function that takes two arguments: starting number and end number and returns an array with numbers starting from `startNumber` and ending on `endNumber`. For example: 

generateArr(3, 10); // [3, 4, 5, 6, 7, 8, 9, 10]

// input: 2 numbers (start and end numbers), assume first is lower than second
// output: array with start number, all middle numbers, and end number

// pseudocode:
// declare empty array
// loop from startNum to endNum, inclusive
// push current element to array
// return array

function generateArr(startNum, endNum) {
  let array = [];

  for (let idx = startNum; idx <= endNum; idx += 1) {
    array.push(idx);
  }

  return array;
}