'use strict';

class RevealHiddenText {
  constructor($blog) {
    this.$blog = $blog;
    this.init();}

  init() {
    this.revealExcerpt(this.$blog);
  }

  revealExcerpt($blog) {
   $blog.find('h3').on('click', function(e) {
      e.preventDefault();
      const $p = $(this).next();


   $p.slideToggle('slow');

      $('p.excerpt')
        .not($p)
        .slideUp();
    });
}}

$(function() {
  const $blog = $('#blog');
  new RevealHiddenText($blog);
});
