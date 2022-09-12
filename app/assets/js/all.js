$(function() {
  console.log('Hello Bootstrap5');
});

$(document).ready(function () {
  
 $(".close").click(function (e) { 
  e.preventDefault();
  $(".search").toggle();

 });

   
 $(".close").click(function (e) { 
  e.preventDefault();
  $(".navbar").toggle();

 });

});