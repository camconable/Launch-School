// Dot Notation vs Bracket Notation

// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2:

// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // ?

// Cam's answer: the first snippet will log the object {prefix: 'Pacific'} to console. The second snippet will not work. ocean[prefix] is not the correct syntax. ocean['prefix'] is the correct syntax.

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//LS ANSWER: incorrect on snippet 2. it outputs { Indian: 'Pacific' } to the console. 

// One important difference between bracket notation and dot notation is that bracket notation accepts expressions, including variables. So while ocean.prefix in Snippet 1 adds a property 'prefix' to the ocean object, this is different on line 4 of Snippet 2. 

// There we don't use the string 'prefix' but the variable prefix as key. That is, JavaScript looks up the value of prefix and uses it as the name of the property. Since the value of prefix is 'Indian', we are adding the property 'Indian' to the object. If we wanted to add a property 'prefix' using bracket notation, we would need to write ocean['prefix'].

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//cam's synthesis: in Snippet 2 - the value of the prefix variable is assigned 'Indian' in line 2. bracket notation passes the value stored in prefix ('Indian') as a property on the ocean object. it also assigns the key of prefix to 'Pacific'. This is due to the fact that bracket notation accepts expressions, including variables, whereas dot notation does not. In snippet 1 line 4, javascript is creating a new key and assigning it a value on the ocean object; it does not touch or use the prefix variable defined on line 2