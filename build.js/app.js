!function n(t,o,i){function r(u,p){if(!o[u]){if(!t[u]){var a="function"==typeof require&&require;if(!p&&a)return a(u,!0);if(e)return e(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var s=o[u]={exports:{}};t[u][0].call(s.exports,function(n){var o=t[u][1][n];return r(o||n)},s,s.exports,n,t,o,i)}return o[u].exports}for(var e="function"==typeof require&&require,u=0;u<i.length;u++)r(i[u]);return r}({1:[function(n,t,o){function i(n){this.skin=n}i.prototype.pingPong=function(n){for(var t=[],o=1;o<=n;o++)o%15==0?t.push("ping-pong"):o%3==0?t.push("ping"):o%5==0?t.push("pong"):t.push(o);return t},i.prototype.add=function(n,t){return n+t},i.prototype.subtract=function(n,t){return n-t},i.prototype.multiply=function(n,t){return n*t},i.prototype.divide=function(n,t){return n/t},o.calculatorModule=i},{}],2:[function(n,t,o){var i=n("./../js/pingpong.js").calculatorModule;$(function(){$("#addition-form").submit(function(n){n.preventDefault();var t=parseInt($("#addNum1").val()),o=parseInt($("#addNum2").val()),r=new i("hot-pink"),e=r.add(t,o);$("#solution").prepend("<li>"+t+" + "+o+" = "+e+"</li>"),$("#addition-form").each(function(){this.reset()})})});var i=n("./../js/pingpong.js").calculatorModule;$(function(){$("#division-form").submit(function(n){n.preventDefault();var t=parseInt($("#divideNum1").val()),o=parseInt($("#divideNum2").val()),r=new i("hot-pink"),e=r.divide(t,o);$("#solution").prepend("<li>"+t+" / "+o+" = "+e+"</li>"),$("#division-form").each(function(){this.reset()})})});var i=n("./../js/pingpong.js").calculatorModule;$(function(){$("#multiplication-form").submit(function(n){n.preventDefault();var t=parseInt($("#multiplyNum1").val()),o=parseInt($("#multiplyNum2").val()),r=new i("hot-pink"),e=r.multiply(t,o);$("#solution").prepend("<li>"+t+" * "+o+" = "+e+"</li>"),$("#multiplication-form").each(function(){this.reset()})})});var i=n("./../js/pingpong.js").calculatorModule;$(function(){$("#ping-pong-form").submit(function(n){n.preventDefault();var t=$("#goal").val(),o=new i("hot pink"),r=o.pingPong(t);$("#solution").append("____________________<br>"),$("#solution").append("Pong to "+t+":"),r.forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var t=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+t+" has been added to our list.</p>")})});var i=n("./../js/pingpong.js").calculatorModule;$(function(){$("#subtraction-form").submit(function(n){n.preventDefault();var t=parseInt($("#subtractNum1").val()),o=parseInt($("#subtractNum2").val()),r=new i("hot-pink"),e=r.subtract(t,o);$("#solution").prepend("<li>"+t+" - "+o+" = "+e+"</li>"),$("#subtraction-form").each(function(){this.reset()})})})},{"./../js/pingpong.js":1}]},{},[2]);