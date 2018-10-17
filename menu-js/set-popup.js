$(".bnt-add-to-cart").click(function() {
  var index = $(".bnt-add-to-cart").index(this);

  if (index % 2 == 0) {
    $(".wrap-detail").eq(index/2).css("display", "flex");
    setPos(index/2);
  }

  $(window).resize(function() {
    setPos(index/2);
  });
});

$(".wrap-close-icon").click(function() {
  $(".wrap-detail").css("display", "none");
});

function setPos(index) {
  var width = $(".detail").eq(index).width()/2;
  var height = -($(".detail").eq(index).height()/2);

  height -= 10;
  width += 25;
  width += "px";
  height += "px";

  var translate = "translate(" + width + ", " + height + ")";
  $(".wrap-close-icon").css("transform", translate);
}