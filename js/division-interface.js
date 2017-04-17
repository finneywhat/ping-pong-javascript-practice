var Calculator = require("./../js/pingpong.js").calculatorModule;

$(function(){
  $("#division-form").submit(function(event){
    event.preventDefault();
    var userNum1 = parseInt($("#divideNum1").val());
    var userNum2 = parseInt($("#divideNum2").val());

    var simpleCalculator = new Calculator("hot-pink");
    var quotient = simpleCalculator.divide(userNum1, userNum2);
    $("#solution").prepend("<li>" + userNum1 + " / " + userNum2 + " = " + quotient + "</li>");
    $("#division-form").each(function(){
        this.reset();
    });
  });
});
