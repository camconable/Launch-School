// const readline = require('readline-sync');
// const MESSAGES = require('./rps_messages.json');
// const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_2 = {
  r   : "rock",
  p   : "paper",
  sc  : "scissors",
  sp  : "spock",
  l   : "lizard"
};


function isValid(input) {
  return  Object.keys(VALID_CHOICES_2).includes(input) ||
          Object.values(VALID_CHOICES_2).includes(input);
}

function getFullChoice(input) {
  for (let prop in VALID_CHOICES_2) {
    if (input === prop || input === VALID_CHOICES_2[prop]) {
      return VALID_CHOICES_2[prop];
    }
  }
}

function getAndValidateChoice() {
  // get choice
  let choice = readline.question().toLowerCase();
  // while invalid, repeat
  while (!isValid(choice)) {
    choice = readline.question().toLowerCase();
  }
  // return full choice
  return getFullChoice(choice);
}

// console.log(getFullLengthChoice('s', VALID_CHOICES_2));
// console.log(isValid('sc'));
// console.log(isValid('spo')); // => false
// console.log(isValid('sp'));
// console.log(isValid('spock'));
// console.log(isValid('li')); // => false
// console.log(isValid('lizard'));
// console.log(isValid('r'));
// console.log(isValid('ro')); // => false


console.log(getFullChoice('r', VALID_CHOICES_2));
console.log(getFullChoice('ro', VALID_CHOICES_2));
console.log(getFullChoice('s', VALID_CHOICES_2));
console.log(getFullChoice('sp', VALID_CHOICES_2));
console.log(getFullChoice('sc', VALID_CHOICES_2));


// const TALLY_TO_WIN = 3;
// const conflictCharacters = computeConflictCharacters(VALID_CHOICES);
// const combinations = [
//   ['rock', 'scissors'],
//   ['scissors', 'paper'],
//   ['paper', 'rock'],
//   ['rock', 'lizard'],
//   ['lizard', 'spock'],
//   ['spock', 'scissors'],
//   ['scissors', 'lizard'],
//   ['lizard', 'paper'],
//   ['spock', 'rock'],
//   ['paper', 'spock']
// ];

// function prompt(msg) {
//   if (Object.keys(MESSAGES).includes(msg)) {
//     console.log(`=> ${MESSAGES[msg]}`);
//   } else {
//     console.log(`=> ${msg}`);
//   }
// }

// function displayWelcome() {
//   console.clear();
//   displayLongBreak();
//   prompt(`welcome`);
//   displayLongBreak();
//   readline.question(prompt(`pressEnter`));
// }

// function displayLongBreak(num = 1) {
//   let idx = 0;
//   while (idx < num) {
//     prompt(`breakLong`);
//     idx += 1;
//   }
// }

// function displayShortBreak() {
//   prompt(`breakShort`);
// }

// function computeConflictCharacters(VALID_CHOICES) {
//   let charArray = [];
//   let conflictCharArray = [];

//   VALID_CHOICES.forEach((element) => charArray.push(element[0]));

//   for (const element of charArray) {
//     if (itemCounter(charArray, element) > 1) {
//       conflictCharArray.push(element);
//     }
//   }
//   return removeDuplicates(conflictCharArray);
// }

// function itemCounter(array, index) {
//   return array.filter((x) => x === index).length;
// }

// function removeDuplicates(array) {
//   return array.filter((value, index) => array.indexOf(value) === index);
// }

// function findFullLengthChoice(input, array) {
//   for (const element of array) {
//     if (input.length === 1) {
//       if (input === element[0]) {
//         return element;
//       }
//     }
//     if (input.length === 2) {
//       if (input === (element[0] + element[1])) {
//         return element;
//       }
//     }
//   }

//   return null;
// }

// function validateAndDisplayChoice() {
//   prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
//   let choice = readline.question().toLowerCase();

//   conflictCharacters.forEach((element) => {
//     if (choice === element) {
//       console.log(`You entered: ${element},
// please enter something more specific.`);
//       choice = validateAndDisplayChoice();
//     }
//   });

//   if (choice.length <= 2) {
//     choice = findFullLengthChoice(choice, VALID_CHOICES);
//   }

//   while (!VALID_CHOICES.includes(choice)) {
//     prompt(`invalidChoice`);
//     choice = validateAndDisplayChoice();
//   }

//   return choice;
// }

// function playRoundGetWinner(roundNum) {

//   displayRound(roundNum);

//   let playerChoice = validateAndDisplayChoice();
//   let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
//   let computerChoice = VALID_CHOICES[randomIndex];

//   let winner = computeRoundWinner(playerChoice, computerChoice);
//   displayRoundWinner(playerChoice, computerChoice, winner);

//   return winner;
// }

// function displayRound(num) {
//   console.clear();
//   displayShortBreak();
//   prompt(`Round: ${num}!`);
//   displayShortBreak();
// }

// function computeRoundWinner(playerChoice, computerChoice) {
//   for (const element of combinations) {
//     if ((element[0] === playerChoice) && (element[1] === computerChoice)) {
//       return 'user';
//     } else if (
//       (element[0] === computerChoice) && (element[1] === playerChoice)) {
//       return 'computer';
//     } else {
//       continue;
//     }
//   }
//   return 'tie';
// }

// function displayRoundWinner(playerChoice, computerChoice, winner) {
//   console.clear();
//   displayShortBreak();
//   prompt(`You chose ${playerChoice}.`);
//   prompt(`Computer chose ${computerChoice}.`);
//   displayShortBreak();
//   if (winner === 'user') {
//     prompt(`userRoundWinner`);
//   } else if (winner === 'computer') {
//     prompt(`computerRoundWinner`);
//   } else {
//     prompt(`tie`);
//   }
//   displayShortBreak();
// }

// function incrementTally(winner) {
//   if (winner === 'user') {
//     return [1, 0];
//   } else if (winner === 'computer') {
//     return [0, 1];
//   } else {
//     return [0, 0];
//   }
// }

// function displayCurrentScore(userTally, computerTally) {
//   prompt(`currentScore`);
//   prompt(`You: ${userTally}`);
//   prompt(`Computer: ${computerTally}`);
//   displayShortBreak();
// }

// function computeGrandWinner(userTally, computerTally) {
//   if (userTally >= TALLY_TO_WIN) {
//     return 'user';
//   } else if (computerTally >= TALLY_TO_WIN) {
//     return 'computer';
//   }
//   return null;
// }

// function displayGrandWinner(userTally, computerTally) {
//   if (userTally >= TALLY_TO_WIN) {
//     readline.question(prompt(`pressEnter`));
//     console.clear();
//     displayLongBreak(3);
//     prompt(`userGrandWinner`);
//     displayLongBreak(3);
//   } else if (computerTally >= TALLY_TO_WIN) {
//     readline.question(prompt(`pressEnter`));
//     console.clear();
//     displayLongBreak(3);
//     prompt(`computerGrandWinner`);
//     displayLongBreak(3);
//   }
//   readline.question(prompt(`pressEnter`));
// }

// function goAgain() {
//   console.clear();
//   prompt(`playAgain`);
//   let answer = readline.question().toLowerCase();

//   while (!isYes(answer) && !isNo(answer)) {
//     prompt(`yesOrNo`);
//     answer = readline.question().toLowerCase();
//   }

//   if (isYes(answer)) {
//     return true;
//   } else if (isNo(answer)) {
//     return false;
//   }
//   return undefined;
// }

// function isYes(input) {
//   input = input.toLowerCase();
//   return (input === 'y' || input === 'yes');
// }

// function isNo(input) {
//   input = input.toLowerCase();
//   return (input === 'n' || input === 'no');
// }

// function goodbye() {
//   console.clear();
//   displayLongBreak(2);
//   prompt(`goodBye`);
//   displayLongBreak(2);
// }

// do {

//   let userTally = 0;
//   let computerTally = 0;
//   let grandWinner = null;
//   let roundNum = 1;

//   displayWelcome();

//   while (!grandWinner) {

//     let winner = playRoundGetWinner(roundNum);

//     userTally += incrementTally(winner)[0];
//     computerTally += incrementTally(winner)[1];

//     displayCurrentScore(userTally, computerTally);

//     displayGrandWinner(userTally, computerTally);

//     grandWinner = computeGrandWinner(userTally, computerTally);
//     roundNum += 1;
//   }

// } while (goAgain());

// goodbye();