// Arithmetic Integer

// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// Example

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// The final output above shows how JavaScript displays numbers that are too large for its Number type. The number represents approximately 1.41 * 100,000,000,000,000,000,000,000 using what is called floating-point notation. If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to both 23 and 17:

// > 23n ** 17n    // 141050039560662968926103n


// input: 2 positive integers, no validation needed
// output: log the values for each of the following operations:
// addition, subtraction, product, quotient, remainder, power

// import readline sync
// get first number
// get second number
// write to console num1 operation num2 = result, for all 6 operations
// for power operation use BigInt by appending an n to both numbers

const rlSync = require('readline-sync');
let num1 = Number(rlSync.question(prompt('Enter the first number: ')));
let num2 = Number(rlSync.question(prompt('Enter the second number: ')));

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${BigInt(num1 ** num2)}`);

function prompt(string) {
  console.log('==> ' + string);
}