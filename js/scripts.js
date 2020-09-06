/*SCRIPT FOR TOOLTIP<script>
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
</script>*/

$(document).ready(function() {
  $('#mycarousel').carousel({ interval: 2000, pause: "false"});
  // $('#carousel-pause').click(function() {
  //   $('#mycarousel').carousel('pause');
  // });
  //
  // $('#carousel-play').click(function() {
  //   $('#mycarousel').carousel('cycle');
  // });

  $('#carouselButton').click(function() {
    if($('#carouselButton').children('span').hasClass('fa-pause')){
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').removeClass('btn-danger');
      $('#carouselButton').children('span').addClass('fa-play');
      $('#carouselButton').addClass('btn-success');
    }else{
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').removeClass('btn-success');
      $('#carouselButton').children('span').addClass('fa-pause');
      $('#carouselButton').addClass('btn-danger');
    }
  });

  $('#reserveButton').click(function() {
    $('#reserveModal').modal("show");
  });

  $('#loginTag').click(function() {
    $('#loginModal').modal("show");
  });

});
