// Is it true?

// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// "It's true" is never output because on line 11, the if statement JavaScript is comparing a string value to a boolean value using strict equality. They match values but do not match types. All object properties are stored as strings or symbols. 

// If you want "It's true" to output, you have to wrap true in quotes to make it a string. Line 11 should look like this:   if (prop === 'true') {