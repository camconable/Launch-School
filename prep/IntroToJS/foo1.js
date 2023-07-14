{
  let foo = 'bar';
}

console.log(foo);
//this will return an error because the foo variable is block scoped, and not accessible by the console.log() outside that block. the let statement creates variables with block scope
//what kind of error?: ReferenceError: foo is not defined