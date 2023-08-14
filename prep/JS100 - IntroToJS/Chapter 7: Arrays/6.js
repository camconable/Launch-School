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