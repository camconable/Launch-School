/* eslint-disable max-len */
// Create a function that takes a string as an argument and a number and console log the string rotated by one to the right as many times as the second argument. For example:


console.log(rotate('abcdefg', 3));
//'bcdefga'
//'cdefgab'
//'defgabc'

// input: string, number
// output: string, rotated by one to the right as many times as the second argument

// 1 rotation: shift(), push()
// rotate x times using loop, where x is second argument

function rotate(string, numTimes) {
  let stringArray = string.split('');
  for (let idx = 0; idx < numTimes; idx += 1) {
    let firstElem = stringArray.shift();
    stringArray.push(firstElem);
  }
  return stringArray.join('');
}