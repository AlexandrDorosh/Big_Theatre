var owl = $(".owl-carousel");
$(function() {
    // Owl Carousel
    owl.owlCarousel({
      items: 1,
      loop: true,
      nav: true
    });
  });

  $(".next_button").click(function(){
    owl.trigger("next.owl.carousel");
  });
   
  $(".prev_button").click(function(){
    owl.trigger("prev.owl.carousel");
  });