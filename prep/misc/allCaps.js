let rlSync = require('readline-sync');
let myInput = String(rlSync.question('What is your string?: '));

toUpper(myInput);

function toUpper(words) {
  if (words.length > 10) {
    return console.log(words.toUpperCase());
  } else {
    return console.log(words);
  }
}