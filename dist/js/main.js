$(document).ready(function ($) {
        $('.slider-reviews').slick({
            dots: true,
            infinite: true,
            speed: 300,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
    });

    $( "#accordion" ).accordion({
        autoHeight: true,
        navigation: true
    });
});