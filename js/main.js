"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });
  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------------
		Partner Slider
    ----------------------- */
  $(".partner-logo").owlCarousel({
    items: 6,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    margin: 116,
    responsive: {
      320: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  var timerdate = "2023-09-16 11:00:00";

  $("#countdown").countdown(timerdate, function (event) {
    $(this).html(
      event.strftime(
        "<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
          "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" +
          "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" +
          "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"
      )
    );
  });
})(jQuery);
