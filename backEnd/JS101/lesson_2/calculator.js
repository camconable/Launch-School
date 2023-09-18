// ask user for first number
// ask user for second number
// ask user for operation (add, subtract, multiply, divide)
// perform the operation
// display the result of operation
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  // we're looking for invalid numbers without whitespace
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

let rlSync = require('readline-sync');
let language = rlSync.question(prompt('What language would you prefer?\n1) English\n2) Spanish (Espanol)\n3) French (Francais)\n4) Mandarin (普通话)'));

while (!['1', '2', '3', '4'].includes(language)) {
  language = rlSync.question(prompt('Invalid language input.\nWhat language would you prefer?\n1) English\n2) Spanish (Espanol)\n3) French (Francais)\n4) Mandarin (普通话)'));
}

let LANG;

switch (language) {
  case '1':
    LANG = 'en';
    break;
  case '2':
    LANG = 'es';
    break;
  case '3':
    LANG = 'fr';
    break;
  case '4':
    LANG = 'zh';
    break;
  default:
    LANG = 'en';
    break;
}

let goAgain;

do {
  prompt(messages('welcome', LANG));

  let num1 = rlSync.question(prompt(messages('firstNum', LANG)));

  while (invalidNumber(num1)) {
    prompt(messages('invalidNum', LANG));
    num1 = rlSync.question();
  }

  let num2 = rlSync.question(prompt(messages('secondNum', LANG)));

  while (invalidNumber(num2)) {
    prompt(messages('invalidNum', LANG));
    num2 = rlSync.question();
  }

  let operation = rlSync.question(prompt(messages('whichOperation', LANG)));

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('correctOperation', LANG));
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

  prompt(messages('result', LANG) + output);
  // ask user if they want to go again, if 1 then loop again
  goAgain = Number(rlSync.question(prompt(messages('runAgain', LANG))));
} while (goAgain === 1);
