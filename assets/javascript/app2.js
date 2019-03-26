//  This function handles events where one button is clicked
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

$("button").on("click", function() {
  var subjects = $(this).attr("subjects");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    subjects +
    "&api_key=dc6zaTOxFJmzC&limit=10";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Storing an array of results in the results variable
    var results = response.data;

    // Looping over every result item
    for (var i = 0; i < results.length; i++) {
      // Only taking action if the photo has an appropriate rating
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        // Creating a div for the gif

        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");

        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.append(p);
        gifDiv.append(personImage);
      }

      $("#gifs-appear-here").prepend(gifDiv);

      //   $(".gif").on("click", function() {
      //     var state = $(this).attr("data-state");

      //     if (state === "still") {
      //       $(this).attr("src", $(this).attr("data-animate"));
      //       $(this).attr("data-state", "animate");
      //     } else {
      //       $(this).attr("src", $(this).attr("data-still"));
      //       $(this).attr("data-state", "still");
      //     }
      //   });

      var stopPlayingImg = function() {
        img.pause();
        // nommingCake.pause();
        // drinking.pause();
      };

      // When the user releases the cupcake or the bottle, pause the animations.
      img.addEventListener("mouseup", stopPlayingImg, false);
      //   bottle.addEventListener("mouseup", stopPlayingAlice, false);
    }
  });
});
