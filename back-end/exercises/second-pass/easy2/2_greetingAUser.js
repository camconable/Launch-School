// Greeting a user

// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// Examples

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// import readline sync
// take user input as string
// if last character is '!', output all caps string (with last character removed)
// otherwise, output normal calm string of full input (since it does not contain a '!')

let rlSync = require('readline-sync');
let input = rlSync.question('What is your name? ');

if (input.endsWith('!')) {
  console.log(`HELLO ${input.toUpperCase().slice(0, (input.length - 1))}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${input}.`);
}