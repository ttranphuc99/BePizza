var flagCheck = false;

$("#signup-bnt").click(function () {
  resetTextError();
  $(".wrap-signup").css("max-height", "70px");
  $(".wrap-signup").css("opacity", "1");
  $(".wrap-smt").addClass("mt-4");
  $(".form-title").text("Sign Up");
  $("#signin-wrap").css("display", "none");
  $(".wrap-signup-des").css("display", "none");
  if (flagCheck) {
    $("#signup-bnt").prop('type', 'submit');
    $("#con-pass-signup").prop('required', true);
    $("#select-signup").prop('required', true);
    $("#phone-signup").prop('required', true);
  }

  if (!flagCheck) {
    var height = $(".wrap-form").css("height");
    height = parseInt(height);
    height += 400;
    $(".signup-container").css("min-height", height + "px");
  }
  flagCheck = true;
});

$(".wrap-form").submit(function() {
  resetTextError();
  var flag = true;

  //check email
  flag = checkMail();

  //check pass
  flag = checkPass();

  //check phone
  flag = checkPhone();

  return flag;
});

//reset text error
function resetTextError() {
  $("#pass-error").text("");
  $("#email-error").text("");
  $("#phone-error").text("");
  $("#con-pass-error").text("");
}

function checkPhone() {
  var regex = /^\d{10,11}$/;
  var flag = true;
  var phone = $("#phone-signup").val();
  var noti = $("#phone-error");

  if (!phone.match(regex)) {
    noti.text("Invalid phone!");
    flag = false;
  }
  return flag;
}

function checkMail() {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var flag = true;
  var mail = $("#email-signup").val();
  var noti = $("#email-error");

  if (mail.length > 50) {
    noti.text("Mail can't be more than 50 characters!");
    flag = false;
  } else if (!mail.match(regex)) {
    noti.text("Invalid mail!");
    flag = false;
  }

  return flag;
}

function checkPass() {
  var flag = true;
  var pass = $("#pass-signup").val();
  var conPass = $("#con-pass-signup").val();

  var noti = $("#pass-error");
  var conNoti = $("#con-pass-error");

  if (pass.length < 6) {
    flag = false;
    noti.text("Password must be more than 6 characters!");
  } else if (pass != conPass) {
    flag = false;
    conNoti.text("Confirm Password is not match!");
  }
}