// - Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's value in ascending order. For example:

// console.log(sortObjVals([{a: 1}, {a: 0}, {a : 3}])); //=> [{a:0}, {a:1}, {a:3}];

// input: array of objects
// output: array of objects, sorted by value in asc order

// function sortObjVals(arr) {
//   return arr.sort((first, next) => first.a - next.a);
// }



// - Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's key in descending order. For example:


console.log(sortObjKeyDesc([{0: 1}, {3: 1}, {1: 1}])); //[{3:1}, {1:1}, {0:1}]

// input: array of objects
// output: array of objects, sorted by key in desc order

function sortObjKeyDesc(arr) {
  return arr.sort((first, next) => arr)
}