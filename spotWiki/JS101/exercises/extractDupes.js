/* eslint-disable max-len */
// Create a function that takes an array as an argument and return an array containing all the elements of argument array that appears more than once. For example:

// extractDup([1,2,3,4,1,2]); //[1,2];
console.log(extractDup2([1,2,3,4,1,2])); //[1,2];

// input: array
// output: array, containing only duplicate elements (elems appearing more than once)

// loop through array
//   get elem assign to compareElem
//   initialize count
//   loop through array with compareElem
//     if compareElem === current elem, increment count
//     end of loop: if compareElem exists more than once,
//       and does not already exist in finalArray, push to finalArray

// function extractDup(inputArray) {

//   let finalArray = [];
//   for (let num of inputArray) {
//     let compareElem = num;
//     let count = 0;

//     for (let idx = 0; idx < inputArray.length; idx += 1) {
//       if (compareElem === inputArray[idx]) {
//         count += 1;
//       }
//     }
//     if (count > 1 && !finalArray.includes(compareElem)) {
//       finalArray.push(compareElem);
//     }
//   }
//   console.log(finalArray);
//   return finalArray;
// }

function extractDup2(inputArray) {
  return inputArray.reduce((acc, num, idx, arr) => {
    let count = 0;

    for (let idx = 0; idx < arr.length; idx += 1) {
      if (num === arr[idx]) {
        count += 1;
      }
    }
    if (count > 1 && !acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);
}