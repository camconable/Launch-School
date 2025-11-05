// When Will I Retire?

// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!


// input: two numbers
// output: log the following 3 data points
// current year
// years user has left to work
// year user will retire

let rlSync = require('readline-sync');
const date = new Date();
let currentYear = date.getFullYear();

let currentAge = Number(rlSync.question('What is your age? '));
let retireAge = Number(rlSync.question('At what age would you like to retire? '));
let yearsToWork = retireAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToWork}.\nYou have only ${yearsToWork} years of work to go!`);