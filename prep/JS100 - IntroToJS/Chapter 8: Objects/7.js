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