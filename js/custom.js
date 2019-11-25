jQuery(window).load(function() {
    $('#status').delay(100).fadeOut('slow');
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({ 'overflow': 'visible' });
});

jQuery(document).ready(function() {
    function pde(event) {
        if (e.preventDefault)
            event.preventDefault();
        else
            event.returnValue = Value;
    }

    /* WOW */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    wow.init();

    $("a[data-rel^='prettyPhoto']").prettyPhoto();

    var slideHeight = $(window).height();
    $('#home-slider .item').css('height', slideHeight);

    $(window).resize(function() {
        'use strict',
        $('#home-slider .item').css('height', slideHeight);
    });

    $('.nav a').on('click', function() {
        $('#my-nav').removeClass('in').addClass('collapse');
    });

    $('.navbar-nav li a').click(function(event) {
        var place = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(place).offset().top
        }, 1200, 'easeInOutCubic');
        pde(event);
    });

    $(window).scroll(function() {
        "use strict";
        var scroll = $(window).scrollTop();
        if (scroll > 60) {
            $(".navbar-wrapper").addClass("scroll-fixed-navbar");
        } else {
            $(".navbar-wrapper").removeClass("scroll-fixed-navbar");
        }
    });

    $(".timer").waypoint(function() {
        $(this).countTo()
    }, { triggerOnce: !0, offset: "bottom-in-view" });

    $(function() {
        $('.myport').mixItUp();
    });

    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

$('.scroll-up').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});