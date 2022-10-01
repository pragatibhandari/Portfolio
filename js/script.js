function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function sendContact() {
  alert(
    "Message cannot be sent, Send message in the email address : 'bhandariprag9@gmail.com' instead. Thank You."
  );
}
