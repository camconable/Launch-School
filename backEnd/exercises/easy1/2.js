// log all odd numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line

for (let num = 1; num <= 99; num += 1) {
  // if i is odd (i % 2 === 1), log to console
  if (num % 2 === 1) {
    console.log(num);
  }
}

// FURTHER EXPLORATION:

// Repeat this exercise with a technique different from the one
// that you used, and different from the one provided. Also consider
// adding a way for the user to specify the limits of the
// odd numbers logged to the console.

let rlSync = require('readline-sync');
let max = Number(rlSync.question('What is the max value (inclusive) of odd numbers to log to console?\nPlease enter a non-negative integer: '));

let num2 = 1;
while (num2 <= max) {
  console.log(num2);
  num2 += 2;
}