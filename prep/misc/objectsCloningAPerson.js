// Cloning a Person

// Write a function clone that takes an object as argument and returns a shallow copy of that argument. A shallow copy returns a new object that is a copy of the original object. However, only the object itself and any properties with primitive values are duplicated. Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.

// For instance, consider the following object:

// let obj = {
//   number: 1,
//   string: 'abc',
//   array: [1, 2, 3],
// };

// If we make a shallow copy of obj, we'll create a new object that has the same 3 properties as obj:

// let objCopy = clone(obj);
// console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

// Note that all 3 properties have the same value. However, what happens if we modify these values in one of the two objects and then inspect both objects?

// objCopy.number = 2;
// objCopy.string = 'xyz';
// objCopy.array.push(4);
// console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
// console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }

// As you might expect, the values for the number and string keys changed in objCopy, but not in obj. However, when we mutated the value of objCopy.array, it also mutated that value of obj.array. That's because a shallow copy only copies pointers for nested objects; since arrays are objects, the shallow copy just copied the pointer to the original array to objCopy. If you're wondering why this happens, you might want to review Variables as Pointers section in the Introduction to JavaScript book.

function clone(obj) {
  //declare new empty object
  let newObj = {};

  // loop thru all obj key's to check type of each value
  for (const [key, value] of Object.entries(obj)) {

    // check if (typeof) key's value is primitive, add key and value to new object 
    if (typeof value !== 'object') {
      newObj[key] = value;
    }
    // if (typeof) key's value is object, copy key and pointer to value on new object
    else {
      newObj[key] = obj[key];
      console.log(newObj);
    }
    
  }
  
  // return new object
  return newObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

// console.log(`person.age: ${person.age}`);       // 34
// console.log(`clonedPerson.age: ${clonedPerson.age}`); // 33

// console.log(person);
// console.log(clonedPerson);

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false



// LS ANSWER:

// Solution

// function clone(obj) {
//   return Object.assign({}, obj);
// }

// Discussion

// There are different ways to clone an object. Arguably, the easiest one is to use the Object.assign method. Note that this method only creates a shallow copy, which means that if you mutate one of the values in person, they will be mutated in clonedPerson as well. For example:

// let person = {
//   title: 'Duke',
//   name: {
//     value: 'Nukem',
//     isStageName: true
//   },
//   age: 33
// };

// let clonedPerson = clone(person);
// person.age = 34;

// console.log(person.age);       // 34
// console.log(clonedPerson.age); // 33

// person.name.isStageName = false;
// console.log(person.name.isStageName);       // false
// console.log(clonedPerson.name.isStageName); // false