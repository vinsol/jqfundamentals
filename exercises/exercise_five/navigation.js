'use strict';
class DropDownNavigation 
{
  constructor($navList) {
    this.$navList = $navList;
    this.init();
  }

  init() {
    this.showMenu(this.$navList);
  }



  showMenu($navList)
  {    
    $navList.hover(function() {
      $(this)
        .toggleClass('hover')
        .children('ul')
        .slideToggle('slow');
    });
  }}

$(function() {
  const $navList = $('#navli');
  new DropDownNavigation($navList);
});
