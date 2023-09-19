// Leap Years (Part 2)

// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

// PEDAC
// input: a number greater than 0
// output: boolean. true if leap year, false if not a leap year

function isLeapYear(year) {
  return year < 1752 ? leapYearJulian(year) : leapYearGregorian(year);
}

function leapYearJulian(year) {
  return year % 4 === 0;
}

function leapYearGregorian(year) {
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


// Further Exploration

