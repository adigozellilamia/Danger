$(document).ready(function(){
    $('.our-partners .owl-carousel').owlCarousel({
        center: true,
        // autoplay:true,
        autoplayTimeout:4000,
        items:5,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.slider .owl-carousel').owlCarousel({
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
    
    $( ".owl-prev").html('<i class="fa fa-arrow-left"></i>');
    $( ".owl-next").html('<i class="fa fa-arrow-right"></i>');
});