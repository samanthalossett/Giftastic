var topics = ["Game of Thrones", "Handmaids Tale", "BigLittleLies"];
var whatUserTypes = localStorage.getItem("#user-input");

$(document).ready(function () {       //"now start loading javasctipt and JQ"//
    console.log("ready!");

    function appendButtons() {
        $("#buttons").empty();  // this makes everything in TOPICS array into a button//
        for (var i = 0; i < topics.length; i++) {
            $("#buttons").append(`<button class= "buttons" value= "${topics[i]}" >  ${topics[i]}  </button>`);
            console.log(topics);
            ////////////////////////////
            $(".buttons").on("click", function (event) {   // this is linking the clicked buttons to the GIF API, then clears//
                event.preventDefault();
                // $("#added").empty();
                console.log("buttons clicked is working");
                var extractedButtons = $(this).val(); // "this" function //
                console.log("extracted buttons var is working:" + " " + extractedButtons);
                ///////////////////////////
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + extractedButtons + "&api_key=ZzkFtzViT9yOr6IEBOCtJxV7nBoghEVi&limit=10";
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    $("#added").empty();
                    for (var j = 0; j < response.data.length; j++) {
                        var still=response.data[j].images.downsized_still.url;
                        var animated=response.data[j].images.downsized.url;
                        var gifImage= $("<img>");
                        gifImage.addClass("images");
                        gifImage.attr("data-still", still);
                        gifImage.attr("data-animated", animated);
                        gifImage.attr("src", still);
                        gifImage.attr("state", "still")
                        $("#added").append(gifImage);
                     
                    }
                })
            })
        }
    }
    appendButtons();

    $(document).on("click", ".images", function(){
                console.log("onlick images is working");
                var state=$(this).attr("state")
                if (state=== "still"){
                    $(this).attr("state", "animated");
                    $(this).attr("src", $(this).attr("data-animated"));

                }else {
                    $(this).attr("state", "still");
                    $(this).attr("src", $(this).attr("data-still"));
                }
    })

    $("#add-user-input").on("click", function (event) {    //this event makes users input into a button in the existing array, then clears text box //
        event.preventDefault();
        console.log("the onclick is working");
        var whatUserTypes = $("#user-input").val().trim();
        console.log("value of whatUserTypes is working:" + " " + whatUserTypes);
        topics.push(whatUserTypes);
        $("#user-input").val(" ");
        appendButtons();
        $("#added").empty();
    })

});


