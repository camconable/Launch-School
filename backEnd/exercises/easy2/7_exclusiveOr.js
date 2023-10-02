// input: 2 arguments
// if only 1 argument is truthy, return true; otherwise return fase
// output: (boolean) true or false

// examples:
// true xor false === true
// false xor true === true
// true xor true === false
// false xor false === false

// if val 1 is true and val 2 is false, return true
// if val 1 is false and val 2 is true, return true
// if val 1 is true and val 2 is true, return false
// if val 1 is false and val 2 is false, return false

function xor(val1, val2) {
  let val1Bool = !!val1;  // if truthy, coerce to boolean
  let val2Bool = !!val2;  // if truthy, coerce to boolean

  if (val1Bool === true && val2Bool === false) {
    return true;
  } else if (val1Bool === false && val2Bool === true) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

// further exploration: short circuit evaluation in the xor function
// does NOT make sense because both operands need to be evaluated
// against each other, EVERY time.