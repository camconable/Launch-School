/* eslint-disable max-len */
// Create a function that takes a string as an argument and a number and console log the string rotated by one to the right as many times as the second argument. For example:


console.log(rotate('abcdefg', 3));
//'bcdefga'
//'cdefgab'
//'defgabc'

// input: string, number (numTimes)
// output: string, rotated by one to the right as many times as the second argument

// coerce string to array
// 1 rotation: shift(), push()
// rotate numTimes times using loop
// coerce array to string
// return string

function rotate(string, numTimes) {
  let stringArray = string.split('');
  for (let idx = 0; idx < numTimes; idx += 1) {
    let firstElem = stringArray.shift();
    stringArray.push(firstElem);
  }
  return stringArray.join('');
}