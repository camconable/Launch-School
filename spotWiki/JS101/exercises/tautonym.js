// a word or name made up of two identical parts, such as so-so, tom-tom or Pago Pago.

// - exercise:

// Create a function that takes a string as an argument and returns a boolean value, true if the word is a tautonym and false if it's not. For example:


isTautonym("Pago Pago"); //true
// isTautonym('abcd'); //false

// input: string, could contain spaces
// output: boolean, true if tautonym
// tautonym: word or name made of up two identical parts

// define misc chars 
// remove whitespace, dash, or other char from string
//   if string contains
// convert to lowercase
// divide in half
//   string1: slice idx 0 to (array.length/2 - 1)
//   string2: slice idx array.length/2 to (array.length - 1)
// compare halves as strings
// return true if equal

function isTautonym(string) {
  let miscChars = "-, _, ".split(',');
  console.log(miscChars);
}