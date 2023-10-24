const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const conflictCharacters = computeConflictCharacters(VALID_CHOICES);

function prompt(msg) {
  if (Object.keys(MESSAGES).includes(msg)) {
    console.log(`=> ${MESSAGES[msg]}`);
  } else {
    console.log(`=> ${msg}`);
  }
}

function displayWelcome() {
  console.clear();
  displayBreak();
  prompt(`welcome`);
  readline.question(prompt(`pressEnter`));
}

function displayBreak(num = 1) {
  let idx = 0;
  while (idx < num) {
    prompt(`break`);
    idx += 1;
  }
}

function displayRound(num) {
  console.clear();
  displayBreak();
  prompt(`Round: ${num}!`);
  displayBreak();
}

function computeConflictCharacters(VALID_CHOICES) {
  let charArray = [];
  let conflictCharArray = [];

  VALID_CHOICES.forEach((element) => charArray.push(element[0]));

  for (const element of charArray) {
    if (itemCounter(charArray, element) > 1) {
      conflictCharArray.push(element);
    }
  }
  return removeDuplicates(conflictCharArray);
}

function itemCounter(array, index) {
  return array.filter((x) => x === index).length;
}

function removeDuplicates(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

function findFullLengthChoice(input, array) {
  for (const element of array) {
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

function validateAndDisplayChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  conflictCharacters.forEach((element) => {
    if (choice === element) {
      console.log(`You entered: ${element}, please enter something more specific.`);
      choice = validateAndDisplayChoice();
    }
  });

  if (choice.length <= 2) {
    choice = findFullLengthChoice(choice, VALID_CHOICES);
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`invalidChoice`);
    choice = validateAndDisplayChoice();
  }

  return choice;
}

function displayCurrentScore(userTally, computerTally) {
  displayBreak();
  prompt(`The current score is:`);
  prompt(`You: ${userTally}`);
  prompt(`Computer: ${computerTally}`);
  displayBreak();
}

function displayRoundWinner(choice, computerChoice) {
  console.clear();
  displayBreak();
  prompt(`You chose ${choice}.`);
  prompt(`Computer chose ${computerChoice}.`);
  displayBreak();
  if (userWon(choice, computerChoice)) {
    prompt(`userRoundWinner`);
  } else if (computerWon(choice, computerChoice)) {
    prompt(`computerRoundWinner`);
  } else {
    prompt(`It's a tie!`);
  }
  displayBreak();
}

function displayGrandWinner(userTally, computerTally) {
  if (userTally >= 3) {
    displayBreak();
    prompt(`userGrandWinner`);
    displayBreak();
  } else if (computerTally >= 3) {
    displayBreak();
    prompt(`computerGrandWinner`);
    displayBreak();
  }
  readline.question(prompt(`pressEnter`));
}

function computeRoundWinner(choice, computerChoice) {
  if (userWon(choice, computerChoice)) {
    return 'user';
  } else if (computerWon(choice, computerChoice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function computeGrandWinner(userTally, computerTally) {
  if (userTally >= 3) {
    return 'user';
  } else if (computerTally >= 3) {
    return 'computer';
  }
  return null;
}

function askToRepeat() {
  console.clear();
  prompt(`playAgain`);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`yesOrNo`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function wantsToGoAgain(answer) {
  return answer[0] === 'y';
}

let goAgain;

do {

  let userTally = 0;
  let computerTally = 0;
  let grandWinner = null;
  let round = 1;

  displayWelcome();

  while (!grandWinner) {

    displayRound(round);

    let choice = validateAndDisplayChoice();
    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayRoundWinner(choice, computerChoice);

    let winner = computeRoundWinner(choice, computerChoice);

    if (winner === 'user') {
      userTally += 1;
    } else if (winner === 'computer') {
      computerTally += 1;
    }

    displayCurrentScore(userTally, computerTally);

    displayGrandWinner(userTally, computerTally);

    grandWinner = computeGrandWinner(userTally, computerTally);
    round += 1;
  }

  goAgain = askToRepeat();

} while (wantsToGoAgain(goAgain));


