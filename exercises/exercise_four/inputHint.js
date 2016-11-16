'use strict';

class InputHint {
  constructor() {
    this.$searchLabel = $('form label[for="q"]');
    this.$searchInput = $('input.input_text');
    this.init();
  }

  init() {
    this.searchInputHint();
  }

  searchInputHint()  {
    const $labelText = this.$searchLabel.text();

    //Set the value of the search input to the text of the label element
    this.$searchInput.val(this.$searchLabel.text());

    //Add a class of "hint" to the search input
    this.$searchInput.addClass('hint');

    //Remove the label element
    this.$searchLabel.remove();

    //Bind a focus event to the search input that removes the hint text and the "hint" class
    this.$searchInput.on({
      'focus': function() {
        $(this).removeClass('hint').val('');
       },
      'blur': function() {
        if ($(this).val().trim() === '') {
          $(this).addClass('hint').val($labelText);
        }
       }
    });
  }
}

$(function() {
  new InputHint();
});
