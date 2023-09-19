
// Sum or Product of Consecutive Integers

// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.


// BEGIN PSEUDOCODE

function computeSum(input) {
  // if input is array, return reduced array
  if (typeof input === 'object') {
    return input.reduce((a, cV) => a + cV, 0);
  }
  // otherwise, assume input is a single number and proceed

  // set count to 0
  let countSum = 0;
  // loop through all numbers starting at 1 ending at input, inclusive
  for (let num = 1; num <= input; num += 1) {
    // add i to count
    countSum += num;
  }
  return countSum;
}

function computeProd(input) {
  // if input is array, return reduced array
  if (typeof input === 'object') {
    return input.reduce((a, cV) => a * cV, 1);
  }
  // otherwise, assume input is a single number and proceed

  // due to multiplication, count needs to start at 1
  let countProd = 1;
  // loop through all numbers starting at 1 ending at input, inclusive
  for (let num = 1; num <= input; num += 1) {
    // multiply count with i
    countProd *= num;
  }
  return countProd;
}

// ask for input. input is integer greater than 0
let rlSync = require('readline-sync');
let input = Number(rlSync.question('Please enter an integer greater than 0: '));

// ask if sum or product
let operation = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `).toLowerCase();

// if operation is not 's' AND not 'p', ask for input again
while (operation !== 's' && operation !== 'p') {
  console.log(`Invalid Operation`);
  operation = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `).toLowerCase();
}

// if operation is 's', calculate sum
// if operation is 'p', calculate product
if (operation.toLowerCase() === 's') {
  console.log(`The sum of the integers between 1 and ${input} is ${computeSum(input)}`);
} else if (operation.toLowerCase() === 'p') {
  console.log(`The product of the integers between 1 and ${input} is ${computeProd(input)}`);
}

// Further Exploration

// What if the input was an array of integers instead of just a
// single integer? How would your computeSum and computeProduct functions
// change? Given that the input is an array, how might you make use
// of the Array.prototype.reduce() method?

let myArr = [1, 6, 9, 34, 1, 12];

console.log(`Passing myArr to computeSum, here is the total: ${computeSum(myArr)}`);
console.log(`Passing myArr to computeProd, here is the total: ${computeProd(myArr)}`);