// Passcode

// We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
let string = '';

for (let i = 0; i < passcode.length; i += 1) {
  
  string = string.concat(passcode[i]);
  
  // concatenate for all except last one (elements 0 thru passcode.length - 1)
  if (i < passcode.length - 1) {
    string = string.concat('-');
  }
}

console.log(string);
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'





// LS ANSWER:

// Solution

// passcode.join('-'); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

// Discussion

// The Array.prototype.join() method easily allows us to join all elements of an array into a new string, with a custom separator.

// Your solution might also build the target string step by step, iterating over the passcode list like this:

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let joinedPasscode = '';

// for (let i = 0; i < passcode.length; i += 1) {
//   if (i > 0) {
//     joinedPasscode += '-';
//   }

//   joinedPasscode += passcode[i];
// }

// console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

// The main difference between both solutions is that Array.prototype.join() provides a higher level of abstraction: it hides the iteration and string building behind a simple method call. This makes it easier to see at one glance what the solution code does with passcode.


// Further Exploration

// If no separator argument is passed to join, the default separator is a comma:

// passcode.join(); // '11,jZ5,hQ3f*,8!7g3,p3Fs'

// How can you join all elements of an array with no separator character?

console.log(passcode.join(''));