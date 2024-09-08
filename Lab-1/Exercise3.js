// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

var prompt = require('prompt-sync')({sigint:true});

function right(str){
    if(str.length >= 3){
       let lastThree = str.slice(-3);
       let beginning = str.slice(0, -3);
       let right = lastThree + beginning;
       return right;
    }
    else if(str.length > 0 && str.length < 3){
        return str;
    }
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
