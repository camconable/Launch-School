// Welcome Stranger

// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// nameString based on array, joins every index separated by spaces, returns a string
// titleString based on object, concatenates the title key followed by the occupation key
// final string concatenates all strings together and logs. 

function greetings(arr, obj) {
  let nameString = arr.join(' ');
  let occupationString = `${obj.title} ${obj.occupation}`;
  return `Hello, ${nameString}! Nice to have a ${occupationString} around.`;
}