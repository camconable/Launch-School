// Madlibs

// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// I sometimes like to <verb1> spontaneously,
// it keeps the <noun1> alive and does so <adverb>
// My one bit of advice: Never forget to <verb2>
// your <adjective1> <noun2> before going to bed!

const rlSync = require('readline-sync');

function getInput(string) {
  if (string === 'adjective' || string === 'adverb') {
    return String(rlSync.question(`Enter an ${string}: `))
  }
  return String(rlSync.question(`Enter a ${string}: `));
}

function logMadLib(noun1, noun2, verb2, verb1, adjective1, adverb1) {
  console.clear();
  console.log(`I sometimes like to ${verb1} spontaneously,
it keeps the ${noun1} alive and does so ${adverb1}.
My one bit of advice: Never forget to ${verb2}
your ${adjective1} ${noun2} before going to bed!`);
  rlSync.question();
}

let verb1 = getInput('verb');
let noun1 = getInput('noun');
let adverb1 = getInput('adverb');
let verb2 = getInput('verb');
let adjective1 = getInput('adjective');
let noun2 = getInput('noun');

logMadLib(verb1, noun1, adverb1, verb2, adjective1, noun2);