// 1) What does this code log to the console? Why?

// let array1 = [1, 2, 3];
// let array2 = array1;
// array1[1] = 4;
// console.log(array2);

// Cam's answer: It will log [1, 4, 3] because on line 2,
// JavaScript copied the pointer, not the array (object)
// itself. line 3 is mutating the array. It is mutating 
// the object that array1 and array2 are pointing to. 
// Both variables are aliases of and pointing to the
// same object. 
// 

// LS answer: The code outputs:

// [ 1, 4, 3]

// This result demonstrates that array1 and array2 
// reference the same array: if we change an element using 
// array1, it also changes that element in array2. The
//  opposite is also true: if we change an element in 
//  array2, that also changes the element in array1.

// This code also demonstrates that assignment of an array 
// to another array doesn't create a new array, but
//  instead copies a reference from the original array
//   (array1 above) into the target array (array2).

// > array1[1] = 4
// = 4

// > array1
// = [ 1, 4, 3 ]

// > array2
// = [ 1, 4, 3 ]

//---------------------------------------------------

// What do the following error message and stack trace tell you?

// $ node exercise2.js
// /Users/wolfy/tmp/exercise2.js:4
//   console.log(greeting);
//               ^

// ReferenceError: greeting is not defined
//     at hello (/Users/wolfy/tmp/exercise2.js:4:15)
//     at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
//     at Module._compile (internal/modules/cjs/loader.js:721:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
//     at Module.load (internal/modules/cjs/loader.js:620:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:552:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
//     at executeUserCode (internal/bootstrap/node.js:342:17)
//     at startExecution (internal/bootstrap/node.js:276:5)


// Cam's answer: JavaScript raises a ReferenceError exception
// since the variable greeting does not exist. It detects
// the error in exercise2.js on line 4, column 15 in the
// hello function. We called hello from an anonymous 
// function at line 13 col 1; calling from the anonymous
// function simply means the hello function exists at the
// global level. the rest of the lines are likely irrelevant
// library files

// LS answer: An error occurred in the exercise2.js 
// program on line 4 of the program; a ^ points to where 
// JavaScript thinks the error is in the code: it's 
// pointing to the argument list for console.log.

// More specifically, line 6 in the output tells you that 
// a ReferenceError exception occurred and that the name 
// greeting isn't defined. Line 7 repeats some earlier 
// information: JavaScript detected the error at column 15 
// of line 4 of the program, but it also tells you that 
// the code is in the hello function. Line 8 tells you that
//  hello was called from line 13 of the program in an 
//  anonymous function, namely the global-level of the 
//  program.

// The rest of the output comes from running the code in 
// node and probably isn't useful to you as an application
//  programmer.

//---------------------------------------------------

// 3) Write some code to output the square root of 37.

// Cam's answer:
// console.log(Math.sqrt(37));

//---------------------------------------------------


// 4) Given a list of numbers, write some code to find
// and display the largest numeric value in the list.

// Cam's answer:

function highestNum(arr) {
  let maxNum = 0;
  for (let val of arr) {
    if (val > maxNum) {
      maxNum = val;
    }
  }
  return maxNum;
}

let highestNumber = highestNum([1, 33, -5, 33, 233, 48]);
console.log(highestNumber);

console.log(Math.max(2, 33, -5678, 38374, 0));


//---------------------------------------------------



// 5) What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

let myResult = doSomething('This is the best day ever okay!!');
console.log(myResult); // [6, 4, 3, 4, 3, 2, 4];


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


//---------------------------------------------------

// 6) Write a function that searches an array of strings for 
// every element that matches the regular expression given 
// by its argument. The function should return all matching 
// elements in an array.


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
