'use strict';

class SandBox {
  constructor() {
    //Selecting all of the div elements that have a class of “module”.
    this.$module = $('div.module');

    /* 
    * Three selectors that you could use to get the third item in the #myList unordered list.
    * ulSelector1 is faster because of the use of Increased Specificity and it's equivalence to getElementById by the fact that only the required element is visited for the search.
    */
    this.$ulSelector1 = $('#myList > li#myListItem');
    this.$ulSelector2 = $('#myList').find('li:nth-child(3)');
    this.$ulSelector3 = $('#myList li').eq(2);

    //Select the label for the search input using an attribute selector.
    this.$searchInput = $('form label[for="q"]');

    //Figure out how many elements on the page are hidden
    // In some browsers :hidden includes head, title, script, etc...
    this.$hiddenElements = $('body')
      .find(':hidden')
      .not('script');

    //Figure out how many image elements on the page have an alt attribute.
    this.$altAttribute = $('img[alt]');

    //Select all of the odd table rows in the table body.
    this.$oddRows = $('table tr:even');

    //Select the select element inside #specials
    this.$selectElement = $('#specials select');

    this.init();
  }

  init() {
    this.selectors();
    this.traversing();
    this.Manipulator();
  }

  selectors() {
    console.log(`Selectors: \nSelector 1: ${this.$ulSelector1.length} 
      \nSelector 2: ${this.$ulSelector2.length} 
      \nSelector 3: ${this.$ulSelector3.length} 
      \nModule Class: ${this.$module.length} 
      \nSearch Input: ${this.$searchInput.length} 
      \nOdd Rows: ${this.$oddRows.length} 
      \nHidden Elements: ${this.$hiddenElements.length} 
      \nImages With Alt Attribute: ${this.$altAttribute.length}`);
  }

  traversing() {
    console.log(`Traversing:`);

    //Select all of the image elements on the page; log each image’s alt attribute.
    $('img').each(function(index) {
      console.log(`Image at ${index} has an attibute of ${$(this).attr('alt')}`);
    });

    //Select the search input text box, then traverse up to the form and add a class to the form.
    this.$searchInput.parent('#search').addClass('myForm');

    //Select the list item inside #myList that has a class of “current” and remove that class from it; add a class of “current” to the next list item.
    $('ul#myList > li.current').removeClass('current')
      .next()
      .addClass('current');

    //Select the select element inside #specials; traverse your way to the submit button.
    const $d = this.$selectElement.closest('ul')
      .find('input[type="submit"]');

    //Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
    $('#slideshow li').filter(':first')
      .addClass('current')
      .siblings()
      .addClass('disabled');
  }

  Manipulator() {
    console.log(`\nManipulating:`);
    const $myList = $('#myList');
    const fragment = []
    //Add five new list items to the end of the unordered list #myList.
    for (let i = 8; i <= 12; i++) {
      fragment.push(`<li>List Item ${i}</li>`);
    } //end for loop
    $myList.append(fragment);

    //Remove the odd list items
    $('#myList li').filter(':even').remove();

    //Add another h2 and another paragraph to the last div.module
    this.$module.filter(':last')
      .append($('<h2 />', {'text': 'Another H2'}),
       $('<p />', {'text': 'Another paragraph'}));


    //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
    const $newDiv = $('<div />', {'class': 'module'});
    $newDiv.append($('img')
      .clone()
      .get(1))
      .insertAfter(this.$module.last());
  }
}

$(function() {
  new SandBox();
});
