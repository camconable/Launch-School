/* eslint-disable max-len */
// Create a function that takes a string as an argument and returns `true` if the string contains a pair of parenthesis, where '(' and ')' is a pair but ')' and ')' is not. Return `false` otherwise. For example:


// console.log(findPairs('abcd(abcd ) dbb ) ddss (')); //true
// console.log(findPairs('ab))) ccc (((')); //true
// console.log(findPairs('(fff))))((')); //false
// console.log(findPairs('((((((')); //false
// console.log(findPairs('()()())()()(')); //true

// input: string
// output: boolean, true if string contains pair of parenthesis (both "(" and ")")
//   all parenthesis must have their counterpart: if there is 1 open parenthesis then return false

// convert to array
// store one side of parenthesis in an array (numLeftParenth)
//   initialize searchChar to (
//   loop through array
//     if elem === searchChar, increment foo
//   end of loop push foo to numLeftParenth, reset foo
//   repeat loop with numRightParenth
// if leftParenth equals rightParenth.length, return true, otherwise false

// function findPairs(string) {
//   let arr = string.split('');
//   let numParenths = [];
//   for (let elem of ['(', ')']) {
//     let count = 0;
//     for (let foo of arr) {
//       if (elem === foo) {
//         count += 1;
//       }
//     }
//     numParenths.push(count);
//   }
//   return numParenths[0] === numParenths[1];
// }