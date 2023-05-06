function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "") {
    alert("Username must be filled out");
    return false;
  }
  if (password == "") {
    alert("Password must be filled out");
    return false;
  }

  // navigate to index.html if form is valid
  window.location.href = "index.html";
  return false;
}
