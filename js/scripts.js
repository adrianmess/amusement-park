$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 60) {
    $('#tallRides').show();
  }
  else{
    $('#shortRides').show();
  }
});
