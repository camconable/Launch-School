// 1) Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

// let rlSync = require('readline-sync');

// let age = Number(rlSync.question('How old are you? '));

// for (let i = 10; i <= 40; i += 10) {
//   console.log(`In ${i} years you will be ${age + i} years old.`);
// }

// 2) Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

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

// function factorial(n) {
//   let count = 1;
//   for (let i = n; i >= 1; i -= 1) {
//     count *= i;
//   }
//   return count;
// }

// console.log(factorial(4));


// 3) The following code causes an infinite loop (a loop that never stops iterating). Why?

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// the while loop condition reassigns 1 to the counter variable at the start of each iteration (line 3). counter is unable to increment to the point of meeting the loop's ending condition (line 7-9), and therefore loops forever.

// 4) Does the following code produce an error? Why or why not? What output does this code send to the console?

// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

// It does not produce an error, but since it has no ending condition to break out of the loop, it will loop forever.

// NOPE. All 3 components of a for loop are optional. In this case, the increment condition is in the loop body, which is perfectly acceptable since it does in fact increment i. This is what's logged to console:
// 1
// 2
// 3
// 4
// 5

// 5) The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;

// let result = randomNumberBetween(1, 6);
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while(result <= 2)

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// 6) Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

// Examples

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// f(0) = 0
// f(1) = 1
// for all n >= 2:
// f(n) = f(n-1) + f(n-2);

// function factorialR(n) {
//   if (n === 1) {
//     return 1;
//   } else if (n >= 2) {
//     return (n * factorialR(n-1));
//   } else {
//     console.log('error');
//   }
// }

// console.log(factorialR(1));
// console.log(factorialR(2));
// console.log(factorialR(3));
// console.log(factorialR(4));
// console.log(factorialR(5));
// console.log(factorialR(6));
// console.log(factorialR(7));
// console.log(factorialR(8));