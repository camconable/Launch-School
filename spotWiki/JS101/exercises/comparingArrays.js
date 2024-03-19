/* eslint-disable max-len */
// - Create a function that takes two arrays as arguments and return a boolean value `true` if two arrays pointing to the same space in the memory and `false` otherwise. For example:


// let a = [1,2,3];
// let b = a;
// let c = [1,2,3];

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //false
// console.log(theSame(c,b)); //false

// input: two arrays
// output: boolean, true if arrays point to same space in memory
// point to same space in memory => (strictly equal each other)

// function theSame(arr1, arr2) {
//   return arr1 === arr2;
// }


// - Create a function that takes two arrays as arguments and return a boolean value `true` if two arrays have the same values (primitives) and `false` otherwise. For example:


// let a = [1,2,3];
// let b = a;
// let c = [1,2,3];
// let d = [1,2,3,b];

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //true
// console.log(theSame(c,b)); //true
// console.log(theSame(c,d)); //false

// input: two arrays
// output: boolean, true if both arrays have same primitive values

// array1 elements are in array2, order doesn't matter
// sort both arrays
// loop array1,
//   if elem not equal to elem in array2, return false
// otherwise return true

// function theSame(array1, array2) {
//   array2.sort();
//   for (let [idx, elem] of array1.sort().entries()) {
//     if (elem !== array2[idx]) return false;
//   }
//   return true;
// }


// ****************** NOT DONE YET ******************
// - Create a function that takes two arrays as arguments and return a boolean value `true` if those two arrays have the same values (primitives and objects). The same objects are objects that are pointing to the same place in the memory. For example:


let a = [1,2,3];
let b = [1,2,3];

let c = [a, b]
let d = [a, b]
let e = [[1,2,3], [1,2,3]]

theSame(c,d); //true
theSame(c,e); //false
theSame(d,e); //false


// input: two arrays
// output: boolean, true if both arrays have the same values (primitives and objects)
// same objects: objects pointing to the same space in memory


// strict equality for comparing objects

// first check if both arrays include objects
//   if only one includes objects, return false
//   if both have objects, compare them directly using ===
// if both have primitives, loop 

// ****************** NOT DONE YET ******************