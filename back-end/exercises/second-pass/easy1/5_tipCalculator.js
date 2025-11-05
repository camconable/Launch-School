// Tip Calculator

// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let tipPct = (Number(rlSync.question('What is the tip percentage? '))) / 100;
let tipAmt = bill * tipPct;

console.log(`The tip is $${tipAmt.toFixed(2)}\nThe total is $${(bill + tipAmt).toFixed(2)}`);