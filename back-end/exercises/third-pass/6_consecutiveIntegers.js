/* eslint-disable max-len */
// Sum or Product of Consecutive Integers

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// input: integer greater than 0 (num)
// input: 's' or 'p'

// sum algo: loop from 1 through num, inclusive. 
// initialize count = index
// iteration: index + count

// product algo: loop from 1 through num, inclusive
// initialize count = index
// iteration: index * count

function getTotal(myNum, choice) {
  return choice === 's' ? computeSum(myNum) : computeProd(myNum);
}

function computeSum(myNum) {
  let total = 0;
  for (let idx = 1; idx <= myNum; idx += 1) {
    total += idx;
  }
  return total;
}

function computeProd(myNum) {
  let total = 0;
  for (let idx = 1; idx <= myNum; idx += 1) {
    total *= idx;
  }
  return total;
}

function buildResultMessage(n, total, choice) {
  const noun = choice === 's' ? 'sum' : 'product';
  return `The ${noun} of the integers between 1 and ${n} is ${total}.`;
}

function isValidPositiveInteger(num) {
  return !Number.isInteger(num) || num <= 0;
}

const rlSync = require('readline-sync');

let num;
do {
  num = Number(rlSync.question('Please enter an integer greater than 0: '));
} while (isValidPositiveInteger(num));

let choice;
do {
  choice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();
} while (!['s', 'p'].includes(choice));


console.log(buildResultMessage(num, getTotal(num, choice), choice));