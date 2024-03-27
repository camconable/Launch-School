// Create a function that takes an array and a string as an arg


console.log(countEle(['name', 'year', 'age', 'name'], 'name')); // => 2
console.log(countEle([1,2,3,4,5,1,2,3,4], 2)); //=> 2
console.log(countEle([1,2,3,4,5,1,2,3,4], 6)); //=> 0

// input: array, element (presumably from array)
// output: number, of times element occurs in array, false otherwise

// using reduce: if elem equals curr, ++acc

function countEle(array, elem) {
  return array.reduce((acc, curr) => (curr === elem ? ++acc : acc), 0);
}