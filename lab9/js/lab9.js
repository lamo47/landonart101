/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 27 October
* License: Public Domain
*/

// find the element
var outputEl = document.getElementById('output');
// create a new element
var new1El = document.createElement("p");
outputEl.appendChild(new1El);
// change text of the new element
new1El.innerHTML = "F#$& the Dodgers!";
// create another new element
var new2El = document.createElement("p");
outputEl.appendChild(new2El);
// change text of the new element
new2El.innerHTML = "Let's Go Padres!";
// create another new element thats a button
var new3El =document.createElement("button");
outputEl.appendChild(new3El);
// name the button
new3El.innerHTML = "Go Dodgers";
// change what the button says after clicking it
new3El.addEventListener("click", function(){
  alert("Go, Dodgers suck");
});

// change the css styling of elements within JS
document.getElementById("output").
style.marginLeft = "1600px";

document.getElementById("output").
style.position = "absolute";
