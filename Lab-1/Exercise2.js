// Write a JavaScript program to find the largest of three given integers.

function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

console.log(max(1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

