// - Create a function that takes an array of objects as an argument and return sorted array in ascending order depending on sum of an array stored as a value of key `arr`. For example:


// console.log(sortArrOfObj([{arr : [1,2]}, {arr: [11]}, {arr: '1,2,3,0'}])); // [{arr : [1,2]}, {arr: 1,2,3,0}, {arr: [11]}];

// input: array of objects
// output: array of objects, sorted in asc order, based on sum of values
// stored in key 'arr'

// loop through array of objects,
// coerce all values stored in key 'arr' to array

// use sort as outer method and reduce method as its compareFn
// sort structure will be from a - b
// reduce method will access object's key's value array and add them
//   initialize acc to 0

// function sortArrOfObj(inputArr) {
//   for (let elem of inputArr) {
//     if (typeof elem['arr'] === 'string') {
//       elem['arr'] = elem['arr'].split(',').map((elem) => Number(elem));
//     }
//   }
//   return inputArr.sort((a, b) => {
//     return a['arr'].reduce((acc, curr) => acc + curr, 0) -
//       b['arr'].reduce((acc, curr) => acc + curr, 0);
//   });
// }


// - Create a function that takes an array of arrays as argument and returns a sorted array in ascending order depending on how many `undefined` exist in the array. For example:


console.log(sortUndefined([[11, undefined, undefined, null, 0], [NaN, {}, ''], [undefined]])); // [[NaN, {}, ''], [undefined], [11, undefined, undefined, null, 0] ]

// input: array of arrays (2d array)
// output: 2d array, sorted by how many 'undefined' exist, asc

// sort structure a - b
// count number of elements matching 'undefined' in inner array
//   if result of each reduce is undefined then add to count (accumulator)
//   reduce gets the total count of undefined
// sort method compares these undefined counts to determine sort order

// returning -1 will put a before b, returning 1 will put a after b,
// 0 keeps original order

function sortUndefined(arr) {
  return arr.sort((a, b) => {
    return a.reduce((acc, curr) => (curr === undefined ? ++acc : acc), 0) -
      b.reduce((acc, curr) => (curr === undefined ? ++acc : acc), 0);
  });
  // console.log(numberOccurrences);
}

