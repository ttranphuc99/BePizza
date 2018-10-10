var flag = false;

$("#signup-bnt").click(function() {
  $(".wrap-signup").css("max-height", "70px");
  $(".wrap-signup").css("opacity", "1");
  $("#signin-wrap").addClass("mt-4");
  flag = true;
  var height = $(".wrap-form").css("height");
  height = parseInt(height);
  height += 400;
  $(".signup-container").css("min-height", height + "px");
});

$(document).ready(function() {
  // setDefaultHeight();
});

//set animation
function setDefaultHeight() {
  var height = $(".wrap-form").css("height");
  $(".wrap-form").css("height", height);
}

