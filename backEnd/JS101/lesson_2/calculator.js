// ask user for first number
// ask user for second number
// ask user for operation (add, subtract, multiply, divide)
// perform the operation
// display the result of operation

let rlSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  // we're looking for invalid numbers without whitespace
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let goAgain;
do {
  prompt(MESSAGES.welcome);

  let num1 = rlSync.question(prompt(MESSAGES.firstNum));

  while (invalidNumber(num1)) {
    prompt(MESSAGES.invalidNum);
    num1 = rlSync.question();
  }

  let num2 = rlSync.question(prompt(MESSAGES.secondNum));

  while (invalidNumber(num2)) {
    prompt(MESSAGES.invalidNum);
    num2 = rlSync.question();
  }

  let operation = rlSync.question(prompt(MESSAGES.whichOperation));

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.correctOperation);
    operation = rlSync.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
    default:
      console.log(`Error`);
      break;
  }

  prompt(MESSAGES.result + output);
  // ask user if they want to go again, if 1 then loop again
  goAgain = Number(rlSync.question(prompt(MESSAGES.runAgain)));
} while (goAgain === 1);
