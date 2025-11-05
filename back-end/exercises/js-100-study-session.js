// What will be the output on the last line of code?
// 'mutated' is output on the last night
// we are accessing the value on the property a on the object addOne.
// 

// What concept does it demonstrate?

function addOne(num) {
  return {};
}

function mutater(adder) {
  adder['a'] = 'mutated'
}

mutater(addOne());
console.log(addOne.a); 

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

const a = 1 && 2; // a = 2
const b = 0 || 3; // b = 3

console.log(a);
console.log(b);

if (a > b) {
  c = a;
} else {
  c = b;
}

console.log(c);