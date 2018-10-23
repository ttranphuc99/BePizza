var pizza = new Array();

//meat lovers
pizza[0] = {
  name : "MEAT LOVER",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[1] = {
  name : "EXTRAVAGANZA",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[2] = {
  name : "PRIME BEEF",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[3] = {
  name : "SINGAPORE SEAFOOD",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[4] = {
  name : "ALMOND CITRUS SEAFOOD",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[5] = {
  name : "TERIYAKI CHICKEN",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[6] = {
  name : "PEPPERONI FEAST",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[7] = {
  name : "SURF & TURF",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[8] = {
  name : "SEAFOOD DELIGHT",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};
  
pizza[9] = {
  name : "OCEAN MANIA",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[10] = {
  name : "CHESSY CHICKEN BACON",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[11] = {
  name : "HAWAIIAN",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[12] = {
  name : "KID MANIA",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[13] = {
  name : "VEGGIE MANIA",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[14] = {
  name : "CHESSE MANIA",
  size : "",
  crust : "",
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function setTotal() {
  var total = 0;

  var len = $(".wrap-order").length;
  for (var i = 0; i < len; i++) {
    var num = parseInt($(".quantity").eq(i).text());
    var subPrice = parseInt($(".wrap-price").eq(i).text());

    total += num * subPrice;
  }
  if (total == 0) str = 0 + " <span>đ</span>";
  else {
    total = formatNumber(total);
    
    var str = total + ",000 <span>đ</span>";
  }
  $(".total-price").html(str);
}

$(".add-cart").click(function() {
  var index = $(".add-cart").index(this);

  if ($(".size9").eq(index).prop("checked")) {
    pizza[index].size = '9"';
  } else if ($(".size7").eq(index).prop("checked")) {
    pizza[index].size = '7"';
  } else {
    pizza[index].size = '12"';
  }

  var checkCrust = false;
  if ($(".crust-thin").eq(index).prop("checked")) {
    pizza[index].crust = "Thin Crust";
  } else if ($(".crust-toss").eq(index).prop("checked")) {
    pizza[index].crust = "Hand Tossed";
  } else {
    pizza[index].crust = "New York Crust";
  }

  pizza[index].price = $(".price-detail").eq(index).text();

  var element = 
  '<div class="wrap-order">' +
    '<div class="wrap-order-name">' + pizza[index].toString() + '</div>' +
    '<div class="wrap-quantity my-3 row">' +
      '<div class="col-6">' +
        '<div class="quantity-control">' +
          '<span class="des-quantity"><i class="fas fa-minus"></i></span>' +
          '<span class="quantity mx-3">1</span>' +
          '<span class="inc-quantity"><i class="fas fa-plus"></i></span>' +
        '</div>' +
      '</div>' +
      '<div class="col-6">' +
        '<div class="wrap-price">' + pizza[index].price + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="remove-order">Remove</div>' +
  '</div>';

  var len = $(".wrap-order").length;
  var str = pizza[index].toString();
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

  $(".wrap-detail").css("display", "none");
  $("body").css("overflow", "unset");
  showSnackbar("Added to cart successfully!");
});

$(document).on('click', '.des-quantity', function() {
  var index = $(".des-quantity").index(this);
  
  var num = parseInt($(".quantity").eq(index).text());
  num--;
  if (num < 1) num = 1;
  $(".quantity").eq(index).text(num);
});

$(document).on('click', '.inc-quantity', function() {
  var index = $(".inc-quantity").index(this);
  
  var num = parseInt($(".quantity").eq(index).text());
  num++;
  $(".quantity").eq(index).text(num);
});

$(document).on('click', '.remove-order', function() {
  var index = $(".remove-order").index(this);
  
  $(".wrap-order").eq(index).remove();

  showSnackbar("Removed from cart successfully!");
});

var ready = false;

$(document).ready(function() {
  var flag = true;
  if (JSON.parse(localStorage.getItem(0)) === null) flag = false;
  var count = 0;
  while (flag) {
    var object = JSON.parse(localStorage.getItem(count));

    var element = 
    '<div class="wrap-order">' +
      '<div class="wrap-order-name">' + object.str + '</div>' +
      '<div class="wrap-quantity my-3 row">' +
        '<div class="col-6">' +
          '<div class="quantity-control">' +
            '<span class="des-quantity"><i class="fas fa-minus"></i></span>' +
            '<span class="quantity mx-3">' + object.quantity + '</span>' +
            '<span class="inc-quantity"><i class="fas fa-plus"></i></span>' +
          '</div>' +
        '</div>' +
        '<div class="col-6">' +
          '<div class="wrap-price">' + object.price + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="remove-order">Remove</div>' +
    '</div>';

    $(".cart-content").append(element);

    count++;
    if (JSON.parse(localStorage.getItem(count)) === null) flag = false;
  }
  ready = true;
  setTotal();
});

$(".cart-content").on("DOMSubtreeModified", function() {
  if (ready) {
    setTotal();
    localStorage.clear();
    for (var i = 0; i < $(".wrap-order").length; i++) {
      var str = $(".wrap-order-name").eq(i).text();
      var quantity = $(".quantity").eq(i).text();
      var price = $(".wrap-price").eq(i).text();

      var object = {
        str : str,
        quantity: quantity,
        price : price
      };

      localStorage.setItem(i, JSON.stringify(object));
    }
    
    localStorage.setItem(i, null);
  }
});