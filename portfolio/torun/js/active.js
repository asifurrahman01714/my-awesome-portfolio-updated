$(document).ready(function () {

  $(window).on('scroll', function () {
    var navFixed = $(window).scrollTop();
        if(navFixed > 200){
            $(".navbar").addClass("fixed-top animated fadeInDown faster");
          } else {
            $(".navbar").removeClass("fixed-top animated fadeInDown faster");
          }
    });

$(".slider-active").owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


    // ?Wow Animation

    new WOW().init();
    
    // ?Wow Animation


});