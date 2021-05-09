$(document).ready(() => {
  //1. Add five new list items to the end of the unordered list #myList.
  $('#myList').append('<li>New list item1</li>');
  $('#myList').append('<li>New list item2</li>');
  $('#myList').append('<li>New list item3</li>');
  $('#myList').append('<li>New list item4</li>');
  $('#myList').append('<li>New list item5</li>');

  //2. Remove the odd list items
  $('#myList :nth-child(2n + 1)').remove();

  //3. Add another h2 and another paragraph to the last div.module
  $('div .module').last().append('<h2>Hello</h2>');
  $('div .module').last().append('<p>This is newly added paragraph</p>');

  //4. Add another option to the select element; give the option the value "Wednesday"
  $('#specials form select').append('<option value="Wednesday">Wednesday</option>');

  //5. Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  const addedElement = $('<div class="module"></div>').insertAfter('div .module:last');
  $('#slideshow li:first img').clone().appendTo(addedElement);
});
