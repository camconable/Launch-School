// Build a program that asks the user to enter the length
// and width of a room in meters, and then logs the area of
// the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use
// the readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

let rlSync = require('readline-sync');

let inputType = Number(rlSync.question('What is the measurement input type?\n1) Meters\n2) Feet\n(Enter 1 or 2): '));

let length = Number(rlSync.question('Enter the length of the room:\n'));
let width = Number(rlSync.question('Enter the width of the room:\n'));

let squareMeters = (length, width) => {
  let area = length * width;
  return Number.parseFloat(area).toFixed(2);
};
let squareFeet = (length, width) => {
  let area = (length * width) * 10.7639104;
  return Number.parseFloat(area).toFixed(2);
};

if (inputType === 1) {
  console.log(`The area of the room is ${squareMeters(length, width)} square meters.`);
} else if (inputType === 2) {
  console.log(`The area of the room is ${squareFeet(length, width)} square feet.`);
} else {
  console.log(`Error`);
}

// Further Exploration

// Modify the program so that it asks the user for the input type
// (meters or feet). Compute for the area accordingly, and log it
// and its conversion in parentheses.

