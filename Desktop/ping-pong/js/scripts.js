$(document).ready(function) {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var pingPong = $("#userInput").val()
    var num1= parseInt(pingPong);

    for ( var index = 0; index <= num1 -1; index += 1) {
      if (num1 % 3 = 0) {
        var num1 = num1.replace("ping");
      } else if (num1 % 5 = 0) {
        var num1 = num1.replace("pong");
      } else if (num1 % 3 = 0 && num1 % 5 = 0) {
        var num1 = num1.replace("pingpong");
      } else {
        alert("hello");

      $("#results").show();

      });
    });
  });
});
