/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 11 November
* License: Public Domain
*/

$("#button1");
$("button").click(function(){
  alert("My Challenges");
});

slideShowElement = $("#button2");
$("button").click(function(){
  alert("My Problems");
});

slideShowElement = $("#button3");
$("button").click(function(){
  alert("My Results");
});


$("#button1").click(function(){
  $(".challenges").toggleClass("special");
});
