/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 6 November
* License: Public Domain
*/

function sortUserName(userName) {
  // split the array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // connect the string back
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

  // add in button
  var button = document.getElementById('my-button');
  button.addEventListener('click', function() {
    inputValue = document.getElementById('user-name').value;
    var sortedName = sortUserName(inputValue);
    console.log("Results", inputValue);
    document.getElementById("output").innerHTML = sortedName;
  })
