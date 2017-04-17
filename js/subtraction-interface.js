var Calculator = require("./../js/pingpong.js").calculatorModule;

$(function(){
  $("#subtraction-form").submit(function(event){
    event.preventDefault();
    var userNum1 = parseInt($("#subtractNum1").val());
    var userNum2 = parseInt($("#subtractNum2").val());

    var simpleCalculator = new Calculator("hot-pink");
    var remainder = simpleCalculator.subtract(userNum1, userNum2);
    $("#solution").prepend("<li>" + userNum1 + " - " + userNum2 + " = " + remainder + "</li>");
    $("#subtraction-form").each(function(){
        this.reset();
    });
  });
});
