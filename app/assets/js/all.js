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
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 100,
    },
    992: {
      slidesPerView: 1.8,
      spaceBetween: 80,
    },
    1200: {
      slidesPerView: 2.4,
      spaceBetween: 80,
    },
  }
});