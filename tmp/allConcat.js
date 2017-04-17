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

$(document).ready(function(){
  $("#signup").submit(function(event){
    event.preventDefault();
    var email = $("#email").val();
    $("#signup").hide();
    $("#solution").prepend("<p>Thank you, " + email + " has been added to our list.</p>");
  });
});

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
