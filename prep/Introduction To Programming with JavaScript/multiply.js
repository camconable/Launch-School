let rlSync = require('readline-sync');
let num1 = rlSync.question('Enter the first number: ');
let num2 = rlSync.question('Enter the second number: ');

multiply(num1, num2);

function multiply(num1, num2) {
  return console.log(`${num1} * ${num2} = ${num1 * num2}`);
}