// Create a function that takes an array and a string as an argument and counts the number of occurrences of the second argument, in the first argument

console.log(countElem(['name', 'year', 'age', 'name'], 'name')); // => 2
console.log(countElem(['name', 'year', 'age', 'name', 'name'], 'name')); // => 3
console.log(countElem(['fabio', 'year', 'age', 'test', 'boy'], 'name')); // => 0

// input: array, string
// output: number (of occurrences)

// loop through array
// if element matches, increment counter
// if element doesn't match, skip to next
// return counter

function countElem(array, string) {
  return array.reduce((acc, curr) => {
    if (curr === string) {
      acc += 1;
    }
    return acc;
  }, 0);
}