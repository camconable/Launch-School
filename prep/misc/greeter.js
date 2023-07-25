let rlSync = require('readline-sync');
// console.log(`Hello, ${fName} ${lName}!`);

function getFullName() {
  let fName = rlSync.question('What the hell is your first name?: ');
  let lName = rlSync.question('What the hell even is your last name?: ');
  return console.log(`Hello, ${fName} ${lName}!`);
}

getFullName();