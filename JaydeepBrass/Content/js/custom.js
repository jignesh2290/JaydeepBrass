/*
  * @package Cyprass
  * @subpackage Cyprass HTML
  * 
  * Template Scripts
  * Created by Tripples
  
  1. Fixed header
  2. Site search
  3. Main slideshow
  4. Owl Carousel
      a. Testimonial
      b. Clients
      c. Team
  5. Back to top
  6. Skills
  7. BX slider
      a. Blog Slider
      b. Portfolio item slider
  8. Isotope
  9. Animation (wow)
  10. Flickr
  
*/


jQuery(function ($) {
    "use strict";

    $('.navigation').singlePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        offset: 0,
        filter: ':not(.external)',
        easing: 'swing',

    });

    $.noConflict();
    $('.topNav a').on('click', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });

    // accordian
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () {
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });


    /* ----------------------------------------------------------- */
    /*  BX slider
    /* ----------------------------------------------------------- */

    //Portfolio item and blog slider

    /*Smooth Scroll*/
    smoothScroll.init({
        speed: 400,
        easing: 'easeInQuad',
        offset: 0,
        updateURL: true,
        callbackBefore: function (toggle, anchor) { },
        callbackAfter: function (toggle, anchor) { }
    });


    /* ----------------------------------------------------------- */
    /*  Main slideshow
    /* ----------------------------------------------------------- */

    $('#slider_part').carousel({
        pause: true,
        interval: 1000000,
    });

    /* ----------------------------------------------------------- */
    /*ISotope Portfolio
    /* ----------------------------------------------------------- */

    var $container = $('.portfolio-wrap');
    var $filter = $('#isotope-filter');
    // Initialize isotope 
    $container.isotope({
        filter: '*',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    // Filter items when filter link is clicked
    $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('current');
        $(this).addClass('current');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });


    // Portfolio Isotope
    var container = $('.portfolio-wrap');

    function splitColumns() {
        var winWidth = $(window).width(),
          columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }

    function setColumns() {
        var winWidth = $(window).width(),
          columnNumb = splitColumns(),
          postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-box').each(function () {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function () {
        setColumns();
    });


    $(window).bind('resize', function () {
        setProjects();
    });

    /* ----------------------------------------------------------- */
    /* Team Carousel
    /* ----------------------------------------------------------- */

    $("#owl-demo").owlCarousel({
        items: 2,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoplay: true,
                loop: true
            },
            480: {
                items: 2                
            },
            768: {
                items: 2
            }
        }
    });

    //Testimonial

    $("#testimonial-carousel").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 600,
        pagination: false,
        singleItem: true

    });

    // Custom Navigation Events
    var owl = $("#testimonial-carousel");


    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

    function generateCarouselItems(carouselName, tag, numImages, items) {
        var finalStr;
        var currentCarousel = $("#" + carouselName + "-carousel");
        var currentStr = "<div class='item client_logo'><a href='#'><img class='owl-lazy' data-src='/Content/images/portfolio/" + carouselName + "/";

        for (var i = 1; i <= numImages; i++) {
            finalStr = currentStr + tag + i + ".jpg' class='img-responsive'></a></div>";
            $(finalStr).appendTo(currentCarousel);
        }

        initCarousel(currentCarousel, items || 5);
    }

    function initCarousel(currentCarousel, items) {
        currentCarousel.owlCarousel({
            nav: true,
            slideSpeed: 2000,
            items: items,
            stopOnHover: true,
            autoplay: true,
            loop: true,
            lazyLoad: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    lazyLoad: true,
                    autoplay: true,
                    autowidth: true
                },
                480: {
                    items: 3,
                    nav: true,
                    lazyLoad: true,
                    autoplay: true,
                },
                768: {
                    items: 5,
                    nav: true,
                    lazyLoad: true,
                    autoplay: true,
                }
            }
        });
    }

    generateCarouselItems('general', 'gen', 17);
    generateCarouselItems('electronics', 'elec', 23);
    generateCarouselItems('electrical', 'electrical', 32);
    generateCarouselItems('nutbolts', 'nut', 24);
    generateCarouselItems('pipeing', 'pipe', 3, 2);
    generateCarouselItems('gas', 'gas', 6);
    generateCarouselItems('moulding', 'mould', 11);
    generateCarouselItems('auto', 'auto', 25);

    //Portfolio Carousels
    $('.client-carousel').hide();
    $('#electrical-carousel').show();

    $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $('.client-carousel').hide('fast');
        $('#' + selector +'-carousel').show();
        $('#' + selector + '-carousel .owl-controls .owl-prev').trigger('click');
    });

    //Counter 
    // jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });
    // }); 

    // prettyphoto
    $("a[data-rel^='prettyPhoto']").prettyPhoto();


    /* ==============================================
    Back To Top Button
    =============================================== */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-top').click(function () {
        $('#back-top a').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // scroll body to 0px on click
    $('#company-title').click(function () {
        if ($(window).scrollTop() > 50) {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    $('#back-top').tooltip('hide');
});