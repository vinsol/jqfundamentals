'use strict';

class ProductDisplay {
  constructor() {
    this.init();
  }

  init() {
    this.getProductData();
    this.data;
    this.$brands = $('#brands');
    this.$colors = $('#colors');
    this.$available = $('#available');
    this.$brands
      .add(this.$colors)
      .add(this.$available)
      .on('click', function() {
        this.filterProductData();
      }.bind(this));

    $('#all').on('click', function() {
      this.getProducts(this.data);
    }.bind(this));
  }

  getProductData() {
    $.ajax({
      url: 'product.json',
      dataType: 'json',
      success: function(data) {
        this.cachedData(data);
      }.bind(this),
      error: function() {
        console.log(`Error loading specials.json`);
      },
      cache: false
    });
  }

  cachedData(data) {
    this.data = data;
    this.getProducts(this.data);
  }

  filterProductData() {
    const $checkedBrands = this.$brands.find('input:checked');
    const $checkedColors = this.$colors.find('input:checked');
    const availability = $('#available').is(':checked');
    const $container = $('#main_content');
    const $span = $('span');
    let itemStatus = ''
    if(availability) {
      itemStatus = 0;
    }
    let $brandDataValue = '';
    let $colorDataValue = '';
    let filter = [];
    $container
      .find('span:visible')
      .hide();

    if ($checkedBrands.length && $checkedColors.length && itemStatus === 0) {
      $checkedBrands.each(function() {
        $brandDataValue = $(this).val();
        $checkedColors.each(function() {
          $colorDataValue = $(this).val();
          $($span.filter(`[data-brand="${$brandDataValue}"]`).filter(`[data-color="${$colorDataValue}"]`).filter(`[data-soldout="${itemStatus}"]`)).show();
        });
      });
    } else if ($checkedBrands.length && $checkedColors.length || $checkedBrands.length && itemStatus === 0 || $checkedColors.length && itemStatus === 0) {
        $checkedBrands.each(function() {
          $brandDataValue = $(this).val();
          $checkedColors.each(function() {
            $colorDataValue = $(this).val();
            $($span.filter(`[data-brand="${$brandDataValue}"]`).filter(`[data-color="${$colorDataValue}"]`)).show();
          });
        });
        $checkedBrands.each(function() {
          $brandDataValue = $(this).val();
          $($span.filter(`[data-brand="${$brandDataValue}"]`).filter(`[data-soldout="${itemStatus}"]`)).show();
        });
        $checkedColors.each(function() {
          $colorDataValue = $(this).val();
          $($span.filter(`[data-color="${$colorDataValue}"]`).filter(`[data-soldout="${itemStatus}"]`)).show();
        });
      } else if ($checkedBrands.length || $checkedColors.length || itemStatus === 0) {
        $checkedBrands.each(function() {
          $brandDataValue = $(this).val();
          $($span.filter(`[data-brand="${$brandDataValue}"]`)).show();
        });
        $checkedColors.each(function() {
          $colorDataValue = $(this).val();
          $($span.filter(`[data-color="${$colorDataValue}"]`)).show();
        });
        $($span.filter(`[data-soldout="${itemStatus}"]`)).show();
      } else {
        this.getProducts(this.data);
      }
  }

  displayProducts(data) {
    const $span = $('<span />')
      .attr({
        'data-name': data.name,
        'data-color': data.color,
        'data-brand': data.brand,
        'data-soldout': data.sold_out
      })
    let $image = $('<img />').attr('src',  `images/${data.url}`);
    $span.append($image);
    $('#main_content').append($span);
  }

  getProducts(data) {
    $('#main_content').empty();
    $('#filter').find('input:checked').prop('checked', false);
    $.each(data, function(index, data) {
      this.displayProducts(data);
    }.bind(this));
  }
}

$(function() {
  new ProductDisplay();
});
