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

  $("#moon-icon").click(function(event) {
    event.preventDefault();
    $("#nightify").removeAttr("disabled");
    $("#sun-icon").show();
    $("#moon-icon").hide();
    $("#night-menu").show();
    $("#day-menu").hide();
  });

  $("#sun-icon").click(function(event) {
    event.preventDefault();
    $("#nightify").attr('disabled', 'disabled');
    $("#sun-icon").hide();
    $("#moon-icon").show();
    $("#night-menu").hide();
    $("#day-menu").show();
  })

  $("#setup-button").click(function(event) {
    event.preventDefault();
    $("#content-tab").hide();
    $("#setup-tab").show();
    $("#setup-button").attr('class', 'tab-active')
    $("#text-button").attr('class', 'tab-passive')
  })

  $("#text-button").click(function(event) {
    event.preventDefault();
    $("#content-tab").show();
    $("#setup-tab").hide();
    $("#text-button").attr('class', 'tab-active')
    $("#setup-button").attr('class', 'tab-passive')
  })





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
