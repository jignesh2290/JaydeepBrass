/// <reference path="js/jquery-1.11.1.min.js" />
$(document).ready(function () {
    jQuery.easing.def = 'easeOutBack';

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            //Toggle link selection
            $('.scroll-link').each(function () {
                $(this).removeClass('active');
            });

            $(this).parent('li').addClass('active');

            //Hide the menu items on anchor click
            if (!$(this).hasClass("btn")) {
                $('.navbar-collapse').collapse('hide');
            }
            //$('.navbar-collapse').slideUp();

            var scrollPadding = 0;
            if ($(this).attr('href') == "#about") {
                scrollPadding = 125;
            } else if ($(this).attr('href') == "#services") {
                scrollPadding = 78;
            } else if ($(this).attr('href') == "#contactus") {
                scrollPadding = 125;
            }

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - scrollPadding
                }, 1300);
                return false;
            }
        }
    });
});
