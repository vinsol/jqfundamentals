//Add five new list items to the end of the unordered list #myList.
div = $('<div>');
listItem = $('<li>').html('<span>List item<span>');
for (var i = 0; i < 5; i++) {
  div.append(listItem.clone());
}
$('#myList').append(div);

//Remove the odd list items
$('li:nth-child(odd)').remove();

//Add another h2 and another paragraph to the last div.module
var heading = $('<h2>').text('Hello');
var paragraph = $('<p>').text('Yes it is.');
var newDiv = $('<div>').append(heading, paragraph);
$('div.module').last().append(newDiv);

//Add another option to the select element; give the option the value "Wednesday"
var option = $('<option>').text('Wednesday').attr('value', 'Wednesday');
$("select[name='day']").append(option);

//Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
var newDiv = $('<div>').addClass('module').append($('img').get(0));
$("div.module").last().after(newDiv);
