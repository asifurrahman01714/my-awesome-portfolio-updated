$(document).ready(function () {



    // ?Owl Carousel

    $('.client-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // ?Owl Carousel

    // ?Wow Animation

    new WOW().init();
    
    // ?Wow Animation
    
    // ?Fixed Navbar
  $(window).scroll(function () {
    var ourwindow = $(this).scrollTop();

    if (ourwindow > 52) {
      $("body").addClass("fixed_nav");
    } else {
      $("body").removeClass("fixed_nav");
    }
  });


});
