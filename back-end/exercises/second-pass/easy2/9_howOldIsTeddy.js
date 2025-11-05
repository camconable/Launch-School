// How Old is Teddy?

// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

// input: nothing
// output: randomly generated number from 20 - 120 (inclusive)

// math.random generates random floating point number between 0 (inclusive) and 1 (exclusive)

// Math.ceil(math.rand * (max - min) + min)

let max = 120;
let min = 20;

for (let idx = 0; idx <= 500; idx += 1) {
  let teddyAge = randomBetween(min, max);
  if (teddyAge === 20) console.log(`Teddy's age is 20`);
  if (teddyAge === 120) console.log(`Teddy's age is 120`);
}

function randomBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}