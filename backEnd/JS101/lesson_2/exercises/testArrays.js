const combinations = [
  ['rock', 'scissors'],
  ['scissors', 'paper'],
  ['paper', 'rock'],
  ['rock', 'lizard'],
  ['lizard', 'spock'],
  ['spock', 'scissors'],
  ['scissors', 'lizard'],
  ['lizard', 'paper'],
  ['spock', 'rock'],
  ['paper', 'spock']
];

function computeWinner(choice, computerChoice) {
  for (const element of combinations) {
    if ((element[0] === choice) && (element[1] === computerChoice)) {
      return 'user';
    } else if ((element[0] === computerChoice) && (element[1] === choice)) {
      return 'computer';
    } else {
      continue;
    }
  }
  return null;
}

console.log(computeWinner('rock', 'scissors')); // should be 'user'
console.log(computeWinner('scissors', 'paper')); // should be 'user'
console.log(computeWinner('rock', 'lizard')); // should be 'user'
console.log(computeWinner('lizard', 'paper')); // should be 'user'
console.log(computeWinner('rock', 'd')); // should be null
console.log(`\n`);
console.log(computeWinner('scissors', 'rock')); // should be 'computer'
console.log(computeWinner('paper', 'scissors')); // should be 'computer'
console.log(computeWinner('lizard', 'rock')); // should be 'computer'
console.log(computeWinner('paper', 'lizard')); // should be 'computer'