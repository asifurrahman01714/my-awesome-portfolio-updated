$(document).ready(function () {
    $("#course_slider").owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: false,
        nav: true,
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
    $(".brand_slider").owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 1000,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            575: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
    $(".testmonials").owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            575: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    // ?Counter UP Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // ?Smooth Section for Section

    $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
            }
        }

    });

    // ?Smooth Section for Section

    // ?Go_To_Top
    $('.go_top').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    $('.go_top').hide();

    $(window).scroll(function () {
        var ourwindow = $(this).scrollTop();
        if (ourwindow < 500) {
            $('.go_top').fadeOut();
        } else {
            $('.go_top').fadeIn();
        }
    });

      // ?Fixed Navbar
      $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();

        if(ourwindow>52){
            $('body').addClass('fixed_nav');
        } else{
            $('body').removeClass('fixed_nav');
        }
    })


    
    $("body").niceScroll({
        cursorcolor:		"#ffaa30",
        cursorwidth: 		"12px",
        cursorborder: 		"0px solid #000",
        autohidemode: 		true,
        hidecursordelay: 	400,
        cursorfixedheight: 	false,
        cursorminheight: 	20,
        enablekeyboard: 	true,
        horizrailenabled: 	true,
        smoothscroll: 		true,
        iframeautoresize: 	true,
        touchbehavior: 		false,
        zindex: 999999
        });




});