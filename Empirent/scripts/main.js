$(document).ready(function () {
    $('.loader-background').fadeOut(1000);
    $('.contact-form-wrapper').hide();

    $('[data-toggle="slide-collapse"]').on('click', function () {
        $navMenuCont = $($(this).attr('href'));
        $navMenuCont.animate({ 'width': 'toggle' }, 'max-content');
    });

    $(window).scroll(function () {
        var sticky = $("nav"),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass("scrolled");
        else sticky.removeClass("scrolled");
    });
    // Toggler Icon
    $('.menuToggler').on('click', function () {
        $('#nav-icon').toggleClass('open');
    })
    // Num Of Guests
    $('.guestSelect p').on('click', function () {
        if ($('.guestNumSelector').hasClass('opened')) {
            $('.guestNumSelector').slideDown();
            $('.guestNumSelector').removeClass('opened')
        } else {
            $('.guestNumSelector').slideUp();
            $('.guestNumSelector').addClass('opened')
        }
    })
    $('.childSpinner,.adultSpinner').inputSpinner()
    $('.numOfGuests').val(2)
    $('.adultSpinner').on('change', function () {
        $('.adultResult').text($(this).val())
    })
    $('.childSpinner').on('change', function () {
        $('.childResult').text($(this).val())
    })
    // Slick SLider
    $('.slickSlider').slick({
        accessibility: !0,
        adaptiveHeight: !1,
        arrows: 0,
        asNavFor: null,
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: true,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,

    });

    $('.prevSlide').click(function () {
        $(".slickSlider").slick('slickPrev');
    });
    $('.nextSlide').click(function () {
        $(".slickSlider").slick('slickNext');
    });
    $('.slickSlider').on('afterChange', function () {
        if (parseInt($('.slick-current').attr('data-slick-index')) >= 9) {
            $('.currentSlide').text($('.slickSlider').slick('slickCurrentSlide')
                + 1)
        } else {
            $('.currentSlide').text(parseInt($('.slick-current').attr('data-slick-index')) + 1).prepend('0')

        }
    })
    let totalSlides = parseInt($('.singleSlide').not('.slick-cloned').last().attr('data-slick-index'));
    if (totalSlides > 10) {

        $('.totalSlides').text(totalSlides + 1);
    } else {

        $('.totalSlides').text(totalSlides + 1).prepend('0');

    }


    $('.totalGalleryImgs').text($('.singleSlideGalery').not('.slick-cloned').last().attr('data-slick-index')).append(' IMAGES ');




    // Date Picker
    $('.datepicker').datepicker({
        format: 'D, d M yyyy',
        autoclose: 'true',
        startDate: '0',
        minDate: "dateToday",
        changeMonth: true,
        changeYear: true,

    });
    $('#checkInDate').datepicker("setDate", "now");
    $('#checkOutDate').datepicker("setDate", "tomorrow");

    // Dynamic Classes For Cards
    let singleCard = $('.service-card');
    $(singleCard).each(function (index) {
        $(this).addClass("service-" + (index + 1));
    });

    // Sticky Form
    if ($('.contact-form-wrapper').length) { // make sure ".contact-form-wrapper" element exists
        var el = $('.contact-form-wrapper');
        var stickyTop = $('.contact-form-wrapper').offset().top - 80; // returns number
        var stickyHeight = $('.contact-form-wrapper').height();

        $(window).scroll(function () { // scroll event
            var limit = $('.fullGallery').offset().top - stickyHeight - 20;

            var windowTop = $(window).scrollTop(); // returns number

            if (stickyTop < windowTop) {
                el.css({
                    position: 'fixed',
                    top: '8.5rem'
                });
            } else {
                el.css({
                    position: 'absolute',
                    top: '50vh'
                });
            }

            if (limit < windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff
                });
            }
        });
    }


    $('.fullGallerySlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    });
    $('.galleryBtns-wrapper .prevSlide').click(function () {
        $(".fullGallerySlider").slick('slickPrev');
    });
    $('.galleryBtns-wrapper .nextSlide').click(function () {
        $(".fullGallerySlider").slick('slickNext');
    });
})



