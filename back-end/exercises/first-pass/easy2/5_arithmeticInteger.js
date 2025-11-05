// input: 2 positive integers
// print the following: addition, subtraction, product, quotient, remainder,
// power
// do not validate input

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function quotient(num1, num2) {
  return Math.floor(num1 / num2);
}

function remainder(num1, num2) {
  return num1 % num2;
}

function power(num1, num2) {
  return Math.pow(num1, num2);
}

const readline = require('readline-sync');

let num1 = Number(readline.question(prompt('Enter the first number: ')));
let num2 = Number(readline.question(prompt('Enter the second number: ')));

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`${num1} * ${num2} = ${product(num1, num2)}`);
console.log(`${num1} / ${num2} = ${quotient(num1, num2)}`);
console.log(`${num1} % ${num2} = ${remainder(num1, num2)}`);
console.log(`${num1} ** ${num2} = ${power(num1, num2)}`);
