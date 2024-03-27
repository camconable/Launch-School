/* eslint-disable max-len */
// - Create a function that takes a string as an argument and returns a number representing number of words that occurred more than once in that string, for example:


// console.log(countDuplic('one two one three two')); //=> 2
// console.log(countDuplic('flower cat cat dog flower dog')); //=> 3

// input: string
// output: number, count of # of words that occur more than once

// remove duplicates array
// loop through uniqArray, comparing each to origArray
// if count > 1 then increment overallCount

// function countDuplic(string) {
//   let origArray = string.split(' ');
//   let uniqArray = origArray.filter((elem, idx) => origArray.indexOf(elem) === idx);

//   return uniqArray.reduce((acc, curr) => {
//     let count = 0;
//     for (let word of origArray) {
//       if (curr === word) ++count;
//     }
//     if (count > 1) ++acc;
//     return acc;
//   }, 0);
// }


// - Create a function that takes a string as an argument and returns a number representing occurrences of all letters that appears exactly twice, for example:


console.log(countDuplic('123123')); //=> 3
console.log(countDuplic('abcdea ab')); //=> 1

// input: string
// output: number, representing occurrences of all letters that appear exactly twice

// get uniq
// iterate over uniq,
//   loop each uniq over origArray
//   if match, incr inner count
// if innerCount === 2, incr outerCount

function countDuplic(string) {
  let arr = string.split('');
  let uniqArray = arr.filter((char, idx) => arr.indexOf(char) === idx);
  return uniqArray.reduce((acc, curr) => {
    let count = 0;
    for (let elem of arr) {
      if (elem === curr) ++count;
    }
    if (count === 2) ++acc;
    return acc;
  }, 0);
}
