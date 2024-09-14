/*
Using destructuring assignment syntax and the spread operator, write a function will capitalize the
first letter of a string.
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
Output:
Foobar
Nodejs
*/

const capitalize = ([w, ...rw]) => w.toUpperCase() + rw.join('').toLowerCase();

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
