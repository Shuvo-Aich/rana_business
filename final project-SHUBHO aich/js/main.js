$(function () {

    "use strict";
    var $win = $(window);
    var $top = $(".back-to-top a i")
    var $nav = $('.navbar');
    var $dis = $nav.offset().top;

    //==========start of sticky & back to top section menu============//

    $win.on('scroll', function () {

        var $scrolling = $(this).scrollTop();

        if ($scrolling >= 1) {

            $nav.addClass("sticky-menu");
        } else {

            $nav.removeClass("sticky-menu");
        }

        if ($scrolling >= 250) {

            $top.fadeIn();
        } else {

            $top.fadeOut();
        }
    });

    $top.on('click', function () {

        $("html,body").animate({

            scrollTop: 0
        }, 1500);
    });

    //==========end of sticky & back to top section menu============//

    //==========start of preloader==========//

        $win.on('load', function () {
            $('.full-preloader').delay(1000).fadeOut();
        });

    //==========end of preloader==========//

    //============ start of banner slider ==========// 

    $('#banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.banner-carsoual a .fa-chevron-left'),
        nextArrow: $('.banner-carsoual a .fa-chevron-right'),
        fade: true,
        cssEase: 'linear',
    });

    //=========== End of banner slider ===========// 

    //==========Start of blog mixitup==========//

    var mixer = mixitup('.product-filter');

    //==========End of blog mixitup==========//

    //=============start of team slider===========//

    $('.products-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: $('.latest-carsoual a .fa-chevron-left'),
        nextArrow: $('.latest-carsoual a .fa-chevron-right'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
      ]

    });
    //==========End of team member slider==========//

    //==========Start of testumonial-slider slider==========//


    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: $('.testimonial-carsoual a .fa-chevron-left'),
        nextArrow: $('.testimonial-carsoual a .fa-chevron-right'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
      ]

    });
    //==========End of testimonial-slider slider==========//


    //==========Start of SmoothScroll==========//

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
        offset:150

    });

    //==========End of SmoothScroll==========//

    //==========Start of aos animation==========//

    AOS.init({
        duration: 2000,
        once: true,
        offset: 0,
        easing: 'ease',
        startEvent: 'DOMContentLoaded',
    });

    //==========End of aos animation==========//


});
