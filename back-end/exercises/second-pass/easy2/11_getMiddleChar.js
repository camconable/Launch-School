// Get Middle Character

// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// input: string with spaces
// output:
  // if odd: return middle 1 character
  // if even: return middle 2 characters

// if string.length % 2 === 1
// get middle index of odd: math.floor(string[string.length/2])
// get middle indexes of even: 
  // first: string[string.length/2]
  // second: string[(string.length/2) + 1]
  
function centerOf(string) {
  let stringArray = string.split('');
  let middleChar = [];
  let middleIndex = stringArray.length / 2;

  if (stringArray.length % 2 === 1) {
    middleChar.push(stringArray[Math.floor(middleIndex)]);
  } else {
    middleChar.push(stringArray[middleIndex - 1]);
    middleChar.push(stringArray[middleIndex]);
  }

  return middleChar.join('');
}