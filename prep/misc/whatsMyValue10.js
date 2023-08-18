const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// What's my value? (Part 10)

// What will the following code log to the console and why? Don't run it until you have tried to answer.


// Cam's answer: it will log a = {firstName: 'Jane', lastName: 'Doe'} to the console.

// The function is able to mutate properties on the const-declared a object because a contains a pointer to the variable and not the value of the object, itself. a only contains the reference to the object. You can mutate properties of objects declared with const. If Object.freeze() was applied to the object a, this would not be the case.





// LS ANSWER: 

// Solution

// { firstName: 'Jane', lastName: 'Doe' }

// Discussion

// The fact that const variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to const variables can be mutated.