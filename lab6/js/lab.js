/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 22 September
* License: Public Domain
*/

// Define Variables
myTransport = ["Nissan 300zx", "roomates car", "bus", "skateboard"];
myMainRide = {
  make: "Nissan",
  model: "300zx",
  color: "Silver",
  year: 1987,
  age: function() {
    return 2022 - age;
  }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
  
