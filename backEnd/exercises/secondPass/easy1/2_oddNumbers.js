// Odd Numbers

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let rlSync = require('readline-sync');
let max = rlSync.question('What is the max number to loop to (inclusive)?: ');

for (let idx = 1; idx <= Number(max); idx += 2) {
  console.log(idx);
}