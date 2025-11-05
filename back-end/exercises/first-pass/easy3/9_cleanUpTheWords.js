// Clean up the words

// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

function cleanUp(input) {

  let finalArray = [];
  let stringArray = input.split('');

  for (let idx = 0; idx < stringArray.length; idx += 1) {

    let currentElem = stringArray[idx];
    let prevElem = stringArray[idx - 1];

    if (isAlphabetical(currentElem)) {
      if (!isAlphabetical(prevElem)) {
        finalArray.push(' ');
      }
      finalArray.push(currentElem);
    }
  }
  return finalArray.join('');
}

function isAlphabetical (elem) {
  return !(elem === elem.toUpperCase());
}