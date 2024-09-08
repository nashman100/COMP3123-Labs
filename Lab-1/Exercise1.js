// Write a JavaScript program to capitalize the first letter of each word of a given string.

var prompt = require('prompt-sync')({sigint:true});

let str = prompt('Enter a string: ');

let splitStr = str.split(' ');

let capitalize = [];

for(let i = 0; i < splitStr.length; i++){
    let word = splitStr[i];
    let cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalize.push(cap);
}

let capitalizeStr = capitalize.join(' ');

console.log(capitalizeStr);



