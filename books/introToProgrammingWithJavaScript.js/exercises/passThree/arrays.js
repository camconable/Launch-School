/* eslint-disable max-len */
// // https://launchschool.com/books/javascript/read/arrays

// In the following code, what are the final length values for array1, array2, array3, array4, and array5?

// let array1 = [1, 2, undefined, 4];

// let array2 = [1];
// array2.length = 5;

// let array3 = [];
// array3[-1] = [1];

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3;

// let array5 = [];
// array5[100] = 3;

// Solution

// array1: 4
// array2: 5
// array3: 1 **WRONG** length is 0. index positions must be non negative integers starting at 0
// array4: 3
// array5: 101

// Log all of the even values from myArray to the console.

// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// Expected Output

// 6
// 4
// 2
// 4
// 16
// 0

// Solution

// function logEvenValues(array) {
//   for (let num of array) {
//     if (num % 2 === 0) console.log(num);
//   }
//   return array.filter((num) => num % 2 === 0);
// }
// logEvenValues(myArray);

// Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// Solution

// flatten array
//   loop through array
//     if elem is array, call function again
//     if elem is not array, concat to finalArray
// get even nums from flattenedArray using filter method

// function getEvenFromNested(arr) {
//   let flattenedArr = flattenArr(arr);

//   flattenedArr.forEach(num => {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// }

// function flattenArr(arr) {
//   return arr.reduce((acc, elem) => {
//     if (Array.isArray(elem)) {
//       return acc.concat(flattenArr(elem));
//     } else {
//       return acc.concat(elem);
//     }
//   }, []);
// }

// getEvenFromNested(myArray);

// Let's try another variation on the even-numbers theme.

// We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

// Example

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// Expected Output

// [
//   'odd', 'odd', 'even', 'odd',
//   'even', 'even', 'even', 'odd',
//   'odd', 'even', 'even',
// ]

// If you have trouble using map to accomplish this, try it using a regular for loop instead.
// Solution

// function evenOrOdd(arr) {
//   return arr.map((num) => (num % 2 === 0 ? 'even' : 'odd'));
// }

// console.log(evenOrOdd(myArray));

// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

// Example

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 

// You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.
// Solution

// input: array
// output: array, containing only integers from input array (use filter)

// function findIntegers(arr) {
//   return arr.filter((elem) => Number.isInteger(elem));
// }


// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]
// console.log(oddLengthsImproved(arr)); // => [1, 5, 3]

// Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.
// Solution

// determine element lengths using map
// discard even values using filter

// function oddLengths(arr) {
//   let elemLengths = arr.map((elem) => elem.length);
//   return elemLengths.filter((elem) => elem % 2 === 1);
// }

// function oddLengthsImproved(arr) {
//   return arr.reduce((acc, elem) => {
//     if (elem.length % 2 === 1) {
//       acc.push(elem.length);
//     }
//     return acc;
//   }, []);
// }

// Use reduce to compute the sum of the squares of all of the numbers in an array:

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

// Note that 83 is 3*3 + 5*5 + 7*7.
// Solution

// initialize acc to 0.
// add (plus) elem * elem to total

// function sumOfSquares(arr) {
//   return arr.reduce((acc, num) => {
//     acc += num * num;
//     return acc;
//   }, 0);
// }


// This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengthsReduce(arr)); // => [1, 5, 3]
// console.log(oddLengthsReduceSimplified(arr)); // => [1, 5, 3]

// Solution

// initialize acc to empty array
// get length of each element
// push element length to array if length is odd


// function oddLengthsReduce(arr) {
//   return arr.reduce((acc, str) => {
//     if (str.length % 2 === 1) {
//       acc.push(str.length);
//     }
//     return acc;
//   }, []);
// }

// function oddLengthsReduceSimplified(arr) {
//   return arr.reduce((acc, str) => (str.length % 2 === 1 ? acc.concat(str.length) : acc), []);
// }

// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(containsThree(numbers1));
// console.log(containsThree(numbers2));
// console.log(containsThree(numbers3));

// Return true or false depending on each result.
// Solution

// input: array

// function containsThree(arr) {
//   return arr.includes(3);
// }


// Write some code to replace the value 6 in the following array with 606:

// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];

// You don't have to search the array. Just write an assignment that replaces the 6.
// Solution

// console.log(arr);
// arr[1][3] = 606;
// console.log(arr);
