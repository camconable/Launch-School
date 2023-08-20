// Repeat

// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

console.log(repeat(6, 'ha')); // 'hahaha'

function repeat(num, str) {
  let forStr = '';
  for (let i = 0; i < num; i += 1) {
    forStr += str;
  }
  return forStr;
}