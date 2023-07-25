let answer;
let rlSync = require('readline-sync');

do {
  answer = (rlSync.question('Do you want to do that again?: ')).toUpperCase();
} while (answer === 'Y' || answer === 'YES');