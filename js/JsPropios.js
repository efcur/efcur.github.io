function abrirMenu(){
    $(".navUnoUl, .navDosUl").toggleClass("verNav")  
}


//Hide Nav
$(window).bind('scroll', function () {
    
    if ($(window).scrollTop() > 150)
        $('.navDos').addClass('nav-down');
    else
        $('.navDos').removeClass('nav-down');
});


// Hide Header on on scroll down
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navDos').outerHeight();

$(window).scroll(function(event){
    
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navDos').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navDos').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;
});



$('.galeriaUno').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
       
      ]
});

$('.galeriaDos').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
})


//Banner
gsap.registerPlugin(ScrollTrigger)
            gsap.set(".textoBannerUno",{x:"100%"});
            gsap.to(".textoBannerUno",{
                x:"-70%",
                scrollTrigger:{
                    trigger: ".bannerUno",
                    start: "top bottom",
                    scrub:true,
                },
            })
            gsap.set(".textoBannerDos",{x:"100%"});
            gsap.to(".textoBannerDos",{
                x:"-70%",
                scrollTrigger:{
                    trigger: ".bannerDos",
                    start: "top bottom",
                    scrub:true,
                },
            })

            gsap.set([".seccionNosotrosTextoHistoria",], { opacity: 0, display: "none" })
            let lt = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contenidoNosotrosSticky",
                    start: "center center",
                    // markers: true,
                    pin: true,
                    scrub: true
                }
            })
            lt.to(".seccionNosotrosTextoNosotros", { opacity: 0, display: "none" })
            lt.to(".seccionNosotrosTextoHistoria", { opacity: 1, display: "flex" })
            // lt.to(".seccionNosotrosTextoHistoria", { opacity: 0, display: "none" })


            gsap.set([".text2", ".text2", ".text3", ".text4"], { opacity: 0, display: "none" })
            let lt2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contenidoPaginaNosotrosSticky",
                    start: "center center",
                    // markers: true,
                    pin: true,
                    scrub: true
                }
            })
            lt2.to(".text1", { opacity: 0, display: "none" })
            lt2.to(".text2", { opacity: 1, display: "flex" })
            lt2.to(".text2", { opacity: 0, display: "none" })
            lt2.to(".text3", { opacity: 1, display: "flex" })
            lt2.to(".text3", { opacity: 0, display: "none" })
            lt2.to(".text4", { opacity: 1, display: "flex" })
            lt2.to(".text4", { opacity: 0, display: "none" })
