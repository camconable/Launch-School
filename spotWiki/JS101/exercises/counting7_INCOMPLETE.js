/* eslint-disable max-lines-per-function */
// Create a function that takes a string as an argument and returns a number representing occurrences of all letters that appears exactly twice, for example:
    
// countDuplic('123123'); //=> 3
countDuplic('abcdea ab'); //=> 1

// input: string, may include spaces
// output: number of letters repeating exactly twice

// remove whitespace from string
// remove first element, assign to var, compare to the rest:
// if match then increment count

function countDuplic(string) {
  let tempArray = string.split('').map((char) => char);
  let cleanedArray = tempArray.filter((char) => char !== ' ');

  let twiceCount = 0;
  for (let idx = 0; idx < cleanedArray.length; idx += 1) {
    let charCount = 0;
    for (let foo = 0; foo < cleanedArray.length; foo += 1) {
      // console.log(cleanedArray);
      if (cleanedArray[idx] === cleanedArray[foo]) {
        charCount += 1;
        console.log(`charCount: ${charCount}`);
      }
    }
    if (charCount === 2) {
      twiceCount += 1;
    }
  }

  console.log(`\ntwiceCount: ${twiceCount}`);
  return twiceCount;
}