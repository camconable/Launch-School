// Are we moving?

// Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // evaluates to true

// Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

// we do need parentheses because JavaScript's operator precedence dictates that logical AND takes precedence over logical OR. The parenthesis above tells us to evaluate the AND last. The lack of parenthesis would have evaluate the AND operands before OR.