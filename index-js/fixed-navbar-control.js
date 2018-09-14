//disabled fixed navbar on mobile & tablet version (<= 992px)
$(document).ready(function () {
  // console.log("ready");
  toggleFixedNavbar();
  
  $(window).resize(function () {
    toggleFixedNavbar();
  })
})

function toggleFixedNavbar() {
  var width = $(window).width();

  if (width <= 992) {
    $("nav").removeClass("fixed-top");
  } else {
    if (!$("nav").hasClass("fixed-top")) {
      $("nav").addClass("fixed-top");
    }
  }
}