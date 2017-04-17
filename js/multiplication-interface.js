var Calculator = require("./../js/pingpong.js").calculatorModule;

$(function(){
  $("#multiplication-form").submit(function(event){
    event.preventDefault();
    var userNum1 = parseInt($("#multiplyNum1").val());
    var userNum2 = parseInt($("#multiplyNum2").val());

    var simpleCalculator = new Calculator("hot-pink");
    var product = simpleCalculator.multiply(userNum1, userNum2);
    $("#solution").prepend("<li>" + userNum1 + " * " + userNum2 + " = " + product + "</li>");
    $("#multiplication-form").each(function(){
        this.reset();
    })
  });
});
