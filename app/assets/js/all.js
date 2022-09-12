$(function () {
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


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.4,
  spaceBetween: 80,
  centeredSlides:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});