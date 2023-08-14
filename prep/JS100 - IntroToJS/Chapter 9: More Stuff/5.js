// 5) What does the following function do?

// function doSomething(string) {
//   return string.split(' ').reverse().map((value) => value.length);
// }

// let myResult = doSomething('This is the best day ever okay!!');
// console.log(myResult); // [6, 4, 3, 4, 3, 2, 4];


// first (.split) takes the string input and puts it into an array
// with the elements delimited by a space, reverse() then returns
// a reference to the mutated array (of the words in reverse order)
// then passes that to map(), which returns the lengths of the
// reversed strings into a new array. 

// LS answer: This code converts a string into an array of 
// words, reverses that array, and then returns a new array 
// that contains the lengths of the words. It assumes that a 
// single space character delimits the words in the original 
// string.

// Thus:

// console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]