// Sum or Product of Consecutive Integers

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

let rlSync = require('readline-sync');

let integer = rlSync.question('Please enter an integer greater than 0: ');
let sumOrProduct = rlSync.question('Enter \"s\" to compute the sum, or \"p\" to compute the product. ');

while (!['s', 'p'].includes(sumOrProduct)) {
  sumOrProduct = rlSync.question('Enter \"s\" to compute the sum, or \"p\" to compute the product. ');
}

if (sumOrProduct === 's') {
  console.log(sum(integer));
} else if (sumOrProduct === 'p') {
  console.log(product(integer));
} else {
  console.log('error');
}

function sum(num) {
  let total = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    total += idx;
  }

  return total;
}

function product(num) {
  let total = 1;

  for (let idx = 1; idx <= num; idx += 1) {
    total *= idx;
  }

  return total;
}