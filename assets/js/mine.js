(function ($) {
    "use strict";

    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        mouseDrag: false,
        autoplay: true,
        touchDrag: false,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
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
    $(function () {
        $('.count-num').rCounter({
            duration: 30

        });

    });
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        mouseDrag: false,
        autoplay: true,
        touchDrag: false,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
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

})(jQuery);