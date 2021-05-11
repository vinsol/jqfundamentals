class BlogSlider {
  constructor(blogSliderObject) {
    this.blogSliderObject = blogSliderObject;
  }

  init() {
    this.removeBlogHref();
    this.bindEvents();
  }

  removeBlogHref() {
    $(this.blogSliderObject.blogHrefSelector).removeAttr("href");
  }

  bindEvents() {
    const paragraphSelector = this.blogSliderObject.excerptParagraphsSelector;
    $(this.blogSliderObject.blogHeaderSelector).click(function() {
      $(paragraphSelector).slideUp("slow");
      $(this).siblings().slideDown("slow");
    });
  }
}

$(document).ready(() => {
  const blogSliderObject = {
    blogHeaderSelector: "#blog li h3",
    blogHrefSelector: "#blog li a",
    excerptParagraphsSelector: "#blog li p"
  }
  const blogSlider = new BlogSlider(blogSliderObject);
  blogSlider.init();
});
