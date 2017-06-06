'use strict';

$('.hamburger').on('click', function() {
  var $hamburger = $(this);
  $hamburger.toggleClass('hamburger_active');
  $hamburger.removeClass('hamburger_no-animation');
});