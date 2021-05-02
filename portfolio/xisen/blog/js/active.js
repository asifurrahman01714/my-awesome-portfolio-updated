$(document).ready(function () {

    // Preloader

    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // once the preloader has finished, the scroll appears

            if ($('#ctn-preloader').hasClass('loaded')) {
                // once the preloader is gone, the entire preloader section is removed
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

// Preloader



    // ?Wow Animation

    new WOW().init();
    
    // ?Wow Animation


});