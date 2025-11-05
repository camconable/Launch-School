/* eslint-disable max-len */
// // https://launchschool.com/books/javascript/read/loops_iterating

// Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.
// Solution

// Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
// n! 	Expansion 	Result
// 1! 	1 	1
// 2! 	1 * 2 	2
// 3! 	1 * 2 * 3 	6
// 4! 	1 * 2 * 3 * 4 	24
// 5! 	1 * 2 * 3 * 4 * 5 	120

// You may assume that the argument is always a positive integer.

// Examples

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320


// Solution

// function factorial(num) {
//   let prod = 1;
//   while (num > 0) {
//     prod *= num;
//     num -= 1;
//   }
//   return prod;
// }

// The following code causes an infinite loop (a loop that never stops iterating). Why?

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// Solution

// The loop conditional contains an assignment operator within the loop condition, as opposed to an equality operator (either == or ===). This will reassign the iterator (counter) to 1 on every iteration, then the loop condition (which contains 1) will be truthy (evaluate as true), executing the loop block ad infinitum.

// Does the following code produce an error? Why or why not? What output does this code send to the console?

// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

// Solution

// This does not produce an error. It logs the following to the console, then the program terminates:

// 1
// 2
// 3
// 4
// 5

// From within console.log, the iterator (i) is reassigned (incremented) to a new value on each iteration. Although this looks confusing and is not common, it is still valid and technically a functioning loop. Usually the increment/decrement condition is contained within the parenthesis on the first line. On line 2, two things are happening: the loop iterator is incremented and it's new value is logged to the console; these two operations are condensed into a single line and performed on every loop iteration. On the 6th iteration, the loop condition (5 < 5) fails and the program breaks out of the loop.

// The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;
// tries += 1;

// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2);

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Solution

// Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

// Examples

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// if n <= 2, return n
// if n > 2, return n * f(n - 1)

// function factorial(num) {
//   return num <= 2 ? num : (num * factorial(num - 1));
// }