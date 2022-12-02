/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 21 November
* License: Public Domain
*/

var endpoint = "https://xkcd.com/info.0.json";

function getAPIData() {
$.ajax({
    // API endpoint
    url: endpoint,
    // Any data to send
    // data: { id: 123},
    // POST or GET request
    type: "GET",
    // data type we expect back
    dataType : "json",

// If the request succeeds
// data is passed back
success: function(data) {
  console.log(data);
  $("#output").html("<h3>"+data.title);
  $("#output").append("<img src="+data.img+">");
  $("#output").append("<p>"+data.alt);
}

})
}

$("#activate").click(getAPIData);
