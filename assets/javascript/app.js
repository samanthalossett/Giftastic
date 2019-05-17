var topics = ["Game of Thrones", "Handmaids Tale", "Big Little Lies"];
var whatUserTypes = localStorage.getItem("#user-input");
var moviesAdded = 0;
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=ZzkFtzViT9yOr6IEBOCtJxV7nBoghEVi&limit=10";
      
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })

$(document).ready(function () {       //"now start loading javasctipt and JQ"//
    console.log("ready!");

    function appendButtons() {    
        $("#buttons").empty();  // this makes everything in TOPICS array into a button//
        for (var i = 0; i < topics.length; i++) {
            $("#buttons").append("<button>" + topics[i] + "</button>");
            console.log(topics);
        }
    }
    appendButtons();

    $("#add-user-input").on("click", function (event) {    //this event makes users tet into a button in the existing array, then clears //
        event.preventDefault();
        console.log("the onclick is working");
        var whatUserTypes = $("#user-input").val().trim();
        console.log(whatUserTypes);
        topics.push(whatUserTypes);
        $("#user-input").val(" ");
        localStorage.setItem("#user-input", whatUserTypes);

        moviesAdded++;
        appendButtons();
    })
$("#user-input").text(whatUserTypes.getItem());
});