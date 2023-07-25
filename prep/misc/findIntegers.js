// #5 Write a findIntegers function that takes an array
// argument and returns an array that contains only the
// integers from the input array. Use the filter method
// in your function.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let findIntegers = things.filter(function(stuff) {
  if(Number.isInteger(stuff)) {
    return stuff;
  }
})


function findIntegers2(arr) {
  return arr.filter(function(element) {
    return Number.isInteger(element);
  });
}

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

let arr1 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let countArr = arr1.map(elem => {
    return elem.length;
  })
  let oddLengths = countArr.filter(elem => {
    return elem % 2 === 1;
  })
  return oddLengths;
}

console.log(oddLengths(arr1));