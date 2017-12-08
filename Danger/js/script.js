$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        // autoplay:true,
        autoplayTimeout:4000,
        items:2,
        loop:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
});