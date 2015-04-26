/// <reference path="js/jquery-1.11.1.min.js" />
$(document).ready(function () { 
    
    $(".scroll-link").click(function(e){
    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {


                $('.scroll-link').each(function () {
                    $(this).removeClass('active');
                });

                $(this).parent('li').addClass('active');

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 105
                    }, 1000);
                    return false;
                }
            }
        });
    });

});