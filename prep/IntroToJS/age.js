let rlSync = require('readline-sync');
let age = Number(rlSync.question('Tell me how old you are, NOW: '));

for (let i = 1; i < 5; i += 1) {
  console.log(`In ${i * 10} years, you will be ${age + (i * 10)} years old.`);
}