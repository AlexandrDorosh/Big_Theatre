let burger = document.querySelector('.header_burger');
let burgerMenu = document.querySelector('.container_burger_menu');
let closed = document.querySelector('.closed');

burger.addEventListener('click', function(value){
  burgerMenu.style.left = '0';
  burgerMenu.style.transition = 'all 0.3s ease';
})

closed.addEventListener('click', function(value){
  burgerMenu.style.left = '-300px';
  burgerMenu.style.transition = 'all 0.3s ease';
})



var owl = $(".theatre_img .owl-carousel");
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

  $(function() {
    // Owl Carousel
    var owl = $(".stagings .owl-carousel");
    owl.owlCarousel({
      items: 4,
        freeDrag: false,
        autoWidth: true,
        autoHeight: true,
        loop: true
    });
  });

$(function() {
    // Owl Carousel
    var owl = $(".partners .owl-carousel");
    owl.owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      autoWidth: true,
      autoHeight: true
    });
  });