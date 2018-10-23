$(".bnt-add-to-cart").click(function() {
  var index = $(".bnt-add-to-cart").index(this);

  var name = $(".pizza-name").eq(index).text();
  var price = $(".product-price").eq(index).text();
  name = name.toUpperCase();
  var element = 
  '<div class="wrap-order">' +
    '<div class="wrap-order-name">' + name + '</div>' +
    '<div class="wrap-quantity my-3 row">' +
      '<div class="col-6">' +
        '<div class="quantity-control">' +
          '<span class="des-quantity"><i class="fas fa-minus"></i></span>' +
          '<span class="quantity mx-3">1</span>' +
          '<span class="inc-quantity"><i class="fas fa-plus"></i></span>' +
        '</div>' +
      '</div>' +
      '<div class="col-6">' +
        '<div class="wrap-price">' + price + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="remove-order">Remove</div>' +
  '</div>';

  var len = $(".wrap-order").length;
  var str = name;
  var flag = true;
  for (var i = 0; i < len; i++) {
    if ($(".wrap-order-name").eq(i).text() == str) {
      var quan = $(".quantity").eq(i).text();
      quan = parseInt(quan);
      quan++;
      $(".quantity").eq(i).text(quan);
      flag = false;
    }
  }
  
  if (flag) $(".cart-content").append(element);

  showSnackbar("Added to cart successfully!");
})