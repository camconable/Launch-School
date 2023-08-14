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