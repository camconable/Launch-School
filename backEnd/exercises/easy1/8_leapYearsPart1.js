
// Leap Years (Part 1)

// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

// Examples:

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

// PEDAC
// input: a number greater than 0
// output: boolean. true if leap year, false if not a leap year

function isLeapYear(year) {
  // work our way "up"
  // leap year is divisible by 4
  if (year % 4 === 0) {
    // false if also divisible by 100
    if (year % 100 === 0) {
      // true if it is also divisible by 400
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  // always return false if not divisible by 4
  return false;
}

