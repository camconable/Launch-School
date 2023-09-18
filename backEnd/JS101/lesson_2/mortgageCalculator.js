const MESSAGES = require('./mortgage_calculator_messages.json');
const rlSync = require('readline-sync');
let goAgain;

function prompt(msg) {
  if (Object.keys(MESSAGES).includes(msg)) {
    console.log(`=> ${MESSAGES[msg]}`);
  } else {
    console.log(`=> ${msg}`);
  }
}

function isInvalidAmount(num) {
  return num.split(".")[1] && num.split(".")[1].length > 2;
}

function isInvalidNum(num) {
  return isEmpty(num) || isNegative(num) || isNaN(num);
}

function isEmpty(num) {
  return num.trim() === '';
}

function isNegative(num) {
  return Number(num) < 0;
}

function isNaN(num) {
  return Number.isNaN(Number(num));
}

function calculateWithInterest(amount,
  monthlyRate,
  loanDurationMonths) {
  let payment;

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

function calculateNoInterest(amount, loanDurationMonths) {
  return (amount / loanDurationMonths).toFixed(2);
}


do {
  prompt('welcome');

  // decide whether to have interest or not
  let interestDecision = rlSync.question(prompt('askIfInterest'));

  while (!['1', '2'].includes(interestDecision)) {
    interestDecision = rlSync.question(prompt('askIfInterest'));
  }

  let loanAmount = parseFloat(rlSync.question(prompt('requestLoan')));

  while (!Number.isInteger(loanAmount)) {
    prompt('validAmount');
    loanAmount = parseFloat(rlSync.question(prompt('requestLoan')));
  }

  let loanDurationMonths = Number(rlSync.question(prompt('requestLoanDuration')));

  // validate input - check if integer
  while (!Number.isInteger(loanDurationMonths)) {
    // console.log(`That's not an integer or decimal. Try again.`);
    prompt('validNumber');
    loanDurationMonths = Number(rlSync.question(prompt('requestLoanDuration')));

  }
  let annualPercentageRate;
  let monthlyInterestRate;

  // if loan has interest, take interest rate input
  if (interestDecision === '1') {
    annualPercentageRate = Number(rlSync.question(prompt('requestAPR')));
    // validate input - check if integer
    while (!Number.isInteger(annualPercentageRate)) {
      console.log(`validNumber`);
      annualPercentageRate = Number(rlSync.question(prompt('requestAPR')));
    }
    // convert for use in formula below
    monthlyInterestRate = (annualPercentageRate / 100) / 12;
  }

  // if user entered 1, run and log payment with interest
  // otherwise, run and log interest-free payment

  if (interestDecision === '1') {
    let monthlyPaymentWithInterest = calculateWithInterest(loanAmount,
      monthlyInterestRate, loanDurationMonths);
    prompt(`The monthly payment of $${loanAmount.toFixed(2)} with an APR of ${annualPercentageRate.toFixed(1)}% is: $${monthlyPaymentWithInterest}`);
  } else if (interestDecision === '2') {
    // interest-free loan only passes 2 arguments
    let monthlyPaymentNoInterest = calculateNoInterest(loanAmount,
      loanDurationMonths);
    prompt(`The monthly payment of $${loanAmount.toFixed(2)} without interest is: $${monthlyPaymentNoInterest}`);
  }

  goAgain = rlSync.question(prompt(`Go again?\nEnter 1 to run again: `));
} while (goAgain === '1');


