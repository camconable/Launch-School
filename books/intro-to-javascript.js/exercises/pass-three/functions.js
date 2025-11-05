/* eslint-disable max-len */
// https://launchschool.com/books/javascript/read/functions
// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

// Solution

// This code logs 1 to the console. On line 1 we have global variable bar initialized and assigned 1. When foo() is invoked on line 6, the foo function (lines 2 - 4) run, initializing a function scoped variable bar to the value 2. This function scoped variable shadows and prevents access to the outer global variable bar. After the function ends, it implicitly returns undefined, and the function scoped bar goes out of scope. The console only has access to the global bar, logging 1 to the console.

// In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.
// Solution

// let firstName = getName('What is your first name? ');
// let lastName = getName('What is your last name? ');
// greeter(firstName, lastName);

// function getName(prompt) {
//   let rlSync = require('readline-sync');
//   return rlSync.question(prompt);
// }

// function greeter(firstName, lastName) {
//   console.log(`Good Morning, ${firstName} ${lastName}.`);
//   console.log(`Good Afternoon, ${firstName} ${lastName}.`);
//   console.log(`Good Evening, ${firstName} ${lastName}.`);
// }

// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

// Solution

// console.log(multiply());

// function multiply() {
//   let rlSync = require('readline-sync');
//   let firstNum = rlSync.question('Enter the first number: ');
//   let secondNum = rlSync.question('Enter the second number: ');
//   return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
// }

// What does the following code log to the console?

// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }

// scream('Yipeee');

// Solution

// It doesn't like anything to the console. When the function scream is invoked, it passes the string 'Yipeee' as an argument. Within scream, the words parameter is assigned to 'Yipeee'. Words is reassigned to the value of 'Yipeee' with '!!!!' concatenated to it, resulting in 'Yipeee!!!!' being reassigned to words on line 2. On line 3, the function returns, implicitly returning undefined because there is no expression following the return keyword. The console.log on 4 is therefore inaccessible by the program because it follows the return keyword.

// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }

// scream('Yipeee');

// What does the following code log to the console?

// function scream(words) {
//   return words + '!!!!';
// }

// scream('Yipeee');

// Solution

// Nothing is logged to the console. 'Yipeee!!!!' is returned from the function, but it is not logged. The words parameter defined in scream function definition is assigned the argument passed to it: the string 'Yipeee'. The return statement on line 2 evaluates the expression by concatenating '!!!!' to the value stored in words 'Yipeee'. 'Yipeee!!!!' is returned from the function but this value is not captured anywhere, nor logged to the console.


// In the code shown below, identify the following items:

//     the function arguments
// 2, 3, 4
//     the function body
// {
//   let result = num1 * num2 * num3;
//   return result;
// }
//     the function declaration
// function multiplyNumbers() **WRONG: EVERYTHING IN LINES 1-4
//     the function invocation
// multiplyNumbers() **WRONG: INCLUDES VALUES PASSED TO INVOCATION
//     the function name
// multiplyNumbers
//     the function parameters
// num1, num2, num3
//     the function return value
// result **WHAT DOES RESULT CONTAIN?
//     the names of all variables in this program
// multiplyNumbers, num1, num2, num3, result, product

// function multiplyNumbers(num1, num2, num3) {
//   let result = num1 * num2 * num3;
//   return result;
// }

// let product = multiplyNumbers(2, 3, 4);

// Solution

// Without running the following code, what do you think it will output?

// function foo(bar, qux) {
//   console.log(bar);
//   console.log(qux);
// }

// foo('Hello');

// Solution

// This will log 'Hello' followed by undefined to the console. The second argument in the invocation is missing, so the second parameter qux is implicitly assigned undefined in the function. The foo function logs the values stored in bar and qux to the console, which are 'Hello' and undefined.

// Without running the following code, what do you think it will output?

// function foo(bar, qux) {
//   console.log(bar);
//   console.log(qux);
// }

// foo(42, 3.1415, 2.718);

// Solution

// The following get logged to the console:
// 42
// 3.1415

// The first two arguments - 42, 3.1415 - passed to the foo function get assigned to the parameters bar and qux. The third argument (2.718) does not have an associated parameter in the function declaration, so it is ignored. All extra arguments passed that don't have a parameter get ignored.

// Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

// function multiply(left, right) {
//   let product = left * right;
//   return product;
// }

// function getNumber(prompt) {
//   return parseFloat(question(prompt));
// }

// let left = getNumber('Enter the first number: ');
// let right = getNumber('Enter the second number: ');
// console.log(`${left} * ${right} = ${multiply(left, right)}`);

// Solution

// line 1: multiply, left, right
// line 2: product, left, right
// line 3: product
// line 6: getNumber, prompt
// line 7: parseFloat, question, prompt
// line 10: left, getNumber
// line 11: right, getNumber
// line 12: console.log, left, right, multiply **WRONG: console is a variable name for the built-in Console object. console.log is the name of a method on that object. log is a property name, not a variable name. So the correct answer is console, not console.log


// Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.
// Solution

// line 1: multiply, left, right
// multiply is global, left and right are local (function-scoped) variables (parameters)
// line 2: product, left, right
// product, left and right are all local variables
// line 3: product => local
// line 6: getNumber, prompt
// getNumber is global, prompt is local
// line 7: parseFloat, question, prompt
// parseFloat and question are global, prompt is local
// line 10: left, getNumber
// left and getNumber are global
// line 11: right, getNumber
// right and getNumber is global
// line 12: console, left, right, multiply
// console, left, right and multiply are all global

// Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

// No they are not. The left and right variables on line 1 and 2 are parameters and function scoped. Within the function they shadow (prevent access to) the left/right global variables in the outer scope. left and right on lines 10-11 are global variables that get assigned the return value of getNumber function (with strings passed to getNumber as an argument)