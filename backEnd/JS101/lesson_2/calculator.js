// ask user for first number
// ask user for second number
// ask user for operation (add, subtract, multiply, divide)
// perform the operation
// display the result of operation

let rlSync = require('readline-sync');

console.log(`Welcome to The Calculator!`);

let num1 = Number(rlSync.question(`What is the first number?: `));
let num2 = Number(rlSync.question(`What is the second number?: `));
let operation = rlSync.question(`What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n`);

let output;

switch(operation) {
  case '1':
    output = num1 + num2;
    break;
  case '2':
    output = num1 - num2;
    break;
  case '3':
    output = num1 * num2;
    break;
  case '4':
    output = num1 / num2;
    break;
  default:
    console.log(`Error`);
    break;
}

console.log(`The result is ${output}`)