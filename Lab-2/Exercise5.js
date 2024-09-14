/*
Using array.proto.reduce create calculate the sum and product of a given array.
console.log(calculateSum);
console.log(calculateProduct);
Output:
10
24
*/

var array = [1, 2, 3, 4]

const calculateSum = array.reduce((t,x) => t + x, 0);
const calculateProduct = array.reduce((t,x) => t * x, 1);

console.log(calculateSum);
console.log(calculateProduct);
