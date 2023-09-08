// ask user for first number
// ask user for second number
// ask user for operation (add, subtract, multiply, divide)
// perform the operation
// display the result of operation

let rlSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  // we're looking for invalid numbers without whitespace
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

do {
  prompt(`Welcome to The Calculator!`);

  let num1 = rlSync.question(prompt(`What is the first number?: `));
  while (invalidNumber(num1)) {
    prompt(`Hmmm... that doesn't look like a valid number.`);
    num1 = rlSync.question();
  }
  
  let num2 = rlSync.question(prompt(`What is the second number?: `));
  while (invalidNumber(num2)) {
    prompt(`Hmmm... that doesn't look like a valid number.`);
    num2 = rlSync.question();
  }
  
  let operation = rlSync.question(prompt(`What operation would you like to perform?\n\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n`));
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(`Please choose either 1, 2, 3, or 4`);
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
  
  prompt(`The result is ${output}`);
  let tryAgain = rlSync.question(prompt('Run the calculator again?\n Enter yes or no: ')).toUpperCase();
} while (tryAgain === 'YES')

