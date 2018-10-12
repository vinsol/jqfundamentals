//Select all of the div elements that have a class of "module".
$('div.module')

//Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
$('#myList>li:nth-child(3)')
$('#myList>li:eq(2)') // is this same as next?
$('#myList>li').eq(2) //This one is better.
$('#myList li').eq(2)


//Select the label for the search input using an attribute selector.
$("label[for='q']")

//Figure out how many elements on the page are hidden
$(":hidden").length

//Figure out how many image elements on the page have an alt attribute.
$("img[alt]").length

//Select all of the odd table rows in the table body.
('tbody>tr:odd').length
