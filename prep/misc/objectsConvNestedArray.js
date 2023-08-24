// Convert an object to a nested array

// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let objArr = Object.entries(person);

console.log(objArr);