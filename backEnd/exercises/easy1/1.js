// write a function that takes 1 integer argument
// integer can be positive, negative, or zero
// method returns true if the number's absolute value is odd

// assume that the argument is a valid integer value

// examples:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


function isOdd(num) {
  // use Math.abs method to determine absolute value
  // absolute value flips negative to positive,
  // then use remainder % 2 === 0. returning true means it is even
  // we therefore have to negate that to find odd values
  return !(Math.abs(num) % 2 === 0);
}