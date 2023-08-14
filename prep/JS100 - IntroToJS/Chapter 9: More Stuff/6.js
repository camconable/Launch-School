// 6) Write a function that searches an array of strings for 
// every element that matches the regular expression given 
// by its argument. The function should return all matching 
// elements in an array.


// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear'
// ];

// function allMatches(arr, reg) {
//   let matchedArr = [];
//   for (let val of arr) {
//     let myMatch = reg.test(val);
//     if (myMatch) {
//       matchedArr = matchedArr.concat(val);
//     } else {
//       console.log(`${val} does not match ${reg}`);
//     }
//   }
//   return matchedArr;
// }

// console.log(/b/.test('bobcat'));

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']