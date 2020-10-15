// jQuery function for icons and scrolling headers - Currently only for contact area
      var heading = document.getElementById("contact-heading");
  $(window).scroll(function() {
      var top_of_element = $("#contact-form").offset().top;
      var bottom_of_element = $("#contact-form").offset().top + $("#contact-form").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          heading.style.display = "block";
      }
  });
