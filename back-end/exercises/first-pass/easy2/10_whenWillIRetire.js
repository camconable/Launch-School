// input: number (age), number (retireAge)
// output: string with current year, retirement year, time left in years
// assuming no input validation and only numbers will be input

const readline = require('readline-sync');
const today = new Date();

function currentYear() {
  return Number(today.getFullYear());
}

function getCurrentAge() {
  return Number(readline.question('What is your age? '));
}

function getRetirementAge() {
  return Number(readline.question('At what age would you like to retire? '));
}

let currentAge = getCurrentAge();
let retirementAge = getRetirementAge();
let yearsLeft = retirementAge - currentAge;

console.log(`It's ${currentYear()}. You will retire in ${currentYear() + (yearsLeft)}.`);
console.log(`You only have ${yearsLeft} years of work to go!`);