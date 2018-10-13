$(document).ready(function() {
  $(".wrap-next-icon").click(function() {
    if (window.innerWidth >= 768) next();
  });
  $(".wrap-previous-icon").click(function() {
    if (window.innerWidth >= 768) previous();
  });

  $(".gallery-items").click(function() {
    var src = $(this).attr("src");
    if (window.innerWidth >= 768) showImg(src);
    // console.log(this);
  });

  $(".wrap-close-icon").click(function() {
    if (window.innerWidth >= 768) hideImg();
  })
});

function showImg(src) {
  $("#img-show").attr("src", src);
  //show slide show
  $(".wrap-slide-show").css("display", "flex");
  setPos();
  //hide menu
  $(".fixed-top").css("z-index", "1");
  //disable scroll
  $("body").css("overflow", "hidden");
}

function hideImg(src) {
  $(".wrap-slide-show").css("display", "none");
  $(".fixed-top").css("z-index", "1030");
  $("body").css("overflow", "auto");
}

function next() {
  var src = $("#img-show").attr("src");
  var index = getIndex(src);

  var curSrc = "gallery" + index;
  index++;
  if (index > 6) index = 1;
  var nextSrc = "gallery" + index;

  src = src.replace(curSrc, nextSrc);

  $("#img-show").attr("src", src);
}

function previous() {
  var src = $("#img-show").attr("src");
  var index = getIndex(src);

  var curSrc = "gallery" + index;
  index--;
  if (index < 1) index = 6;
  var nextSrc = "gallery" + index;

  src = src.replace(curSrc, nextSrc);

  $("#img-show").attr("src", src);
}

function getIndex(str) {
  if (str.indexOf("gallery1") >= 0) return 1;
  if (str.indexOf("gallery2") >= 0) return 2;
  if (str.indexOf("gallery3") >= 0) return 3;
  if (str.indexOf("gallery4") >= 0) return 4;
  if (str.indexOf("gallery5") >= 0) return 5;
  if (str.indexOf("gallery6") >= 0) return 6;
}