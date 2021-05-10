$(document).ready(() => {
  const searchInput = $('#search input[type=text]')
  const label = $('#search label:first')
  const hintText = label.text()
  searchInput.val(hintText);
  searchInput.addClass('hint');
  label.remove();

  searchInput.bind({
    focus: function() {
      $(this).removeClass('hint');
      if ($(this).val() == hintText) {
        $(this).val('');
      }
    },
    blur: function() {
      if ($(this).val() === '') {
        searchInput.addClass('hint');
        $(this).val(label.text());
      }
    }
  });
});
