// input: function that takes an array and an object
// array will take 2 or more elements
// object will contain only 2 keys "title" and "occupation"

// output: string that includes:
//     string of name array separated by spaces
//     string of of that includes title and occupation

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// greetings function will be composed of 2 functions
//    displayName(arr) will take arr as argument and return string
//    displayOccupation(obj) will take obj as argument and return string
// greetings will assemble and return final string;

function displayName(arr) {
  let str = '';

  for (const elem of arr) {
    str = str + elem + ' ';
  }
  return str.trim('');
}

function displayTitle(obj) {
  return `${obj.title} ${obj.occupation}`;
}

function greetings(arr, obj) {
  return `Hello, ${displayName(arr)}! Nice to have a ${displayTitle(obj)} around.`;
}