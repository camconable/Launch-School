// Question 1

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// myWord.concat(' there.');

// console.log(myWord);

// Cam's answer: This will log 'Hello' to the console because
// primitives are immutable and can't be mutated. line 2
// will return a new string 'Hello there.', but the variable
// myWord won't be affected.

// Question 2

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// myWord.repeat(3);
// console.log(myWord);
// myWord.replace('H', 'J');
// console.log(myWord);
// myWord.toUpperCase();
// console.log(myWord);

// This will be logged to console:
// 'HelloHelloHello'
// 'Hello'
// 'Jello'
// 'Hello'
// 'HELLO'
// 'Hello'

// In each case, a new string is being modified and returned
// but myWord stays as 'Hello' the whole time

// Question 3

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords.push('Goodbye');

// console.log(myWords);

// ['Hello', 'Goodbye'] is logged to the console. Arrays are objects,
// which are mutable. The string 'Goodbye' is pushed onto the array
// The console logs the pointer location of the object to the console
// (pass by reference)


// Question 4

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords.concat(['Goodbye']);

// console.log(myWords);

// ['Hello'] is logged to the console. The concat() method of array
// instances merges two or more arrays and returns a new merged array
// This method does not change existing arrays. In the example line 2,
// ['Hello', 'Goodbye'] would be returned after execution,
// but myWords variable would not be mutated

// Question 5

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello'];
// myWords[0].toUpperCase();

// console.log(myWords);

// Much like question 4, .toUpperCase() returns a new string and does
// not mutate the variable it was assigned to, so ['Hello'] is logged
// to the console on line 4. On line 2, ['HELLO'] is returned, although
// this (mutated) value is not captured as part of a variable declaration,
// for example.

// Question 6

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// ['HELLO'] is logged to the console, since the array is mutated in line 2.
// The 0th index of myWords array is reassigned (mutated) to the return value
// of invoking .toUpperCase() on the string 'Hello'. This is acceptable because
// myWords is an object (array)


