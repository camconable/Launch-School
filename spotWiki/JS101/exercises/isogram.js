// A word in which no letter of the alphabet occurs more than once. Dimitri Borgmann's longest example: dermatoglyphics, the study of skin markings or patterns on fingers, hands, and feet, and its application, especially in criminology.

// - exercise:

// Create a function that takes one string as an argument and returns a boolean value, true if the word is a isogram and false if it's not. For example:


console.log(isIsogram('dermatoglyphics')); // true
console.log(isIsogram('alabama')); //false

// input: string
// output: boolean, true if isogram false otherwise
// isogram: word in which no letter occurs more than once

// convert to stringArray, sort
// loop through stringArray
//   if current elem === next elem, return false
// return true

function isIsogram(string) {
  let stringArray = string.split('').sort();
  for (const [idx, char] of stringArray.entries()) {
    if (char === stringArray[idx + 1]) return false;
  }
  return true;
}