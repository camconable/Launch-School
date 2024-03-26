/* eslint-disable max-len */
// Create a function that takes a string as an argument and return an object with letters of the string and their occurrence as properties:

// eg: `{a:2, b: 3}`


countOccurrences('abbab');// => {a:2, b: 3}

// input: string
// output: object, letters as keys and # occurrences as properties

// get unique elements of array (filter)
// create object to store count of each uniq elements
// iterate over string and update count in the object

function countOccurrences(string) {
  let arr = string.split('');
  let unique = arr.filter((char, idx) => arr.indexOf(char) === idx);
  let countObj = unique.reduce((obj, char) => {
    obj[char] = 0;
    return obj;
  }, {});
  arr.forEach(char => {
    if (char in countObj) countObj[char]++;
  });
  return countObj;
}

// - **Explore more:**

// Create a function that takes the object that your function returned as an argument and returns a string in with all the letters that appears in the object, in alphabetical order appearing as many times as the value states. Order doesn't matter. For example:


console.log(getString({a:1, k:3, g:2})); // => 'aggkkk'

// input: object
// output: string with letters that appear in the object, appearing as many times as the value states

// iterate through object
// push key to array using a loop
//   loop condition: number of times equal to key's value
// sort array, convert to string, return

function getString(object) {
  let stringArray = [];
  for (let char in object) {
    for (let idx = 0; idx < object[char]; idx += 1) {
      stringArray.push(char);
    }
  }
  return String(stringArray.sort().join(''));
}