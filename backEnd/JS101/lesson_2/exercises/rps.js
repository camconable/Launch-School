// ask user for their move
// computer will choose their move
// display who won/the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}.\nComputer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt(`You win!`);
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'paper')) {
    prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
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

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  goAgain = askToRepeat();
} while (wantsToGoAgain(goAgain));

