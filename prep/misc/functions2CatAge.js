// Calculate Cat Age

// Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

//     The first human year corresponds to 15 cat years.
//     The second human year corresponds to 9 cat years.
//     Every subsequent human year corresponds to 4 cat years.

// For example:

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32



// if age is 1, age = 15
// if age is 2, age = 24
// if age is 3, age = 24 + 4
// if age is 4, age = 24 + 4 + 4

// if age is 3, count = 4
// if age is 4, count = 4 * 2


function catAge(age) {
  if (age === 0) {
    return 0;
  } else if (age === 1) {
    return 15;
  } else if (age === 2) {
    return 24;
  }
  else {
    let multiplier = 0;
    for (let i = 2; i < age; i += 1) {
      multiplier += 1;
    }
    return 24 + (4 * multiplier);
  }
}