/* eslint-disable max-len */
// - Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's value in ascending order. For example:

// console.log(sortObjVals([{a: 1}, {a: 0}, {a : 3}])); //=> [{a:0}, {a:1}, {a:3}];

// input: array of objects
// output: array of objects, sorted by value in asc order

// function sortObjVals(arr) {
//   return arr.sort((first, next) => first.a - next.a);
// }


// **************** INCOMPLETE ****************
// - Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's key in descending order. For example:


sortObjKeyDesc([{0: 1}, {3: 1}, {1: 1}]); //[{3:1}, {1:1}, {0:1}]

// input: array of objects
// output: array of objects, sorted by key in desc order

// get desc sorted indexes as an array
// return object with desc sorted keys
//   define empty obj
//   access value from each key


function sortObjKeyDesc(arr) {
  let descSortedKeys = arr.map((elem) => Number(Object.keys(elem))).sort((a, b) => b - a);

  console.log('Original Order', arr);
  console.log('Desired Order', arr[1], arr[2], arr[0]);

  console.log(descSortedKeys);

  console.log(Number(Object.keys(arr[1])));

  // iterate through descSortedKeys:
  //   return object from arr where descSortedKeys key equals current index
  let finalArray = [];
  for (let elem of descSortedKeys) {
    finalArray.push(arr.indexOf(elem))
  }
}

// **************** INCOMPLETE ****************