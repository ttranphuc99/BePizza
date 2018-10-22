var index;
$(".bnt-add-to-cart").click(function() {
  index = $(".bnt-add-to-cart").index(this);

  if (index % 2 == 0) {
    $(".wrap-detail").eq(parseInt(index/2)).css("display", "flex");
    setPos(parseInt(index/2));
    $("body").css("overflow", "hidden");
    $(".size9").eq(parseInt(index/2)).prop("checked", "checked");
    $(".crust-thin").eq(parseInt(index/2)).prop("checked", "checked");

    if (index <= 8) {
      $(".price-detail").eq(parseInt(index/2)).text("199,000 đ");
    } else if (index <= 18) {
      $(".price-detail").eq(parseInt(index/2)).text("149,000 đ");
    } else {
      $(".price-detail").eq(parseInt(index/2)).text("129,000 đ");
    }
  }
});

$(window).resize(function() {
  if (index != undefined) {
    if ($(".wrap-detail").eq(parseInt(index/2)).css("display") == "flex") { 
      setPos(parseInt(index/2));
    }
  }
});

$(".size9").click(function() {
  if (index <= 8) {
    $(".price-detail").text("199,000 đ");
  } else if (index <= 18) {
    $(".price-detail").text("149,000 đ");
  } else {
    $(".price-detail").text("129,000 đ");
  }
});

$(".size12").click(function() {
  if (index <= 8) {
    $(".price-detail").text("299,000 đ");
  } else if (index <= 18) {
    $(".price-detail").text("229,000 đ");
  } else {
    $(".price-detail").text("189,000 đ");
  }
});

$(".size7").click(function() {
  if (index <= 18) {
    $(".price-detail").text("79,000 đ");
  } else {
    $(".price-detail").text("59,000 đ");
  }
});

$(".wrap-close-icon").click(function() {
  $(".wrap-detail").css("display", "none");
  $("body").css("overflow", "unset");
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