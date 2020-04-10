

$(function() {
   $(".navigation__icon").click(function() {
     $(".navigation").toggleClass('navigation-open');
     $(".overlay").toggleClass('overlay_open');
   });

   $(".overlay").click(function() {
     $(".navigation").removeClass('navigation-open');
     $(".overlay").removeClass('overlay_open');
   });


 });