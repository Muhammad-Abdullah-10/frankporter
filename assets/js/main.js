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
        // $(this).closest(".faq-area-wrapper").find(".answer").toggleClass("hidden");
        // $(".").not($(this).closest(".faq-area-wrapper").find(".answer")).addClass("hidden");
        $(this).closest(".question").find(".answer").slideToggle();
        if(!$(this).closest(".question").find(".answer").hasClass("hidden")){
            $(this).$(".faq-icon").html(`
              <svg class="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/></svg>
              `);
        }
        else{
          $(".faq-icon").html(`
             <svg class="toggle-icon w-3 h-3 fill-current" viewBox="0 -192 469.33333 469" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/></svg>
            `);
        }
      })
      $(".faq-area-wrapper .question").click(function() {
        // Slide up all answers except the one that's clicked
        // $(".faq-area-wrapper .answer").not($(this).next()).slideUp();
        
        // Toggle the clicked FAQ answer
        // $(this).next(".answer").slideToggle();
      });
  });