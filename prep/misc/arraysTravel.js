// Travel

// The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

// For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

// function contains(inputStr, arr) {
//   // make case insensitive by converting input to uppercase
//   let upperCaseInput = inputStr.toUpperCase();

//   // loop through array
//   for (let i = 0; i < arr.length; i += 1) {

//     //compare each string to input, convert to uppercase to make case insensitive
//     let upperCaseCompare = arr[i].toUpperCase();    
    
//     if (upperCaseInput === upperCaseCompare) {
//       return true;
//     } else {
//       continue;
//     }
//   }
//   return false;
// }




// LS ANSWER: 

// (Cam's note) - There's no need to handle case as that was not specified in the question

// Solution

// function contains(element, list) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === element) {
//       return true;
//     }
//   }

//   return false;
// }

// Or:

// function contains(element, list) {
//   return list.indexOf(element) >= 0;
// }

// Discussion

// Our first solution iterates over all elements in the input array. As soon as an element equals the input string, it returns true. If we have iterated over all elements without returning true, it means that there is no element that equals the input string and we return false.

// Our second solution leverages the built-in method Array.prototype.indexOf(), which returns the index of an element in the array, and returns -1 if the element is not in the array.

// Further Exploration

// Under the hood, indexOf is conceptually similar to our first solution. In particular it also uses strict equality === to compare the input element to all elements in the array.

// A consequence of using strict equality is that both solutions work only for primitive types like strings. For objects, the equality check would test whether the input object and the elements in the list are the same object in terms of reference, which might not be the case. For example:

// let lists = [[1, 2], [3], [4, 5, 6]];

// contains([3], lists); // false

// There is, in fact, no straightforward built-in way to test the value equality of two arbitrary objects in JavaScript. But there are libraries that provide this functionality, for example Lodash's isEqual method. Don't worry about this yet, though.