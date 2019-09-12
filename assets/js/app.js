(function() {
  'use strict';
  var count_down;
  if ($(".header__mobile_knob").length > 0) {
    $('.header__mobile_knob').on("click", function(e) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        return $(".header_nav_wrap").css('height', '0px');
      } else {
        $(this).addClass('active');
        return $(".header_nav_wrap").css('height', '350px');
      }
    });
  }
  if ($("#section_hero_countdown").length > 0) {
    count_down = $("#section_hero_countdown").data('countdown');
    $("#section_hero_countdown").countdown(count_down, function(event) {
      var total_days;
      total_days = event.offset.totalDays;
      $("#section_hero_countdown .section_hero__countdown__count__item:nth-child(1) p:nth-child(1)").html(total_days);
      $("#section_hero_countdown .section_hero__countdown__count__item:nth-child(2) p:nth-child(1)").html(event.strftime('%d'));
      $("#section_hero_countdown .section_hero__countdown__count__item:nth-child(3) p:nth-child(1)").html(event.strftime('%M'));
      return $("#section_hero_countdown .section_hero__countdown__count__item:nth-child(4) p:nth-child(1)").html(event.strftime('%S'));
    });
  }
})();
