// 6) Will this program produce an error when run? Why or why not?

// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }

// console.log(FOO);

// no error is produced. the const declared in the block on line 3 shadows the const declared on line 1, but goes out of scope on line 4. 'bar' is logged to the console.