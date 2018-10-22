var crust = ["Thin Crust", "Hand Tossed", "New York Crust"];

var size = ['7"', '9"', '12"'];

var signature_name = ["MEAT LOVER", "EXTRAVAGANZA", "PRIME BEEF", "SINGAPORE SEAFOOD", "ALMOND CITRUS SEAFOOD"];

var signature_price = ["199,000 đ", "299,000 đ"];

var premium_name = ["TERIYAKI CHICKEN", "PEPPERONI FEAST", "SURF & TURF", "SEAFOOD DELIGHT", "OCEAN MANIA"];

var premium_price = ["79,000 đ", "149,000 đ", "229,000 đ"];

var favorite_name = ["CHESSY CHICKEN BACON", "CHEESE MANIA", "HAWAIIAN", "KID MANIA", "BEFFIE MANIA"];

var favorite_price = ["59,000 đ", "129,000 đ", "189,000 đ"];

/*var element = 
'<div class="wrap-order">' +
  '<div class="wrap-order-name">' + size + crust + name + '</div>' +
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
'</div>'*/

var pizza = new Array();

//meat lovers
pizza[0] = {
  name : "MEAT LOVER",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[1] = {
  name : "EXTRAVAGANZA",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[2] = {
  name : "PRIME BEEF",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[3] = {
  name : "SINGAPORE SEAFOOD",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[4] = {
  name : "ALMOND CITRUS SEAFOOD",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[5] = {
  name : "TERIYAKI CHICKEN",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[6] = {
  name : "PEPPERONI FEAST",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[7] = {
  name : "SURF & TURF",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[8] = {
  name : "SEAFOOD DELIGHT",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};
  
pizza[9] = {
  name : "OCEAN MANIA",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[10] = {
  name : "CHESSY CHICKEN BACON",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[11] = {
  name : "CHEESE MANIA",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[12] = {
  name : "HAWAIIAN",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[13] = {
  name : "KID MANIA",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

pizza[14] = {
  name : "BEFFIE MANIA",
  size,
  crust,
  price : "",
  toString : function() {
    return this.size + " " + this.crust + " " + this.name;
  }
};

$(".add-cart").click(function() {
  var index = $(".add-cart").index(this);

  var checkSize = false;
  if ($(".size9").eq(index).prop("checked")) {
    if (pizza[index].size != '9"') pizza[index].size = '9"';
    else checkSize = true;
  } else if ($(".size7").eq(index).prop("checked")) {
    if (pizza[index].size != '7"') pizza[index].size = '7"';
    else checkSize = true;
  } else {
    if (pizza[index].size != '12"') pizza[index].size = '12"';
    else checkSize = true;
  }

  var checkCrust = false;
  if ($(".crust-thin").eq(index).prop("checked")) {
    if (pizza[index].crust != "Thin Crust") pizza[index].crust = "Thin Crust";
    else checkCrust = true
  } else if ($(".crust-toss").eq(index).prop("checked")) {
    if (pizza[index].crust != "Hand Tossed") pizza[index].crust = "Hand Tossed";
    else checkCrust = true;
  } else {
    if (pizza[index].crust != "New York Crust") pizza[index].crust = "New York Crust";
    else checkCrust = true;
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
  '</div>'
  console.log(checkSize);
  console.log(checkCrust);
  if (!checkSize && !checkCrust) $(".cart-content").append(element);
  else {
    var len = $(".wrap-order").length;
    var str = pizza[index].toString();
    for (var i = 0; i < len; i++) {
      if ($(".wrap-order-name").eq(i).text() == str) {
        var quan = $(".quantity").eq(i).text();
        quan = parseInt(quan);
        quan++;
        $(".quantity").eq(i).text(quan);
      }
    }
  }
});