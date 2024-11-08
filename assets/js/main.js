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
      
  
      // $(".more-btn").click(function(){
      //   $(".show-more").toggleClass("hidden");
      //   if( !$(".show-more").hasClass("hidden")){
      //     $(".more-btn").html(function(){
      //       return $(this).html().replace("More" , "Less");
      //     })
      //     $(".more-btn i").addClass("rotate-45deg");
      //   }
      //   else{
      //     $(".more-btn").html(function(){
      //       return $(this).html().replace("Less" , "More");
      //     })
      //     $(".more-btn i").removeClass("rotate-45deg");
      //   }
      //   // $(this).toggleClass("hidden");
      // });
      $(".more-btn").click(function (e) {
        let $this = $(e.target).closest(".more-btn"); 
        let $showMore = $this.closest(".flex-row").next(".show-more");
      
        if ($showMore.hasClass("hidden")) {
          $showMore.removeClass("hidden");
        } else {
          $showMore.addClass("hidden");
        }
      });
    
      $(".faq-area-wrapper .question").click(function(){
        // $(this).closest(".faq-area-wrapper").find(".answer").toggleClass("hidden");
        // $(".").not($(this).closest(".faq-area-wrapper").find(".answer")).addClass("hidden");
        const plus = $(this).find(".faq-icon .plus");
        const minus = $(this).find(".faq-icon .minus");
        $(this).closest(".question").find(".answer").slideToggle();
        if(!$(this).closest(".question").find(".answer").hasClass("hidden")){
          $(this).closest(".question").find(".answer").addClass("hidden")  
            minus.addClass("hidden");
            plus.removeClass("hidden")
            // icon.html(`
            //   <svg class="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/></svg>
            //   `);
        }
        else{
          $(this).closest(".question").find(".answer").removeClass("hidden")
          minus.removeClass("hidden");
          plus.addClass("hidden");
          // icon.html(`
          //    <svg class="toggle-icon w-3 h-3 fill-current" viewBox="0 -192 469.33333 469" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/></svg>
          //   `);
        }
      })
      $(".faq-area-wrapper .question").click(function() {
        // Slide up all answers except the one that's clicked
        // $(".faq-area-wrapper .answer").not($(this).next()).slideUp();
        
        // Toggle the clicked FAQ answer
        // $(this).next(".answer").slideToggle();
      });

      $(".QAwrapper").click(function(e){
        // console.log(e.target);
                
        $hidden = $(e.target).closest(".QAwrapper").find(".faq-question-answer").hasClass("hidden");
        $visible = $(e.target).closest(".QAwrapper").find(".faq-question-answer").hasClass("visible");
        // $visible = $(".faq-question-answer").hasClass("visible");
        // console.log($hidden);

        if($hidden){
          $(e.target).closest(".QAwrapper").find(".faq-question-answer").removeClass("hidden");
          $(e.target).closest(".QAwrapper").find(".faq-question-answer").addClass("visible");
          
        }
        if($visible){
          $(e.target).closest(".QAwrapper").find(".faq-question-answer").removeClass("visible");
          $(e.target).closest(".QAwrapper").find(".faq-question-answer").addClass("hidden");
          console.log(e.target);
        }

      
      });


      var thumbswiper = new Swiper(".thumbswiper", {
        // spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
            
          },
          767: {
            slidesPerView: 2,
            
          },
          1024 : {
            slidesPerView: 3,
          },
          1025 : {
            slidesPerView: 4,
          },
         
        },
        // breakpoints : {
        //   1025 : {
        //     slidesPerView: 4,
        //   },
        //   1024 : {
        //     slidesPerView: 3,
        //   },
        //   767 : {
        //     slidesPerView: 2,
        //   }
        // }
      });
      var thumbswiper2 = new Swiper(".thumbswiper2", {
        // spaceBetween: 10,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        thumbs: {
          swiper: thumbswiper,
        },
      });


    
      $(document).ready(function () {  
        $('.gallery-grid').hide();
        $('#all').show(); 
    
        $('.gallery-button').click(function (e) {
          e.preventDefault(); 
          $('.gallery-button').removeClass('active');
          $(this).addClass('active');
      
          var targetGrid = $(this).attr('href');
          $('.gallery-grid').hide();
          $(targetGrid).fadeIn();
        });
      });

      var video = $('.wrap-video').hover(hoverVideo, hideVideo);

      function hoverVideo(e) {  
          $('video', this).get(0).play(); 
      }
  
      function hideVideo(e) {
          $('video', this).get(0).pause(); 
      }
      
  });