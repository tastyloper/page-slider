$(function() {

  $('#slides').slidesjs({
    width: 940,
    height: 2000,
    pagination: {
      active: true,
      effect: "fade"
    },
    effect: {
      fade: {
        speed: 400
      }
    },
    callback: {
      complete: function(number) {
        var datanum = number - 1;
        // Change slide number on animation complete
        $('.custom-navigation a').removeClass('active');
        $('.custom-navigation a[data-slidesjs-item=' + datanum + ']').addClass('active');
      }
    }
  });

  sjs = $('#slides').data('plugin_slidesjs');

  $('.custom-navigation a').on('click', function(clickevent) {
    var target = Number($(this).attr("data-slidesjs-item")) + 1;
    sjs.goto(target);
  });

});
