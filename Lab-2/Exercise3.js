/*
Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
the first character of each Color in the following array..
*/

const capitalize = ([w, ...rw]) => w.toUpperCase() + rw.join('').toLowerCase();

const colors = ['red', 'green', 'blue'];

var capColors = colors.map((c) => capitalize(c));

console.log(capColors);
