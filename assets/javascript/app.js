var topics = ["Game of Thrones", "Handmaids Tale", "Big Little Lies"];
var whatUserTypes = localStorage.getItem("#added");
// var userInput = [];
var moviesAdded=0;

// if (whatUserTypes){
//     userInput = whatUserTypes;
// }
$(document).ready(function () {       //"now start loading javasctipt and JQ"//
    console.log("ready!");


    function appendButtons() {
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
        userInput.push(whatUserTypes);

        var pTag = $("<p>");
        pTag.attr('id', "input-" + whatUserTypes);
        console.log(pTag);
        pTag.text(whatUserTypes);
        $("#added").append(pTag);
        console.log($("#added").append(pTag));
        $("#user-input").val(" ");
        localStorage.setItem("#added", userInput);
        moviesAdded++;
    })
});