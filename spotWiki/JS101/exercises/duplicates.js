/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
// - Create a function that takes a string as an argument and returns an array containing all characters that appear in the strings more than once. For example:


// console.log(findDuplicates('kabcdeffghhijk')); //['k', 'f', 'h']


// outer loop
//   searchChar = first elem
//   inner loop
//     if searchChar === elem, increment foo
//     if (foo > 1 and finalArray doesn't include searchChar), push searchChar to finalArray

// function findDuplicates(string) {
//   return string.split('').reduce((acc, elem) => {
//     let searchChar = elem;
//     let foo = 0;
//     for (let char of string.split('')) {
//       if (searchChar === char) {
//         foo += 1;
//       }
//       if (foo > 1 && !acc.includes(searchChar)) {
//         acc.push(searchChar);
//       }
//     }
//     return acc;
//   }, []);
// }




// - Create a function that takes an array as an argument and returns another array containing all elements of the argument array that appears more than once, Note that the elements have to be the same elements (represented by the same place in the memory), for Example:


// console.log(findDuplicates([1, 1, [], [], {1:1}, {1:1}, 'hello', undefined])); //[1]
// console.log(findDuplicates([1, 2, 3, [], [], null])); //false

// input: array
// output: array, of elements that appear more than once

// outer loop of array elements
//   searchElem = elem
//   inner loop of array elements
//     if innerElem === outerElem and acc doesn't include outerElem
//       push to acc

// function findDuplicates(arr) {
//   let finalArray = arr.reduce((acc, searchElem) => {
//     let foo = 0;
//     for (let innerElem of arr) {
//       if (innerElem === searchElem) {
//         foo += 1;
//       }
//       if (foo > 1 && !acc.includes(searchElem)) {
//         acc.push(searchElem);
//       }
//     }
//     return acc;
//   }, []);
//   return finalArray.length > 0 ? finalArray : false;
// }


// - Create a function that takes an object as an argument and return an array containing elements that exist in the argument object more than once as values. Note that the elements have to be the same elements (represented by the same place in the memory). For example:


// console.log(findDuplicates({1:1, 2:2, 'a':1, 'b':2, 'c': '1', 'd':11})); //[1,2];
// console.log(findDuplicates({1:1, 2:'abcd', 3:undefined, 4:'1'})); //[];

// input: object
// output: array, of elements that exist in object ('s values) more than once


// convert object to array, get only object's values


// function findDuplicates(obj) {
//   let arr = Object.values(obj);
//   return arr.reduce((acc, outerElem) => {
//     let foo = 0;
//     for (let innerElem of arr) {
//       if (innerElem === outerElem) foo += 1;
//       if (foo > 1 && !acc.includes(outerElem)) {
//         acc.push(outerElem);
//       }
//     }
//     return acc;
//   }, []);
// }