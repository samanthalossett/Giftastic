var topics = ["Game of Thrones", "Handmaids Tale", "Big Little Lies"];
var whatUserTypes = localStorage.getItem("#added");
var moviesAdded = 0;

var queryURL = 
$(document).ready(function () {       //"now start loading javasctipt and JQ"//
    console.log("ready!");

    function appendButtons() {    
        $("#buttons").empty();  // this makes everything in TOPICS array a button//
        for (var i = 0; i < topics.length; i++) {
            $("#buttons").append("<button>" + topics[i] + "</button>");
            console.log(topics);
        }
    }
    appendButtons();

    $("#add-user-input").on("click", function (event) {
        event.preventDefault();
        console.log("the onclick is working");
        var whatUserTypes = $("#user-input").val().trim();
        console.log(whatUserTypes);
        topics.push(whatUserTypes);
        $("#user-input").val(" ");
        localStorage.setItem("#added", topics);
        moviesAdded++;
        appendButtons();
    })
});