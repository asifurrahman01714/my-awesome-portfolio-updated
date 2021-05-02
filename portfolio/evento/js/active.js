$(document).ready(function(){
  
    $("#sideBarNavOpen").click(function () {
      $("#sideBarNav").addClass("active");
      $("#sideBarNavClose").show();
      $(this).hide();
    });
    $("#sideBarNavClose").click(function () {
      $("#sideBarNav").removeClass("active");
      $("#sideBarNavOpen").show();
      $(this).hide();
    });

    $(".counter").counterUp({
       delay: 10,
       time: 1000
    });


    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      autoplay:true,
      smartSpeed:1000,
      autoplayHoverPause:true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 3
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });

    // *VenoBox*

      $('.venobox').venobox({
        numeratio:true,
        framewidth : '400px'
      });
    
      $(".test_slider").owlCarousel({
        loop: true,
        margin: 10,
        autoplay:false,
        smartSpeed:1000,
        nav:true,
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
      });
   
      $(".test_slider").hover(function(){
        $(".owl-nav button").fadeIn();
      });

      $(".test_slider").mouseleave(function(){
        $(".owl-nav button").hide();
      });

      $("#abt").waypoint(function(direction){
        if(direction=="down"){
          $(".navigation").removeClass("py-50").addClass("fixed-top bg-violet py-2 nav-animate");
        }else{
          $(".navigation").removeClass("fixed-top bg-violet py-2 nav-animate").addClass("py-50");
        }
      });

      var mixer = mixitup('.mix_container');

      var mixer = mixitup('.mix_price');

      $("body").niceScroll({
        cursorcolor: "#F7B217",
        cursorwidth: "12px",
        cursorborder: "0px solid #000",
        scrollspeed: 60,
        autohidemode: true,
        background: '#ddd',
        hidecursordelay: 400,
        cursorfixedheight: false,
        cursorminheight: 20,
        enablekeyboard: true,
        horizrailenabled: true,
        bouncescroll: false,
        smoothscroll: true,
        iframeautoresize: true,
        touchbehavior: false,
        zindex: 99999
      });
     

});