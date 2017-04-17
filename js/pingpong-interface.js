var Calculator = require("./../js/pingpong.js").calculatorModule;

$(function(){
  $("#ping-pong-form").submit(function(event) {
    event.preventDefault();
    var goal = $("#goal").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    $("#solution").append("____________________<br>");
    $("#solution").append("Pong to " + goal + ":");

    output.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
