var topics = ["bourbon", "steak", "trucks"];

function renderButtons() {
  // $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {
    $("#buttons-view").append(
      '<button class="topics-button btn btn-warning">' + topics[i] + '</button>'
    );

    console.log(topics[i]);
    // var a = $("<button>");

    // a.addClass("topic");

    // a.attr("data-name", topics[i]);

    // a.text(topics[i]);

  };

  $("#search-button").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val();
    $("#buttons-view").append(
      '<button class="topics-button btn btn-warning">' + topic + '</button>'

    );

  });
};

$(document).on("click", '.topics-button', function (event) {
  event.preventDefault();
  // $("#gifs-appear-here").empty;
  var subjects = this.innerText;
  console.log(subjects)
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    subjects +
    "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
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

        var subjectImage = $("<img>");

        subjectImage.attr("src", results[i].images.original.url);
        subjectImage.attr("data-animate", results[i].images.original.url);
        subjectImage.attr("data-still", results[i].images.original_still.url);
        subjectImage.attr("data-state", "animate");
        subjectImage.on("click", function () {
          var state = $(this).attr("data-state");
          console.log(this);

          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
        // statusImage.attr("src")
        gifDiv.append(p);
        gifDiv.append(subjectImage);
      }

      $("#gifs-appear-here").prepend(gifDiv);
    }
  });
});

renderButtons();
