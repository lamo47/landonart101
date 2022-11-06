/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 27 October
* License: Public Domain
*/

// Print the board before each turn
// return a formated string
function printBoard(board) {
  // Create a string to store output
  var output = '';
  console.log(board);
  // Loop through each row
  for (row=0; row<3; row++) {
    // Loop through each space
    for (space=0; space<3; space++) {
      // Print X, O, or Space
      console.log(row*3 + space);
      output += board[row*3 +space];
      // Print a | between
      if (space < 2) output += '|';
    }
    // Print a newline at the end
    output += '\n';
    // Print a horizontal line between
    if (row < 2) output += '-----\n';
  }
  return output;
}
function printBoard(board) {
  var output= '';
  for (row=0; row<3; row++) {
      for (space=0; space<3; space++) {
          console.log(row*3 + space);
          output += board[row*3 + space];
          if (space < 2) output += '|';
      }
      output += '\n';
      if (row < 2) output += '-----\n';
  }
  return output;
}
