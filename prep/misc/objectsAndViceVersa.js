// ...and vice versa

// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};
console.log(obj);
for (let elem of nestedArray) {
  //get key
  let key = elem[0];

  //get value
  let val = elem[1];

  //push pair to object
  obj[key] = val;
}

console.log(obj);


// ALTERNATIVE SOLUTION:

// let person = Object.fromEntries(nestedArray);
// console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }