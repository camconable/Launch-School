// - Create a function that takes two strings as arguments and returns a boolean value `true` if a second argument (a character) exists in the first argument (longer string) and `false` otherwise. For example:


// console.log(findMe('abcdefghijk', 'a')); //true
// console.log(findMe('abcdefgh', 'z')); //false

// input: two strings
// output: boolean, true if 2nd arg exists in 1st arg

// function findMe(string1, string2) {
//   return string1.includes(string2);
// }


// - Create a function that takes two arguments: an array of different elements and a number. The function should return an index's number of that number in the array and `false` if the number doesn't exist in the array. For example:


// console.log(findMe([5, null, undefined, 0, '11', 11, {'11':11}, [11, '11']], 11));// 5
// console.log(findMe([5, null, undefined, 0, '11', {'11':11}, [11, '11']], 11)); //false

// input: array, element (as a number)
// output: index number if it exists OR false if # doesn't exist

// if array has element, return index number, if not return false

// function findMe(array, element) {
//   return array.includes(element) ? array.indexOf(element) : 'false';
// }

// *************************** NOT DONE YET***************************

// - Create a function that takes two arguments: an object containing several properties and an array and returns `true` if any of the object's values looks like the array passed as an argument. Note that it doesn't have to be the same array in terms of the place in the memory. They just have to have the same primitive values as arguments. Return `false` otherwise. For example:


findMe({'prop1': [1, '2'], 'prop2': 1, 'prop3': [1,2]}, [1, 2]); //true
findMe({'prop1': [1, '2'], 'prop2': 1, 'prop3': [2, 1]}); //false

// *************************** NOT DONE YET***************************

// input: object, array
// output: boolean, true if any obj properties equal the array contents

// loop through object, check if prop === array

function findMe(obj, array = []) {
  let bool = false;
  let arrayContents = array.join(',');
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      if (obj[prop].join(',') === arrayContents) bool = true;
    } else {
      if (String(obj[prop]) === arrayContents) bool = true;
    }
  }
  console.log(bool);
  return bool;
}

// *************************** NOT DONE YET***************************