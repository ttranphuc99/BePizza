$(window).resize(function() {
  setPos();
});

$(document).ready(function() {
  setPos();
}) 

function setPos() {
  var width = $("#img-show").width()/2;
  var height = -($("#img-show").height()/2);

  height -= 25;
  width -= 10;
  width += "px";
  height += "px";

  var translate = "translate(" + width + ", " + height + ")";
  $(".wrap-close-icon").css("transform", translate);
}