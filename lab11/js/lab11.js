/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 11 November
* License: Public Domain
*/

// call for button
$("#button1");
// add an event listener to button
$("button").click(function(){
  alert("My Challenges");
});
// call for next button
$("#button2");
// add an event listener to button
$("button").click(function(){
  alert("My Problems");
});
// call for next button
$("#button3");
// add an event listener to button
$("button").click(function(){
  alert("My Results");
});

// add another event listener to first button
$("#button1").click(function(){
  // toggle the class of "challenges" div
  $(".challenges").toggleClass("special");
});
