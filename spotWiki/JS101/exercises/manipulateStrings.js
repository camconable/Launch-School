 /** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = { text: "Remove occurances of the letter e after the word 'after' in this sentence" }
Object.freeze(obj);

/**
 * BONUS: 
 * A single function should satisfy the strings defined 'obj' and the bonus objects below
 * The function should only take a single argument of type object
 * The function should be able to accommodate any word between the single quotes
 */

const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" }
const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" }
Object.freeze(bonusObj1);
Object.freeze(bonusObj2);

/** for loop - function name: forSolution */

forSolution(obj);

function forSolution(obj) {

  let objString = obj.text;
  let searchTerm = objString.slice(objString.indexOf("'") + 1, objString.lastIndexOf("'"));

  let string1 = objString.slice(0,
    objString.indexOf(searchTerm) + searchTerm.length);
  let string2 = objString.slice(objString.indexOf(searchTerm)
  + searchTerm.length + 1, objString.length - 1);

  let finalString = `${string1} `;

  for (const char of string2) {
    if (char !== 'e') {
      finalString += char;
    }
  }

  console.log(finalString);
  return finalString;
}

/** while loop - function name: whileSolution */



/** do while loop - function name: doWhileSolution */

/** forEach iteration method  - function name: forEachSolution */

/** filter iteration method  - function name: 'filterSolution' */

// map iteration method


// reduce iteration method