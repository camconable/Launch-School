// Greet 1

// How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// What happens when we call greet(undefined)?

greet(undefined);

// undefined is passed to the function, undefined is coerced to 'undefined', then concatenates to the string ', world!'. the result is 'undefined, world!' is logged to the console

// nope - the default parameter is used and 'Hello, world!' is logged to the console

