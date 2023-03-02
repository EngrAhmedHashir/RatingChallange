 $(".btn").click(function(){
    if ($(".counting .selected").length > 0) {
      $(".container").addClass("disabled");
    } else {
      alert("Please select a rating before submitting.");
    }
  });
  $(".counting button").click(function(){
    $(".counting button").removeClass("selected");
    $(this).addClass("selected");
    $(".rating span").text($(this).text());
  });