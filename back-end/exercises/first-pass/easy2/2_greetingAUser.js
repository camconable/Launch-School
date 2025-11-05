// Write a program that will ask for user's name. The program will
//  then greet the user. If the user writes "name!" then
// the computer yells back to the user.

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?


// get name
// check if name has only 1 ! at the end
const rlSync = require('readline-sync');

function getName() {
  return rlSync.question(`What is your name? `);
}
function nameContainsExclam(name) {
  return name.includes('!');
}

function exclamNotFirst(name) {
  const chars = name.split('');
  return chars[0] !== '!';
}

function displayNoExclam(name) {
  return console.log(`Hello ${name}`);
}

function displayWithExclam(name) {
  name = name.slice(0, -1);
  return console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING.`);
}

let name = getName();

if (nameContainsExclam(name) && exclamNotFirst(name)) {
  displayWithExclam(name);
} else {
  displayNoExclam(name);
}
