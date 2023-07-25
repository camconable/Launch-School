// #5 Write a findIntegers function that takes an array
// argument and returns an array that contains only the
// integers from the input array. Use the filter method
// in your function.

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// let findIntegers = things.filter(function(stuff) {
//   if(Number.isInteger(stuff)) {
//     return stuff;
//   }
// })


// function findIntegers2(arr) {
//   return arr.filter(function(element) {
//     return Number.isInteger(element);
//   });
// }

// console.log(`findIntegers: ${findIntegers}`);
// let allIntegers = findIntegers2(things);
// console.log(`allIntegers array: ${allIntegers}`);

// ------------------------------------------------------
// ------------------------------------------------------

// #6 Use map and filter to first determine the lengths
// of all the elements in an array of string values, then
// discard the even values (keep the odd values).

// let arr1 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// 1) determine length of array elements

// let countArr = arr1.map(elem => {
//   return elem.length;
// })

// console.log(countArr);


// 2) discard the even values (keep the odd values)

// let oddElems = arr1.filter(function(value) {
//   return value.length % 2 === 1;
// })

// let oddElems = countArr.filter(elem => {
//   return elem % 2 === 1;
// })

// 3) put them together into a single function

// let arr1 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//   let countArr = arr1.map(elem => {
//     return elem.length;
//   })
//   let oddLengths = countArr.filter(elem => {
//     return elem % 2 === 1;
//   })
//   return oddLengths;
// }

// console.log(oddLengths(arr1));

// ------------------------------------------------------
// ------------------------------------------------------

// 7) Use reduce to compute the sum of the squares
// of all of the numbers in an array:

// Note that 83 is 3*3 + 5*5 + 7*7.

// let array = [3, 5, 7];

// function sumOfSquares(array) {
//   return array.reduce((accum, currentVal) => 
//     (accum + (currentVal * currentVal)), 0
//   )
// }

// console.log(sumOfSquares(array)); // => 83

// 8) This problem is more challenging than most in this 
// book. Don't worry if you can't solve it on your own.

// Write a function similar to the oddLengths function from
// Exercise 6, but don't use map or filter. Instead, try to
// use the reduce method.

// from above:
// first determine the lengths
// of all the elements in an array of string values, then
// discard the even values (keep the odd values).

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// 1) find string lengths using reduce. use an array 
// as the accumulator

// function oddLengths (str) {
//   return str.reduce((reducedArr, cV) => {
//     if (cV.length % 2 === 1) {
//       reducedArr.push(cV.length);
//     } 
//     return reducedArr;
//   }, []);
// } 


// console.log(oddLengths(arr)); // => [1, 5, 3]
// console.log(oddLengths(arr));

// 9) Without using a for, while, or do/while loop, write 
// some code that checks whether the number 3 appears inside
//  these arrays:
// Return true or false depending on each result.

// let numbers1 = [1, 5, 3, 7, 9, 3, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// function checkThree(arr) {
//   return arr.reduce((a, cV) => {
//     if (a === true) return a;
//     if (a === 3 || cV === 3) return true;
//     return false;
//   });
// }

// function checkThreeMap(arr) {
//   let containsThreeArr = arr.map(elem => {
//     return (elem === 3? true: false)
//   });
//   return containsThreeArr.includes(true);
// }


// console.log(checkThree(numbers1));

// console.log(checkThreeMap(numbers1));


// -----------------------------------------
// -----------------------------------------

// 10) Write some code to replace the value 6 in the following array
// with 606:
// You don't have to search the array. Just write an assignment that 
// replaces the 6.

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

// mutateSix(arr);
// console.log(`mutated array: ${mutateSix(arr)}`);