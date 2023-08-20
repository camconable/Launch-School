// Case-insensitive Equality

// Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

let string1 = 'Polar Bear'.toUpperCase();
let string2 = 'Polar bear'.toUpperCase();
let string3 = 'Penguin'.toUpperCase();

console.log (string1 === string2);
console.log (string2 === string3);
console.log (string1 === string3);