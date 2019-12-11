$(document).ready(function ($) {
        $('.slider-reviews').slick({
            dots: true,
            infinite: true,
            speed: 300,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        adaptiveHeight: false,
                        dots: true
                    }
                }
            ]
    });

    $( "#accordion" ).accordion({
        autoHeight: true,
        navigation: true
    });

    setTimeout(function(){
        Array.prototype.forEach.call(
            document.querySelectorAll('img[data-src]'), function(img) {
                img.setAttribute('src', img.getAttribute('data-src'));
                img.onload = function() {
                    img.removeAttribute('data-src');
                };
            }
        );
    },2000);
});