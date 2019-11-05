$(window).on("load",function() {
    $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fadein").each(function() {
          /* targets the middle of the object */
          var objectFocus = $(this).offset().top + ($(this).outerHeight() / 2);          
          if (objectFocus < windowBottom) { 
            if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
          } else { 
            if ($(this).css("opacity")==1) {$(this).fadeTo(300,0);}
          }
        });
      }).scroll(); //invokes scroll-handler on page-load
     });


