var subject = [something];

function renderButtons() {
  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();
  for (var i = 0; i < subject.length; i++) {
    console.log(button);
    var a = $("<button>");

    // a.addClass("subject");

    // a.attr("data-name", subject[i]);

    //     $("button").on("click", function() {
    //       a.text(subject[i]);

    //       //   $("#buttons-view").append(a);

    //       var subject = $(this).attr("data-subject");
    //     });
    //   }
    // }

    // // This function handles events where one button is clicked
    // $("#add-movie").on("click", function(event) {
    //   var queryURL =
    //     "https://api.giphy.com/v1/gifs/search?q=" +
    //     subject +
    //     "&limit:10&api_key=VECFdjY69o8EzBu57gpUbUL69r5cKf6E";

    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     console.log(response);
  }
}
// .then(function(response) {
//     // Storing an array of results in the results variable
// var results = response.data;
