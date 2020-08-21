class TabbedNavigation {
  constructor(classSelector) {
     this.tabs = $(classSelector);
     this.listElement = $("<ul></ul>");
  }

  init() {
    // Hide all of the modules.
    this.tabs.hide();
    this.insertListItems();
    this.bindClickToList();
    // Finally, show the first tab.
    this.listElement.children().first().trigger('click');
  }

  insertListItems() {
    let listItems = [];
    // Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
    this.tabs.each(function() {
      let h2Element = $(this).children("h2");
      listItems.push("<li>" + h2Element.first().text() + "</li>");
    });
    this.listElement.append(listItems.join(''));
    // Create an unordered list element before the first module.
    this.listElement.insertBefore(this.tabs.first());
  }

  bindClickToList() {
    // Bind a click event to the list item that:
    // Shows the related module, and hides any other modules
    // Adds a class of "current" to the clicked list item
    // Removes the class "current" from the other list item
    this.listElement.bind("click", function(event) {
      if(event.target.tagName === "LI") {
        let clickedItem = $(event.target),
            relatedModule = $("[data-id='" + clickedItem.text().toLowerCase() + "']");
        relatedModule.show();
        relatedModule.siblings("div[data-class='module']").hide();
        clickedItem.addClass('current');
        clickedItem.siblings().removeClass('current');
      }
    });
  }
}
let tabbedNavigation = new TabbedNavigation("div[data-class='module']");
tabbedNavigation.init();