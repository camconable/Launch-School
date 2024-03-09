// a word or name made up of two identical parts, such as so-so, tom-tom or Pago Pago.

// - exercise:

// Create a function that takes a string as an argument and returns a boolean value, true if the word is a tautonym and false if it's not. For example:


console.log(isTautonym("Pago Pago")); //true
console.log(isTautonym("Pago-Pago")); //true
console.log(isTautonym('abcd')); //false

// input: string, could contain spaces
// output: boolean, true if tautonym
// tautonym: word or name made of up two identical parts

// remove whitespace, dash, or other char from string
//   if string contains
// convert to lowercase
// divide in half
//   string1: slice idx 0 to (array.length/2 - 1)
//   string2: slice idx array.length/2 to (array.length - 1)
// compare halves as strings
// return true if equal

function isTautonym(string) {
  let miscChars = [' ', '-', '_'];
  let stringArray = string.toLowerCase().split('');
  for (let idx = 0; idx < stringArray.length; idx += 1) {
    if (miscChars.includes(stringArray[idx])) {
      string = string.replaceAll(stringArray[idx], '').toLowerCase();
    }
  }
  let cleanedStringArray = string.split('');
  let firstHalf = cleanedStringArray.slice(0, ((cleanedStringArray.length / 2))).join('');
  let secondHalf = cleanedStringArray.slice(((cleanedStringArray.length / 2)),
    cleanedStringArray.length).join('');

  return firstHalf === secondHalf;
}