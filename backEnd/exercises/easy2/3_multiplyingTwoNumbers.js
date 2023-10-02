// Create a function that takes two arguments, multiplies them
// together, and returns the result.

// Example:

// console.log(multiply(5, 3) === 15); // logs true

const readline = require('readline-sync');

function isEmpty(num) {
  return num.trim() === '';
}
function isNaN(num) {
  return Number.isNaN(Number(num));
}
function getAndValidateNum() {
  let input = readline.question('Please enter a number: ');

  while (
    isEmpty(input) ||
    isNaN(input) ||
    input === undefined
  ) {
    console.log('Error, try again.');
    input = readline.question('Please enter a number: ');
  }

  return Number(input);
}
function multiply(num1, num2) {
  return num1 * num2;
}

let num1 = getAndValidateNum();
let num2 = getAndValidateNum();
let result = multiply(num1, num2);

console.log(`The result of ${num1} * ${num2} is ${result}`);