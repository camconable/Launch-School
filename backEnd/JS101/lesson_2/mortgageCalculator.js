const MESSAGES = require('./mortgage_calculator_messages.json');
const MONTHS_PER_YEAR = 12;
const rlSync = require('readline-sync');

function displayBreak() {
  prompt('break');
}

function prompt(msg) {
  if (Object.keys(MESSAGES).includes(msg)) {
    console.log(`=> ${MESSAGES[msg]}`);
  } else {
    console.log(`=> ${msg}`);
  }
}

function askToRepeat() {
  return rlSync.question(prompt('requestAnotherCalc'));
}

function isInvalidAmount(num) {
  // check if numbers after decimals exist and they're longer than 2 places
  return num.split(".")[1] && num.split(".")[1].length > 2;
}

function isInvalidNum(num) {
  return isNegative(num) || isEmpty(num) || isNaN(num);
}

function isNegative(num) {
  return Number(num) < 0;
}

function isEmpty(num) {
  return num.trim() === '';
}

function isNaN(num) {
  return Number.isNaN(Number(num));
}

function getUserInput(str) {
  prompt(str);
  return rlSync.question();
}

function getAndValidateAmount() {
  let amount = getUserInput('requestLoan');

  while (isInvalidAmount(amount) || isInvalidNum(amount)) {
    prompt('validAmount');
    amount = rlSync.question();
  }

  return Number(amount);
}

function getAndValidateNum(input) {
  let num = getUserInput(input);
  return validateNum(num);
}

function validateNum(num) {
  while (isInvalidNum(num)) {
    prompt("validNumber");
    num = rlSync.question();
  }
  return Number(num);
}

function calculateMonthDuration(years) {
  return years * MONTHS_PER_YEAR;
}

function calculateMonthlyInterest(apr) {
  return (apr / 100) / 12;
}

function calculateMonthlyPayment(amount,
  monthlyRate,
  loanDurationMonths) {
  let payment;

  prompt(`amount: ${amount}`);
  prompt(`monthlyRate: ${monthlyRate}`);
  prompt(`loanDurationMonths: ${loanDurationMonths}`);

  if (loanDurationMonths === 0) {
    payment = loanDurationMonths;
  } else if (monthlyRate === 0) {
    payment = amount / loanDurationMonths;
  } else {
    payment =
      amount *
      (monthlyRate /
      (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));
  }
  return payment.toFixed(2);
}

function displayResults(
  amount,
  apr,
  monthDuration,
  yearDuration,
  monthlyPayment
) {
  prompt('loanDetails');
  displayBreak();
  prompt(`Loan Amount: $${amount}`);
  prompt(`APR: $${apr}%`);
  prompt(
    `Duration: ${Math.ceil(monthDuration)} months (${yearDuration} years)`
  );
  displayBreak();
  prompt(`Monthly Payment: $${monthlyPayment}`);
  displayBreak();
}

function wantsToGoAgain(input) {
  return ['yes', 'y'].includes(input.toLowerCase());
}

let goAgain;

do {
  console.clear();
  prompt('welcome');
  displayBreak();

  let amount = getAndValidateAmount();

  console.clear();
  let yearDuration = getAndValidateNum('requestLoanDuration');

  console.clear();
  let loanDurationMonths = calculateMonthDuration(yearDuration);

  console.clear();
  let apr = getAndValidateNum('requestAPR');

  console.clear();
  let monthlyInterest = calculateMonthlyInterest(apr);

  let monthlyPayment = calculateMonthlyPayment(
    amount,
    monthlyInterest,
    loanDurationMonths
  );

  displayResults(
    amount,
    apr,
    loanDurationMonths,
    yearDuration,
    monthlyPayment
  );

  goAgain = askToRepeat();
} while (wantsToGoAgain(goAgain));


