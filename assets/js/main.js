$(document).ready(function(){

    // mobile menu add
    $(".hamburger-wrapper").click(function(){
      $(this).toggleClass("is-active");
      setTimeout(() => {
        $('.mobile-menu-wrapper').addClass('is-mobile-open');
        $('.mobile-menu-wrapper').removeClass('is-mobile-close');  
      }, 1200);
      
    });
    // mobile menu remove
    $("#menu-close").click(function(){
        $('.mobile-menu-wrapper').removeClass('is-mobile-open');
        $('.mobile-menu-wrapper').addClass('is-mobile-close');
        $(".hamburger-wrapper").removeClass('is-active')  
    })

    // swiper
    var homeBannerSlider = new Swiper(".homeBanner", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
      var clientTestiHome = new Swiper(".clientTestiHome", {
        slidesPerView: 2,
        spaceBetween: 10,
        centerSlides : true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          1350: {
            slidesPerView: 1,
            
          },
         
        },
      });
      
  

    
  });