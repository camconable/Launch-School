function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

function power(num, pow) {
  let total = 1;
  for (let elem = 1; elem <= pow; elem += 1) {
    total *= num;
  }
  return total;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(power(5, 3));