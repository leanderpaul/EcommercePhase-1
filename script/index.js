$('.product').hover(function() {
    $(this).find('img').addClass('product-description');
    $(this).find('.carousel-caption').removeClass('default-product-content');
    $(this).find('.carousel-caption').addClass('black');
});

$('.product').mouseleave(function() {
    $(this).find('img').removeClass('product-description');
    $(this).find('.carousel-caption').addClass('default-product-content');
    $(this).find('.carousel-caption').removeClass('black');
});
