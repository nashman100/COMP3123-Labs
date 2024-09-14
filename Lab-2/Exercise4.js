/*
Using array.proto.filter create a function that will filter out all the values of the array that are less
than twenty.
var values = [1, 60, 34, 30, 20, 5]
Output
[1, 5]
*/

var values = [1, 60, 34, 30, 20, 5]

var filterLessThan20 = values.filter((val) => val < 20);

console.log(filterLessThan20);
