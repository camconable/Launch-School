/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
// Multiples of 3 and 5

// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

// input: positive integer above 1
// initialize count to 0
// begin loop
// if (idx % 3 || idx % 5) adds to count

function multisum(num) {
  let count = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    count += (idx % 3 === 0 || idx % 5 === 0) ? idx : 0;
  }
  return count;
}


// function multisum(num) { 
//   return Array.from({ length: num }, (_, i) => i + 1) 
//     .filter(n => n % 3 === 0 || n % 5 === 0) 
//     .reduce((sum, n) => sum + n, 0); 
// }

// function multisum(num) { 
//   const sumDivisibleBy = d => { 
//     const m = Math.floor(num / d); 
//     return d * m * (m + 1) / 2; 
//   }; 
//   return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15); 
// }