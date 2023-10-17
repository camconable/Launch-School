// Question 1

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

// Cam's answer:
// ['red', 'green', 'blue', 'yellow']

// updateColors is a mutating operation on the colors array. color variable
// has global scope and can be pushed to the array. The updateColors
// invocation passes the reference of colors to the function. When the array
// is mutated, it does not need to explicitly return the colors array
// in the function scope.

// Question 2

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

// Cam's answer:
// ['red', 'green', 'blue', undefined]
//

// The invocation on line 8 only passes colors array to the function,
// not color. Within the function scope, color is undefined.
// color being set to undefined is shadowing the global color variable.
// The push method is called on the colors array, passing undefined to the end
// of the array.

// Question 3

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);

// Cam's answer:
// ['red', 'green', 'blue', 'purple', 'pink']
//

// The function invocation includes arguments that match the function
// declaration, so updateColors runs twice and pushes both strings
// to the colors array. The array is mutated. In the function scope,
// the colors parameter points to the same array as the global colors
// variable.

// Question 4

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
//   return colors;
// }

// let newColors = updateColors(colors, color1);
// updateColors(newColors, color2);
// console.log(colors);

// Cam's answer:
// ['red', 'green', 'blue', 'purple', 'pink']
//

// on line 10, newColors is assigned the reference to the colors array
// (which currently contains ['red', 'green', 'blue', 'purple']), so newColors
// and colors are pointing to the same array. On line 11 we pass the
// reference of newColors to updateColors. In the function scope, the colors
// array pushes 'pink' onto the colors array. Again, colors and newColors
// contain references to the same array, so pushing 'pink' to the colors
// array will show the same for newColors. Logging either colors or newColors
// will log the same object, which is ['red', 'green', 'blue', 'purple', 'pink']

// Question 5

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let color = 'purple';
// let colors = ['red', 'green', 'blue'];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);

// Cam's answer:
// 'blue'
//

// Line 14 invokes removeColor and passes the reference to the colors array.
// In the removeColor function, color is assigned the returned value
// of pop() method invoked on the colors array. pop() returns the last
// element of that array, which is 'blue'. color is assigned 'blue' and returns
// this primitive value, then stores it in newColors. On line 15, addColors is
// invoked and passed the reference to colors array and also passed the value of
// the primitive 'purple', stored in color. On line 5, push() is invoked on
// colors array, passing it the value 'purple'. On line 6, the reference to
// the colors array is returned; nothing is logged after line 15 runs,
// but the colors array is mutated. After line 15 finishes, the colors
// array contains ['red', 'green', 'purple'], but this is not logged.
// The value of newColors is logged instead, which is 'blue'

// WRONG. SEE LS ANSWER:


// This logs the array ['red', 'green', 'blue'].

// In some ways this is similar to Exercise 4 except that here we
// have two functions, both of which mutate the array passed in.

// We declare and initialize the global variable color to the string
// 'purple' on line 1. On line 2, we declare and initialize the global
// variable colors to an array containing three
// strings, 'red', 'green', and 'blue'.

// We declare two functions:

// addColor which defines two parameters colors and color. It
// calls push on colors passing in color as an argument and then
// returns colors.
// removeColor which defines one parameter colors. It calls
// pop on colors and then returns colors.
// (Note that the colors object is mutated.)

// On line 14 we invoke removeColor, passing in the global colors
// variable as an argument. At this point the colors parameter within
// the scope of the function and the global colors variable both point
// to the same array ['red', 'green', 'blue']. We then mutate that
// array by calling the Array method pop on it. This removes the last
// element of the array, so the array which the colors parameter
// and the global colors variable both reference now has a value
// of ['red', 'green']. The function returns a reference to this
// array, and it is this reference to which newColors is assigned.

// A key aspect of this function though, is what happens on line 11.
// Here we assign color to the return value of colors.pop(). The pop
// method returns the element that it removes, so in this case that
// return value is the string 'blue'. What is color though? Since
// we haven't defined a color parameter, nor declared a new variable
// of that name within the scope of the function, we need to look
// outside of the function scope. The color referenced on line 11
// is the global color variable that we declared on line 1. Line
// 11 is therefore a reassignment of this variable.

// At this point, once we've invoked removeColor, the global color
// variable has a value of 'blue' and the global colors and newColors
// variables both point to the same array which has a value of
// ['red', 'green'].

// We then invoke addColor on line 15, passing in the colors and
// color global variables. Within the scope of the function the colors
// parameter points to the same array as the global colors variable
// and the color parameter has the value of 'blue'. We then append
// the value of color to the array and return a reference to the
// colors array (though we don't do anything with the return value).

// At this point the array to which the global colors and newColors
// variables both point has a value of ['red', 'green', 'blue'], and
// so this is what is output when newColors is logged on line 19.


// Cam's synthesis: I looked at this wrong and didn't take as much time
// as I should have.
// I thought line 11 was return color;, not return colors;. I thought
// the function returned the popped string value instead of the
// reference to the array. Also, on line 11, the global color
// variable is being reassigned to the popped value: 'blue'

// Question 6

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function capitalize() {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word); // returns Hello
// let exclaimedWord = exclaim(capitalizedWord); // returns Hello!!!

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);

// Cam's answer:
// hello!!!
// Hello
// hello!!!

// when nothing is passed as a parameter, even if there's an argument, the
// word referenced within the function is referring to the GLOBAL variable.
// Line 11 does many things. Predictably, '!!!' is concatenated to word,
// but more importantly, the global word variable is being reassigned
// to the new concatenated string, and returned. The reassignment of the
// global variable is tricky to see, but it's what we should
// pay attention to here.

// Question 7

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim(word) {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word); //
// let exclaimedWord = exclaim(capitalizedWord); //

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);

// Cam's answer:
// 'hello'
// 'Hello'
// 'Hello!!!'

// On line 9, word is assigned to the value 'hello'. On line 10,
// capitalize is invoked with the global word variable passed as an argument.
// The result of capitalize function is stored in capitalizedWord. Within
// the capitalize function, the word parameter is declared with function scope.
// We reference the first letter of word, 'h', and call the String method
// toUpperCase on it, returning 'H'. String method slice is called passing index
// 1 as an argument, which returns 'ello'. The two strings are concatenated to
// 'Hello', returned and stored in global variable capitalizedWord.

// On line 11, exclaim function is invoked with capitalizedWord argument passed
// to it. On line 5, the word parameter is defined and function scoped. On line
// 6, word is assigned the result of 'Hello' + '!!!', and this value is
// returned then assigned to exclaimedWord.

// Due to the fact that all functions in this example have parameters,
// they are all function scoped and are unable to access the outside
// global variables defined in lines 9 - 11. The program therefore "works
// as expected"

