/*
* Author: Landon Wells <ljwells@ucsc.edu>
* Created 21 November
* License: Public Domain
*/

var endpoint = "https://api.thecatapi.com/v1/images/search";

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
})

// If the request succeeds
// data is passed back
.done(function(data) {
    console.log("Success:", data);
    var imageURL = data[0].url;
    console.log("URL:", imageURL);
    $("#output").html(imageURL);
    imageObj = $("<img>").attr("src", imageURL);
    $("#output").append(imageObj);

})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
});
}

$("#activate").click(getAPIData);
