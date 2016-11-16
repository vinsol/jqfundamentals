class StackedDiv {
  constructor(addButton) {
    this.$addButton = addButton;
    this.$mainContainer = $('#main_content');
    this.counter = 1;
    this.bindEvents();}

  bindEvents() {
    const self = this;
    this.$addButton.on('click', function() {
      this.addStackedDiv();
    }.bind(this));
    this.$mainContainer.on('click', 'div', function() {
      const $div = $(this);
      self.highlightAndDelete($div);
    });
  }

  addStackedDiv() {
    const $div = $('<div/>');
    const $p = $('<p/>').html(this.counter++);
    this.$mainContainer.append($div.append($p));
  }

  highlightAndDelete($div) {
    if($div.is(':last-child')) {
      $div.remove();
      --this.counter;
    } else {
      $div.toggleClass('highlight');
    }
  }}

$(function () {
  const $addButton = $('#addButton');
  new StackedDiv($addButton);
  }
);
