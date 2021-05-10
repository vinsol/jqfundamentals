class TabNavigation {
  constructor() {
    this.tabList = [];
    this.moduleMap = new Map();
    Array.from($('.module')).map((node) => {
      this.moduleMap.set($(node).find('h2').text(), $(node));
    });
  }

  createTabs() {
    $('.module').hide();
    const unorderedListElement = $('<ul></ul>');
    unorderedListElement.insertBefore('.module:first');
    $('.module').each((index, value) => {
      const listElement = $('<li/>').text($(value).find('h2').text())
      unorderedListElement.append(listElement);
      this.tabList.push(listElement);
    });
    this.addEventListeners()
  }

  addEventListeners() {
    this.tabList.forEach((node) => {
      node.bind('click', () => {
        this.updateModuleVisibility($(node).text())
        this.updateCurrentClass($(node).text());
      });
    });
  }

  updateCurrentClass(clickedTabText) {
    this.tabList.forEach((node) => {
      if (node.text() == clickedTabText) {
        node.addClass('current');
      } else {
        node.removeClass('current');
      }
    });
  }

  updateModuleVisibility(clickedTabText) {
    this.moduleMap.forEach((value, key) => {
      if (key === clickedTabText) {
        this.moduleMap.get(key).show();
      } else {
        this.moduleMap.get(key).hide();
      }
    });
  }
}

$(document).ready(() => {
  const tabNavigation = new TabNavigation();
  tabNavigation.createTabs();
});
