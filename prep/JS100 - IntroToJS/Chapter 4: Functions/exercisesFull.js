// 1) What does this code log to the console? Does executing the foo function affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

// Cam's answer: This logs 1 to the console because bar within the function is block scoped. It is defined on line 3, but then ceases to exist after the function runs. It briefly shadows the global bar variable, but after the function completes the global bar variable is in effect.

// 2) In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

// let rlSync = require('readline-sync');

// function getName() {
//   let fName = rlSync.question('What is your first name? ');
//   let lName = rlSync.question('What is your last name? ');
//   return `Hello ${fName} ${lName}!`;
// }

// console.log(getName());


// LS answer:

// function getName(prompt) {
//   let readlineSync = require('readline-sync');
//   let name = readlineSync.question(prompt);
//   return name;
// }

// let firstName = getName('What is your first name? ');
// let lastName = getName('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);

// 3) Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// let rlSync = require('readline-sync');
// let num1 = Number(rlSync.question('Enter the first number: '));
// let num2 = Number(rlSync.question('Enter the second number: '));

// console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// function multiply(a, b) {
//   return a * b;
// }


//rewrite it:

// function multiply(a, b) {
//   return a * b;
// }

// function getNumber(prompt) {
//   let rlSync = require('readline-sync');
//   return Number(rlSync.question(prompt));
// }

// let num1 = getNumber('Enter the first number: ');
// let num2 = getNumber('Enter the second number: ');

// console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);


// 4) What does the following code log to the console?

// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }

// scream('Yipeee');

// it logs nothing to the console and returns undefined. console.log was not able to run because the return statement terminated the function before line 4 was able to run.

// 5) What does the following code log to the console?

// function scream(words) {
//   return words + '!!!!';
// }

// scream('Yipeee');

// it logs nothing to the console and returns 'Yipeee!!!!'. logging to console and returning from a function are two separate things

// 6) In the code shown below, identify the following items:

//     the function arguments
// the numbers 2, 3, 4 being passed to the multiplyNumbers function

//     the function body
// lines 2 and 3 (everything between the curly braces)

//     the function declaration
// lines 1 - 4. everything after the word function and up to the curly braces

//     the function invocation
// everything after the equal sign on line 6. the result of the function invocation is stored as the variable named product

//     the function name
// multiplyNumbers

//     the function parameters
// num1, num2, num3

//     the function return value
// the variable result (line 3)

//     the names of all variables in this program
// multiplyNumbers, num1, num2, num3, result, product


// 7) Without running the following code, what do you think it will output?

// function foo(bar, qux) {
//   console.log(bar);
//   console.log(qux);
// }

// foo('Hello');

// It will log 'Hello' to the console, followed by undefined. 

// 8) Without running the following code, what do you think it will output?

// function foo(bar, qux) {
//   console.log(bar);
//   console.log(qux);
// }

// foo(42, 3.1415, 2.718);

// It will log 42 followed by 3.1415. the 3rd argument passed to foo is ignored

// 9) Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

// function multiply(left, right) { => multiply, left, right
//   let product = left * right; => product, left, right
//   return product; => product
// }

// function getNumber(prompt) { => getNumber, prompt
//   return parseFloat(question(prompt)); => prompt
// }

// let left = getNumber('Enter the first number: '); => left, getNumber
// let right = getNumber('Enter the second number: '); => right, getNumber
// console.log(`${left} * ${right} = ${multiply(left, right)}`); => left, right, multiply

//MISSING parseFloat and console variables. all functions, even built-in ones, are variables

// 10) Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.

// global: multiply, getNumber, left (line 10), right (line 11), console, parseFloat
// local: left (line 1), right (line 1), product, prompt

//missed question as global variable

// 11) Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

// they are not the same. lines 1 and 2 are local variables that shadow the global variables when they're declared in the function. they cease to exist after the function terminates. lines 10-12 left/right are global variables
