function showSnackbar(messege) {
  var x = document.getElementById("snackbar");

  if ($("#snackbar").hasClass("show")) {
    x.innerHTML = messege;
  } else {
    // Add the "show" class to DIV
    x.innerHTML = messege;
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
}