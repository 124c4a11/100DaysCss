'use strict';

$(document).ready(function() {
  $('.widget__search-toggle').on('click', function(e) {
    e.preventDefault();

    $('.widget__search').toggleClass('widget__search_visible');
  });

  $('.widget__menu-toggle').on('click', function(e) {
    e.preventDefault();

    $('.widget__panel').toggleClass('widget__panel_move-right');
    $('.widget__menu').toggleClass('widget__menu_move-left');
  });
});