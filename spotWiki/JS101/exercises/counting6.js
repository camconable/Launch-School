/* eslint-disable max-lines-per-function */
// Create a function that takes a string as an argument and returns a number representing number of words that occurred more than once in that string, for example:
    
// countDuplic('one two one three two'); //=> 2
// countDuplic('one two one three two two one'); //=> 2
// countDuplic('one two one three two three'); //=> 3
// countDuplic('flower cat cat dog flower dog'); //=> 3

// input: string
// output: number (of words appearing more than once)

// break up into wordsArray
// loop through wordsArray, keeping index at 0
// find duplicate
//   assign compareElem to current element
//   loop through other elements
//     if match then,
//       remove current element
//       increment counter
//   at the end of loop, invoke shift()
// move on to next word

function countDuplic(string) {
  let wordsArray = string.split(' ');
  let count = 0;

  for (let idx = 0; idx < wordsArray.length; idx += 0) {
    let compareElem = wordsArray[idx];
    for (let foo = 1; foo < wordsArray.length; foo += 1) {
      if (wordsArray[idx] === wordsArray[foo]) {
        count += 1;
        wordsArray.splice(wordsArray.lastIndexOf(wordsArray[foo]), 1);
      }
    }
    wordsArray.shift();
  }
  return count;
}
