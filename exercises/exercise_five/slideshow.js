'use strict';
class slideShow{

  constructor()
  {
    this.speed=1000;
    this.$slideElements = $("#slideshow")
    this.init();
  }



  init() 
  {
    const total = this.$slideElements.find('li').length;
    const $span = $('<span />')
      .addClass('currentIndex')
      .text(`1`);
    const $div = $('<div />')
      .addClass('slideNavigation')
      .html(` of ${total}`)
      .prepend($span)
      .insertBefore('#header');

    this.$slideElements.prependTo('body');
    const $items = this.$slideElements.find('li').hide();
    this.$slideElements.find('p').css({'width': '60%', 'text-align': 'justify'});

    this.showInitialSlide($items); }

  showInitialSlide($items) 
  {
    $items.first().fadeIn(this.speed, function() {
      this.doSlideShow();
    }.bind(this)).delay(1000);
  }

  doSlideShow() {
    const $visible = this.$slideElements.find('li:visible');
    let $next = $visible.next();
    ($next.length) ? $next : ($next = this.$slideElements.find('li').first());
    $visible.fadeOut(1000, function() {
      $next.fadeIn(this.speed).delay(200);
    });
    this.showCurrentSlide();
    setTimeout(function() {
      this.doSlideShow();
    }.bind(this), 300);
  }

  showCurrentSlide() {
    const current = this.$slideElements.find('li:visible').index() + 1;
    $('span.currentIndex').html(`${current}`);
  }
}

$(function() {
  new slideShow();
});
