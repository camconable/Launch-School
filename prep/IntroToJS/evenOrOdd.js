/*
Write a function, evenOrOdd, that determines whether its 
argument is an even number. If it is, the function should
log 'even' to the console; otherwise, it should log 'odd'.
For now, assume that the argument is always an integer.
*/
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
};

function evenOrOddShort(num) {
  if (Number.isInteger(num)) {
    num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);
  } else {
    console.log(`Sorry, the value you passed is not an integer`);
  }
};

let rlSync = require('readline-sync');
let myInput = Number(rlSync.question('What is the number?: '));

// evenOrOdd(myInput);
evenOrOddShort(myInput);