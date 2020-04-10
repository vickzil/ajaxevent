$(document).ready(function(){
    $('.button').click(function(){
      var name = $(this).attr('data-filter');

      if (name == "all") {
        $('.filter').show('2000');
      } 
      else {
        $('.filter').not('.'+name).hide('2000');
        $('.filter').filter('.'+name).show('2000');
      }
    });

    $('.gallary-nav button').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });
    
 });
