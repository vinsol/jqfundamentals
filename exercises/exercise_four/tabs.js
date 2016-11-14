'use strict';

class TabbedNavigation {
  constructor() {
    this.init();
  }

  init() {
    const $ModDivs = $('.module');
    // Hide all of the modules.
    $ModDivs.hide();

    // Creating an unordered list element before the first module
    const $unorderedItem = $('<ul/>').insertBefore($ModDivs.first());

    this.appendListItem($ModDivs, $unorderedItem);
    this.bindEventToList($ModDivs, $unorderedItem);
  }

  appendListItem($ModDivs, $unorderedItem) {
    // Iterate over the modules using $.fn.each. 
    $ModDivs.each(function() {
      const $h2 = $(this).children('h2').html();
      const $listItem = $('<li/>').html($h2);
      $listItem.appendTo($unorderedItem);
    });
  }

  bindEventToList($ModDivs, $unorderedItem) {
const $listItems = $unorderedItem.children();
 $listItems.on('click', function() {
     const $index = $listItems.index(this);
      $(this).addClass('current')
 .siblings('li')
.removeClass('current');
    $ModDivs.eq($index)
        .show('slow')
   .siblings('.module')
        .hide('slow');
    });

    $listItems.eq(0)
      .addClass('current');

    $ModDivs.eq(0)
      .show();
  }
}










$(function() {
  new TabbedNavigation();
});
