$(window).resize(function() {
  setPos();
});

function setPos() {
  var width = $(".detail").width()/2;
  var height = -($(".detail").height()/2);

  height -= 10;
  width += 25;
  width += "px";
  height += "px";

  var translate = "translate(" + width + ", " + height + ")";
  $(".wrap-close-icon").css("transform", translate);
}