// Always Return Negative

// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// input: number
// output: negative number

// if number > 0, return negated number
// if number < 0, return number
// if number === 0, return -0
// if number Infinity, return -Infinity

function negative(num) {
  if (num >= 0) {
    return Math.abs(num) * -1;
  } else {
    return num;
  }
}