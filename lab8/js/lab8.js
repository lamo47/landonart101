/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 27 October
* License: Public Domain
*/

function divide(x){
  return (x * .5);
}

// test function
console.log("What's half of 10? ", divide(10));
console.log("What's half of 100? ", divide(100));

array = [10, 44, 4000, 444, 94, 454]
console.log("My array", array);

var result = array.map(divide);
// should return [5, 22, 2000, 222, 47, 227]
console.log("Calculate half of array:", result);

var result = array.map(function(x){
  return (x * 2);
})
// should return [20, 88, 8000, 888, 188, 908]
console.log("Double the array:", result);
