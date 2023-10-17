// ask user for their move
// computer will choose their move
// display who won/the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const conflictChar = computeConflictCharacter(VALID_CHOICES);

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function computeConflictCharacter (VALID_CHOICES) {
  let charArray = [];
  for (const element of VALID_CHOICES) {
    charArray.push(element[0]);
  }

  for (const element of charArray) {
    if (itemCounter(charArray, element) > 1) {
      return element;
    }
  }
  return null;
}

function itemCounter (value, index) {
  return value.filter((x) => x === index).length;
}

function findFullLengthChoice(input, longArr) {
  for (const element of longArr) {
    if (input.length === 1) {
      if (input === element[0]) {
        return element;
      }
    }
    if (input.length === 2) {
      if (input === (element[0] + element[1])) {
        return element;
      }
    }
  }
  return null;
}

function userWon(choice, computerChoice) {
  return ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock'));
}

function computerWon(choice, computerChoice) {
  return ((computerChoice === 'rock' && choice === 'scissors') ||
      (computerChoice === 'scissors' && choice === 'paper') ||
      (computerChoice === 'paper' && choice === 'rock') ||
      (computerChoice === 'rock' && choice === 'lizard') ||
      (computerChoice === 'lizard' && choice === 'spock') ||
      (computerChoice === 'spock' && choice === 'scissors') ||
      (computerChoice === 'scissors' && choice === 'lizard') ||
      (computerChoice === 'lizard' && choice === 'paper') ||
      (computerChoice === 'spock' && choice === 'rock') ||
      (computerChoice === 'paper' && choice === 'spock'));
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}.\nComputer chose ${computerChoice}.`);

  if (userWon(choice, computerChoice)) {
    prompt(`You win!`);
  } else if (computerWon(choice, computerChoice)) {
    prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
}

function displayAndValidateChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  if (choice === conflictChar) {
    console.log(`You entered: ${conflictChar}, please enter something more specific.`);
    choice = displayAndValidateChoice();
  }

  if (choice.length <= 2) {
    choice = findFullLengthChoice(choice, VALID_CHOICES);
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
    choice = findFullLengthChoice(choice, VALID_CHOICES);
  }

  return choice;
}

function wantsToGoAgain(answer) {
  return answer[0] === 'y';
}

function askToRepeat() {

  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`Please enter 'y' or 'n'`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}

let goAgain;

do {
  let choice = displayAndValidateChoice();

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  goAgain = askToRepeat();

} while (wantsToGoAgain(goAgain));

