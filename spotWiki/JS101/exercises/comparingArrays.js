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


// - Create a function that takes two arrays as arguments and return a boolean value `true` if those two arrays have the same values (primitives and objects). The same objects are objects that are pointing to the same place in the memory. For example:


let a = [1,2,3];
let b = [1,2,3];

let c = [a, b];
let d = [a, b];
let e = [[1,2,3], [1,2,3]];

console.log(theSame(c,d)); //true
console.log(theSame(c,e)); //false
console.log(theSame(d,e)); //false


// input: two arrays
// output: boolean, true if both arrays have the same values (primitives and objects)
// same objects: objects pointing to the same space in memory

// check if arrays have same primitives
//   sort arrays, flatten, and loop thru and compare each

// check if arrays have same objects:
//   arr1[0] === arr2[0] (loop thru elems and compare)

function theSame(arr1, arr2) {
  // This recursive flattenArray function checks if the current value is an array. If so, it calls itself with that array to flatten it, and concatenates the result to the accumulator. Otherwise, it just concatenates the value.

  const flattenArray = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);

  let flatAndSortedArr1 = flattenArray(arr1).sort();
  let flatAndSortedArr2 = flattenArray(arr2).sort();

  for (let [idx, elem] of flatAndSortedArr1.entries()) {
    if (elem !== flatAndSortedArr2[idx]) return false;
  }

  for (let idx = 0; idx < arr1.length; idx += 1) {
    if (arr1[idx] !== arr2[idx]) return false;
  }

  return true;
}

