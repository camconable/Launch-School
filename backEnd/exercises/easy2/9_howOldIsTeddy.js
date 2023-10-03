// input: none
// output: string with age (as a number). number between 20 and 120 (inclusive)

// run 20 times to check
for (let idx = 1; idx <= 20; idx += 1) {
  console.log(`Teddy is ${getTeddyAge(20, 120)} years old!`);
}

// (max - min) + min

function getTeddyAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}