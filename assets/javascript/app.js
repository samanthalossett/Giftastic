var topics = ["Game of Thrones", "Handmaids Tale", "Big Little Lies"];
var whatUserTypes = localStorage.getItem("#user-input");
var moviesAdded = 0;

// AJAX/API stuff//

$(document).ready(function () {       //"now start loading javasctipt and JQ"//
console.log("ready!");

function appendButtons() {
    $("#buttons").empty();  // this makes everything in TOPICS array into a button//
    for (var i = 0; i < topics.length; i++) {
        $("#buttons").append(`<button class= "buttons" value=  ${topics[i]} >  ${topics[i]}  </button>`);
        console.log(topics);
    }
}
appendButtons();

$("#add-user-input").on("click", function (event) {    //this event makes users input into a button in the existing array, then clears //
    event.preventDefault();
    console.log("the onclick is working");
    var whatUserTypes = $("#user-input").val().trim();
    console.log(whatUserTypes);
    topics.push(whatUserTypes);
    $("#user-input").val(" ");
    localStorage.setItem("#user-input", whatUserTypes); //not working//
    moviesAdded++;
    appendButtons();
    $("#added").empty();
})
$(".buttons").on("click", function(event){
    event.preventDefault();
    $("#added").empty();
    console.log("buttons clicked is working");
    var extractedButtons=$(this).val();
    console.log(extractedButtons);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + extractedButtons + "&api_key=ZzkFtzViT9yOr6IEBOCtJxV7nBoghEVi&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            console.log(response);
            for (var j=0; j<response.data.length; j++){
                $("#added").append(`<img class=images src= ${response.data[j].images.downsized.url}>`);
                
            }
        })
        
    })
});