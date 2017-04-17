var Calculator = require("./../js/pingpong.js").calculatorModule;

$(function(){
  $("#addition-form").submit(function(event){
    event.preventDefault();
    var userNum1 = parseInt($("#addNum1").val());
    var userNum2 = parseInt($("#addNum2").val());

    var simpleCalculator = new Calculator("hot-pink");
    var sum = simpleCalculator.add(userNum1, userNum2);
    $("#solution").prepend("<li>" + userNum1 + " + " + userNum2 + " = " + sum + "</li>");
    $("#addition-form").each(function(){
        this.reset();
    });
  });
});
