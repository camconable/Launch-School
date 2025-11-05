// Exclusive Or

// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// Examples:

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

// input: 2 truthy operands of any type.
// output: a boolean result of xor applied to the operands

// if op1 is truthy and op2 is falsy, return true
// if op1 is falsy and op2 is truthy, return true
// otherwise return false

function xor(op1, op2) {
  return (op1 && !(op2)) || (!(op1) && (op2));
}