/* eslint-disable max-len */
// - Create a function that takes an multidimensional array as an argument and returns the same array sorted according to the sum of elements of inner arrays., in ascending order For example:


// sorting([[1,2,3], [0,1], [2,1]]); //=> [[0,1], [2,1], [1,2,3]]

// input: multidimensional array
// output: same array, sorted by sum of its inner array elements, asc

// calculate inner array sums as new array arraySums
// run sort function, sorting input array based on arraySums

// this function invokes the sort method on arr, passing in a compare function
// defining the sort order. the compare function calculates the total of the first
// element minus the total of the second element. the totals are retrieved using the reduce
// method invoked on a and b. if a is less than b, the compare function will return a
// negative number, and sort a before b. conversely, if a is greater than b, a
// positive number is returned and a is sorted after b. this sorts the totals in ascending order


// function sorting(arr) {
//   return arr.sort((a, b) => {
//     return a.reduce((acc, curr) => acc + curr, 0) -
//     b.reduce((acc, curr) => acc + curr, 0);
//   });
// }


// - Create a function that takes an multidimensional array as an argument and returns the same array sorted according to the product of elements of inner arrays in descending order. For example:


console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[1,2,3], [2,1], [0,1]]


// input: multidimensional (2d) array
// output: 2d array with products of inner array elements sorted in desc order

// similar to above, but use products instead of sum and sort desc
// use sort as outer method and reduce as inner method
// outer sort compareFn should have structure: (b - a)
// inner reduce method should use * instead of + in it's callback,
//   and initialize accumulator to 1 instead of 0

function sorting(arr) {
  return arr.sort((a, b) => {
    return b.reduce((acc, curr) => acc * curr, 1) -
      a.reduce((acc, curr) => acc * curr, 1);
  });
}