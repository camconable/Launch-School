// - Create a function that takes an array as an argument and returns the same array with all elements sorted in alphabetical order. For example:

// console.log(sortAlph(['a', 'd', 'a', 'b'])); //=> ['a', 'a', 'b', 'd'];
// console.log(sortAlph(['banana', 'apple', 'pear', 'apple'])); //=> ['apple', 'apple', 'banana', 'pear']

// input: array
// output: array, sorted alphabetically

// function sortAlph(arr) {
//   return arr.sort((a, b) => (a > b ? 1 : -1));
// }


// - Create a function that takes an array as an argument and returns the same array with all elements sorted in descending order. For example:

// console.log(sortDesc([3,5,1,2,11,456])); //=> [456,11,5,3,2,1];

// input: array
// output: array, sorted in descending order

// sort array
// reverse

// function sortDesc(arr) {
//   let sortedArray = arr.sort((a, b) => (a > b ? 1 : -1));
//   return sortedArray.reverse();
// }



// - Create a function that takes an array as an argument and returns the same array with all elements sorted in ascending order. For example:


// console.log(sortNumAsc([3,5,1,2,11,456])); //=> [1,2,3,5,11,456];

// input: array
// output: array sorted in asc order

// function sortNumAsc(arr) {
//   return arr.sort((a, b) => a - b);
// }

// - Create a function that takes an array of strings as an argument and returns the same array with all elements sorted according to length of the string in ascending order. For example:


// console.log(sortStrLength(['o', 'hello', 'llo', 'ello','lo' ])); // => ['o', 'lo', 'llo', 'ello', 'hello']

// input: array of strings
// output: array of strings, sorted by string length in asc order

// function sortStrLength(arr) {
//   return arr.sort((a, b) => (a.length > b.length ? 1 : -1));
// }


// - Create a function that takes an array of strings as an argument and returns the same array with all elements sorted according to length of the string in descending order. For example:


// console.log(sortStrLengthDesc(['o', 'hello', 'llo', 'ello','lo' ])); //=> ['hello', 'ello', 'llo', 'lo', 'o']

// function sortStrLengthDesc(arr) {
//   return arr.sort((a, b) => a.length - b.length).reverse();
// }




// ****************INCOMPLETE****************
// - Create a function that takes an array of strings as an argument and returns the same array with all elements sorted according to length of the string in alphabetical order, case insensitive. For example:


sortAlphThenLength(['goo', 'A', 'aB', 'Ab', 'c', 'C']); // => ['A', 'aB', 'Ab', 'c', 'C', 'goo']

// input: array of strings
// output: array of strings,
//   case insensitively sorted alphabetically, then sorted by length

// break alph sorted array up into smaller arrays where
//   first idx are the same
// sort smaller arrays by length
// assemble main array


function sortAlphThenLength(arr) {
  let alphSortedArray = arr.sort((a, b) => (a > b ? 1 : -1));

  console.log(alphSortedArray);

}

// ****************INCOMPLETE****************