// 1) Given the following code, how can you access the 
// name of the person?

// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };

// console.log(`person.name: ${person.name}`);
// console.log(`person[name]: ${person['name']}`);


// 2) Which of the following values are valid keys for an object?

// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'

// they're all valid. object keys are coerced into strings if they are not already strings. in the above example there will be keys with duplicate names, since non-string keys are coerced into strings; this would likely be a problem.

// 3) Use object literal syntax (e.g., { key: value, ... } 
// notation) to create an object that behaves as an array 
// in a for statement. The object should contain at 
// least 3 elements. You should place your code between the braces in the let statement:

// let myArray = {
//   0: 'imNumberOne',
//   1: 2,
//   2: true,
//   3: '4',
//   length: 4
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// console.log(myArray);


// 4) Create an array from the keys of the object obj below, with 
// all of the keys converted to uppercase. Your implementation 
// must not mutate obj.

// The order of the array does not matter.

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// // testing for/in loop:


// let objKeys = Object.keys(obj);
// console.log(objKeys);

// let updKeys = objKeys.map((key) => 
//   key.toUpperCase()
// );

// console.log(`updKeys: ${updKeys}`);

// 5) Create a new object named myObj that uses myProtoObj 
// as its prototype.

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObject = Object.create(myProtoObj);
// let myKeys = Object.keys(myProtoObj);
// console.log(myKeys[0]);

// console.log(`${myKeys[0]}: ${myObject.foo}`);
// console.log(myObject);


// 6) Which of the following values are primitive values? 
// Which are objects? Which are neither?

    // "foo" => primitive
    // 3.1415 => primitive
    // [ 'a', 'b', 'c' ] => object
    // false => primitive
    // foo => neither (this is an identifier, used for naming vars and functions)
    // function bar() { return "bar"; } => object
    // undefined => primitive
    // { a: 1, b: 2 } => object

    //100% CORRECT!! :)



// 7) Add a qux property with value 3 to the myObj object 
// we created in the previous exercise. Now, examine the 
// following code snippets:

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;

// Without running this code, can you determine whether these 
// two snippets produce the same output? Why?

// Snippet 1

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });

// Snippet 2

// for (let key in myObj) {
//   console.log(key);
// }

// Cam's Answer: They do produce the same output. snippet 1 
// uses the built-in Object.keys prototype function to extract
// the keys as an ordered array of strings. The forEach loop then 
// logs each key individually to console. snippet 2 simply loops
// through the object using the for/in loop. In both instances,
// ES6+ and above guarantees the order for an object's property keys.
// the order in both cases is the order in which the keys get
// added to the object.

// Incorrect, this is an inheritance issue, specifically objKeys
// only gets the object's own keys and doesn't return any keys
// from the prototype object(s).

// LS answer: We can add a conditional to snippet 2 to get 
// the same output from for..in: all we need to do is check 
// whether the key is myObj's own property:
// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }


// 8) Create a function that creates and returns a copy of an 
// object. The function should take two arguments: the object 
// to copy and an array of the keys that you want to copy. Do 
// not mutate the original object.

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(sourceObj, arrKeys) {
  // initialize empty destObj
  // let destObj = {};

  // if keys exist, loop through them and assign sourceObj to destObj
//   if (arrKeys) {
//     arrKeys.forEach(element => {
//       destObj[element] = sourceObj[element];
//     });
//     return destObj;
//   }
//     // if keys dont exist copy entire sourceObj into destObj
//   else {
//     return Object.assign(destObj, sourceObj);
//   }
// }

// let copiedObj = copyObj(objToCopy, ['bar', 'qux', 'x']);

// The function should let you omit the array of keys argument 
// when calling the function. If you do omit the argument, the 
// function should copy all of the existing keys from the object.

// Here are some examples for your reference:

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }


// 9) What does the following program log to the console? Why?

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);
// describe what above does
// passes foo (obj) to bar function, which reassigns foo.a to 'hi'

// passes qux (variable) to bar function, which reassigns qux to 'hi' - WRONG
// argument 2 is block scoped so qux is set to 'hi' only within the block - WRONG AGAIN
// 

// console.log(foo.a); //outputs 'hi'

// console.log(qux); //outputs 'hi' - WRONG - bar func does not change qux var in global scope




// 10) How many primitive values are there in the following 
// expression? Identify them. How many objects are there in 
// the expression? Identify those objects.

// [1, 2, ["a", ["b", false]], null, {}]

// 1, 2, null are primitive values, so 3 total
// ["a", ["b", false]] is an Array, which is an Object,
// {} is an empty Object, so 2 objects total
// Cam's answer: 3 primitives, 2 objects total **WRONG**

// **break it down further**
// 1, 2, "a", "b", false, null are primitives = 6
// OBJECTS: entire array is an object, next inner array (object), 
// innermost array (object), empty object = 4 objects total
// There are 6 primitive values and 4 objects total




// 11) Write some code to replace the value 6 in the 
// following object with 606:

// You don't have to search the object. 
// Just write an assignment that replaces the 6.

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };



// console.log(obj['bar']);
// obj.bar[3].xyz = 606;
// console.log(obj['bar']);
// console.log(obj.bar[3]['xyz']);


// 12) Consider the following code:
// As written, this code will raise an error on line 6. 
// Without creating a new function or changing lines 5 or 6, 
// update this code to work as intended.

// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// FUNCTIONS ARE OBJECTS, take a reference to foo function
// and assign it to bar
// let bar = foo;

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"



// 13) Consider the following code:

// As written, this code will raise an error on line 5. 
// Without modifying foo, update this code to print the 
// desired text.

// function foo(bar) {
//   console.log(bar());
// }

// foo(function() { return "Welcome" });    // Should print 'Welcome'
// foo(function() { return 3.1415 });    // Should print 3.1415
// foo(function() { return [1, 2, 3] });    // Should print [1, 2, 3]



// 14) Identify all of the variables, object property names,
//  primitive values, and objects shown in the following code
//   (assume the code has not been executed). Don't 
//   panic if you miss a few items - this exercise is 
//   more challenging than it looks.

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Cam's answer:
// variables: hello, greeting, name, xyzzy, howdy, foo
// 
// obj prop names: a, b, c, d
// primitive values: ' ', 1, 2, 3, 4, 5
// objects: food, [3, 4, 5], d

// LS Answer:

// Variables: hello, xyzzy, greeting, name, howdy, 
// and foo. Remember that function names and parameters 
// are variables. In addition, constants created with 
// const are variables that can't be reassigned. Property
//  names in an object are not variables.

// Property Names: a, b, c, d. It's also worth noting that
//  array indexes are property names, so 0, 1, and 2 are
//   property names for the [3, 4, 5] array. (Don't worry
//    if you missed the array indexes as property names.)

// Primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', and 'Grace'
//  are the most obvious primitive values. It's worth 
//  noting that object property names are usually 
//  strings, and strings are primitive values. Thus, we
//   should also include 'a', 'b', 'c', and 'd' in the 
//   list and 0, 1, and 2 for the array indexes of 
// [3, 4, 5].

// Objects: The functions hello and xyzzy are both objects,
//  as are the following:
//     { a: 1, b: 2, c: [3, 4, 5], d: {} }
//     [3, 4, 5]
//     {}.

// Since we didn't run the code, 'Hi Grace' is not one
//  of the primitive values in this code. That primitive
//   won't be created until we run the code.

// Major takeaways: 
// - object property names are strings and strings are 
// primitive values,
// - array indexes are property names
// - function names and parameters are variables


// Variables: bar, arg1, arg2, foo, qux, result

// Property Names: abc, def, ghi, jkl, mno, pqr,
// indices of [1, 2, 3, [4, 5, 6]]: 0, 1, 2, 3
// indices of [4, 5, 6]: 0, 1, 2


// Primitive values: 
// abc, def, ghi, jkl, mno, pqr, 'Hello', 1, 2, 3, 4, 5, 6
// indices of [1, 2, 3, [4, 5, 6]]: 0, 1, 2, 3
// indices of [4, 5, 6]: 0, 1, 2
// null, NaN, 'Victor', 'Antonina'

// Objects: bar,
// {
//   abc: [1, 2, 3, [4, 5, 6]],
//   def: null,
//   ghi: NaN,
//   jkl: foo,
//   mno: arg1,
//   pqr: arg2,
// }, 
// [1, 2, 3, [4, 5, 6]], 
// [4, 5, 6], 

