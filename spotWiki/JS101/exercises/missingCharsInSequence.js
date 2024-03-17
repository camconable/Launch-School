/* eslint-disable max-len */
// Create a function that takes an array of numbers as an argument and returns a number that is missing in the specific sequence. Return `false` if there is no missing elements.

// - Specific range:


// console.log(findMissing([0,1,2,3,5,6,7])); //4
// console.log(findMissing([100, 101, 102, 103, 104, 106, 107])); //105
// console.log(findMissing([34, 35, 36, 37, 38, 39])); //false

// input: array of numbers
// output: number missing the sequence, 'false' if no missing elements

// loop through elements
// initialize counter
// if counter !== elem return counter
// at end of loop, return false

// function findMissing(array) {
//   let counter = array[0];
//   for (let elem of array) {
//     if (counter !== elem) return counter;
//     counter += 1;
//   }
//   return false;
// }

// - prime numbers sequence:


// console.log(findMissingPrime([2, 3, 5, 11, 13, 17, 19, 23]));  //7
// findMissingPrime([23, 29, 31, 41, 43, 47, 53, 59, 61]); //37
// findMissingPrime([53, 59, 61, 67, 71, 73, 79, 83]); //false

// loop through elements from array[0] to end of array, including ALL in between elements
//   if elem isPrime and not in array, return elem
// at end of loop return false

// function findMissingPrime(array) {
//   for (let idx = 0; idx < array[array.length - 1]; idx += 1) {
//     if (isPrime(idx) && !(array.includes(idx))) {
//       return idx;
//     }
//   }
//   return false;
// }

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (let idx = 2; idx <= Math.sqrt(num); idx += 1) {
//     if (num % idx === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// - fibonacci sequence: * extra excercise


console.log(findMissingFibo([1, 1, 2, 3, 8, 13, 21, 34, 55])); //5
console.log(findMissingFibo([8, 13, 21, 34, 55])); //false

// generate array of fibonacci sequence, starting from 1 through number of highest (last) element in input array
// in fibonacciArray, remove elements less than first index of inputArray
//   loop fibonacciArray, if elem < array[0]: splice element
// loop through fibonacciArray,
//   if elem is not in inputArray, return elem
// otherwise return false

function findMissingFibo(array) {
  let max = findFibIdx(array[array.length - 1]);
  let fibonacciArray = [];
  for (let idx = 1; idx <= max; idx += 1) {
    fibonacciArray.push(fibonacci(idx));
  }
  for (let idx = 0; idx < fibonacciArray.length; idx += 0) {
    if (fibonacciArray[idx] < array[0]) {
      fibonacciArray.shift();
    } else {
      break;
    }
  }
  for (let elem of fibonacciArray) {
    if (!array.includes(elem)) return elem;
  }
  return false;
}

function findFibIdx(num) {
  if (num === 0) return 0;

  let foo = 0;
  let qux = 1;
  let idx = 1;

  while (qux < num) {
    [foo, qux] = [qux, foo + qux];
    idx += 1;
  }

  if (qux === num) return idx;

  return -1;
}

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
