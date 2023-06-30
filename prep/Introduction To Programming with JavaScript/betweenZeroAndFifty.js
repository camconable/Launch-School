let rlSync = require('readline-sync');
let myInput = rlSync.question('What\'s the input?: ');

ifNumberRange(myInput);

function numberRange(num) {
  switch(num) {
    case (num < 0):
      console.log(`${num} is less than 0`);
      break;
    case (num >= 0 && num <= 50):
      console.log(`${num} is between 0 and 50`);
      break;
    case (num >= 51 && num <= 100):
      console.log(`${num} is between 51 and 100`);
      break;
    case (num > 100):
      console.log(`${num} is greater than 100`);
      break;
    default:
      console.log(`Something went wrong`);
      break;
  }
}

function ifNumberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else {
    console.log('Something went wrong');
  }
}