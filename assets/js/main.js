(function ($) {
  "use strict";

  /*------------------------
  window area start
  ---------------------------*/

  // Preloader

  $(window).on('load', function () {
    $('#biLoader').fadeOut();
    $('#biPreloaderBg')
      .delay(350)
      .fadeOut('slow');
    $('body')
      .delay(350);

    // theme black

  });

  /*------------------------
  document area start
  ---------------------------*/

  $(document).ready(function () {


    /*------------------------
    menu area start
    ---------------------------*/

    $(document).on('click', '.toggle-bi-menu', function () {
      $(".bi-all-menu-area ").addClass("bi-show-menu");
    });

    $(document).on('click', '.close-btn-bi', function () {
      $(".bi-all-menu-area ").removeClass("bi-show-menu");
    });

    /*------------------------
    menu area end
    ---------------------------*/

    /*------------------------
    toggle button show/hidden area start
    ---------------------------*/

    $(document).on('click', '.bi-chat-btm , .bi-ba-close-btn', function () {

      $(".bi-ba-chat-content").toggleClass("bi-bd-show-chat");

    });

    /*------------------------
    toggle button show/hidden area end
    ---------------------------*/

    /*------------------------
    WOW area start
    ---------------------------*/

    new WOW().init();

    /*------------------------
    WOW area end
    ---------------------------*/

  });






})(jQuery);
