//Wow JS
new WOW().init();

//AOS JS
AOS.init();



// Slick Slider carousel
$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
   adaptiveWidth: true,
  });

  $('.caption_slides').slick({
    dots: true
  });

  $('.carouselconc').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
   adaptiveWidth: true,
  });


});
