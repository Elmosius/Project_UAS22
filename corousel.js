// corousel owl on index
$(document).ready(function () {
  $(".owl-one").owlCarousel({
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-two").owlCarousel({
    nav: true,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-prev").html('<i class="fa fa-chevron-left arrow-caro"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right arrow-caros"></i>');
});
