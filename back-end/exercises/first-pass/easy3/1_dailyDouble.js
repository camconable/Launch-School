// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch(string) {

  let finalArray = [];
  let stringArray = string.split('');

  for (const [idx, elem] of stringArray.entries()) {
    if (elem !== stringArray[idx + 1]) {
      finalArray.push(elem);
    }
  }
  return finalArray.join('');
}