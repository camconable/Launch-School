function negative(num) {
  return -Math.abs(num);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// Further exploration:
// Did you notice that negative(0) returns -0? What is this value, -0? Is it
// different from 0 in some way?Use Google to look for an explanation of -0.
// In particular, see if you can learn how to differentiate between 0 and -0
// in a program.

// This article was helpful to understand and what to use in ES6+ (Object.is):
// https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114