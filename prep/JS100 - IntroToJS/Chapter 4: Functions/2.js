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
