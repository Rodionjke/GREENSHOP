$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 3500,
    autoplaySpeed: 1000,
    stagePadding:0,
    loop: true,
    nav: true,
    navText: false,
    dots: true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }

})