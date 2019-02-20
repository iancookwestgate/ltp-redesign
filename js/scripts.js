$(document).ready(function() {

  $("#click-slide").click(function(event) {
    event.preventDefault();
    $(".drop-down").hide();
    $("#click-slide").hide();
    $("#click-fold").show();
  });

  $("#click-fold").click(function(event) {
    event.preventDefault();
    $(".drop-down").show();
    $("#click-slide").show();
    $("#click-fold").hide();
  });





    $("#click-slide-two").click(function(event) {
      event.preventDefault();
      $(".drop-down-two").hide();
      $("#click-slide-two").hide();
      $("#click-fold-two").show();
    });

    $("#click-fold-two").click(function(event) {
      event.preventDefault();
      $(".drop-down-two").show();
      $("#click-slide-two").show();
      $("#click-fold-two").hide();
    });


});



// #click-slide {
//
// }
