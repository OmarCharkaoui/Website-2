
$(function(){
    'use strict';

  /*  links active */

    $('.navbar-nav .nav-item').on('click',function(){

      $(this).addClass('active').siblings().removeClass('active')
    });

     // Video Play
    
      // Auto play modal video
      $(".video").click(function () {
        var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
   
      });
      /* light BOx */
      $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

/* Slick slider */
$(".slider").slick({

  slidetoshow : 1,

});

  })