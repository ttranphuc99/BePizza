//submit form
$("#contact-form").submit(function() {
  resetTextError();
  var flag = true;

  //check name
  if (!checkName()) flag = false;

  //check mail
  if (!checkMail()) flag = false;
  
  //check phone
  if (!checkPhone()) flag = false;
  
  //check subject
  if (!checkSubject()) flag = false;
  
  //check mess
  if (!checkMess()) flag = false;
  
  return flag;
});

//reset text error
function resetTextError() {
  $("#name-error").css("opacity", "0");
  $("#mail-error").css("opacity", "0");
  $("#phone-error").css("opacity", "0");
  $("#subject-error").css("opacity", "0");
  $("#mess-error").css("opacity", "0");
}

function checkName() {
  var regex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
  var flag = true;
  var name = $("#name-input").val();
  var noti = $("#name-error");

  if (name == "" || name == null) {
    noti.text("Name can't be blank!");
    noti.css("opacity", "1");
    flag = false;
  } else if (name.length > 20) {
    noti.text("Name can't be more than 20 characters!");
    noti.css("opacity", "1");
    flag = false;
  } else if (!name.match(regex)) {
    noti.text("Invalid name!");
    noti.css("opacity", "1");
    flag = false;
  }

  return flag;
}

function checkMail() {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var flag = true;
  var mail = $("#mail-input").val();
  var noti = $("#mail-error");

  if (mail == "" || mail == null) {
    noti.text("Mail can't be blank!");
    noti.css("opacity", "1");
    flag = false;
  } else if (mail.length > 50) {
    noti.text("Mail can't be more than 50 characters!");
    noti.css("opacity", "1");
    flag = false;
  } else if (!mail.match(regex)) {
    noti.text("Invalid mail!");
    noti.css("opacity", "1");
    flag = false;
  }

  return flag;
}

function checkPhone() {
  var regex = /^\d{10,11}$/;
  var flag = true;
  var phone = $("#phone-input").val();
  var noti = $("#phone-error");

  if (phone == "" || phone == null) {
    noti.text("Phone can't be blank");
    noti.css("opacity", "1");
    flag = false;
  } else if (!phone.match(regex)) {
    noti.text("Invalid phone!");
    noti.css("opacity", "1");
    flag = false;
  }
  return flag;
}

function checkSubject() {
  var regex = /\`|\~|\^|\*|\+|\=|\[|\{|\]|\}|\||\\|\<|\>|\;\s/;
  var flag = true;
  var sub = $("#subject-input").val();
  var noti = $("#subject-error");

  if (sub == "" || sub == null) {
    noti.text("Subject can't be blank!");
    noti.css("opacity", "1");
    flag = false;
  } else if (sub.length > 50) {
    noti.text("Subject can't be more than 50 characters!");
    noti.css("opacity", "1");
    flag = false;
  } else if (sub.match(regex)) {
    noti.text("Subject can't contain special characters!");
    noti.css("opacity", "1");
    flag = false;
  }

  return flag;
}

function checkMess() {
  var regex = /\`|\~|\^|\*|\+|\=|\[|\{|\]|\}|\||\\|\<|\>|\;\s/;
  var flag = true;
  var mess = $("#mess-input").val();
  var noti = $("#mess-error");

  if (mess == "" || mess == null) {
    noti.text("Message can't be blank!");
    noti.css("opacity", "1");
    flag = false;
  } else if (mess.length > 1500) {
    noti.text("Subject can't be more than 1500 characters!");
    noti.css("opacity", "1");
    flag = false;
  } else if (mess.match(regex)) {
    noti.text("Subject can't contain special characters!");
    noti.css("opacity", "1");
    flag = false;
  }

  return flag;
}