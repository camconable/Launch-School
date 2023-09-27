// Write a function that computes the sum of all numbers between
// 1 and some other number, inclusive, that are multiples
// of 3 or 5. For instance, if the supplied number is 20, the
// result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer
//  greater than 1.

// Examples:

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(20));      // 98
console.log(multisum(1000));    // 234168

// initialize sum
// loop from 1 through input number, inclusive
// if current number is a multiple of 3 or 5, add current number to sum
//    (create isMultipleOfThree and isMultipleOfFive)
// return sum

function isMultipleOfThree(num) {
  return num % 3 === 0;
}
function isMultipleOfFive(num) {
  return num % 5 === 0;
}

function multisum(num) {
  let sum = 0;

  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (isMultipleOfThree(currentNum) || isMultipleOfFive(currentNum)) {
      sum += currentNum;
    }
  }

  return sum;
}