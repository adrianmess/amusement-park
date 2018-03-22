$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 60) {
    $('#rides').show();
    $('#tallRides').css("background-color", "yellow");
  }
  else{
    $('#rides').show();
    $('#shortRides').css("background-color", "yellow");
  }
});
