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
        autoplay: {
          delay: 3000,
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
        autoplay: {
          delay: 3000,
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
            slidesPerView: 2,
            
          },
         
        },
      });
      
  
      $("#more-btn").click(function(){
        $("#show-more").toggleClass("hidden");
        if( !$("#show-more").hasClass("hidden")){
          $("#more-btn").html(function(){
            return $(this).html().replace("More" , "Less");
          })
          $("#more-btn i").addClass("rotate-45deg");
        }
        else{
          $("#more-btn").html(function(){
            return $(this).html().replace("Less" , "More");
          })
          $("#more-btn i").removeClass("rotate-45deg");
        }
        // $(this).toggleClass("hidden");
      });
    
      $(".faq-area-wrapper .question").click(function(){
        $(this).closest(".faq-area-wrapper").find(".answer").toggleClass("hidden");
        $(".answer").not($(this).closest(".faq-area-wrapper").find(".answer")).addClass("hidden");
      })
  });