// Create a function that takes two arguments: starting number and end number and returns an array with numbers starting from `startNumber` and ending on `endNumber`. For example: 


console.log(generateArr(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]

// input: 2 numbers, startNum and endNum
// output: array of numbers from startNum to endNum


function generateArr(startNum, endNum) {
  let finalArr = [];
  while (startNum <= endNum) {
    finalArr.push(startNum);
    startNum += 1;
  }

  return finalArr;
}

