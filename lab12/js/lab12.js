/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 11 November
* License: Public Domain
*/

// Return: Donatello, Leonardo, Raphael, or Michelangelo
// depending on length of mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Donatello"
  }
  else if (mod == 1) {
    return "Leonardo"
  }
  else if (mod == 2) {
    return "Raphael"
  }
  else if (mod == 3) {
    return "Michelangelo"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var tmnt = sortingHat(name);
  newText = "<p>This is your Teenage Mutant Ninja Turtle: " + tmnt + "</p>";
  document.getElementById("output").innerHTML = newText;
})
