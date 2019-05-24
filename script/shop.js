$('.productCard').hover(
    function () {
        $(this).addClass('shadow-lg')
    },
    function () {
        $(this).removeClass('shadow-lg')
    }
);

function addToCart() {
    console.log({
        productId: $('.modal-footer .btn').attr('id'),
        quantity: $('#quantity').val()
    });
    $.post('https://localhost:8080/account/addToCart', {
        productId: $('.modal-footer .btn').attr('id'),
        quantity: $('#quantity').val()
    }).done(function (data) {
        console.log(data);
        if (data.message) {
            alert('Added to cart successfully !!!');
        } else {
            alert('Failed to add to cart !!!\nPlease sign into account to shop');
        }
    }).fail(function () {
        alert('Failed to add to cart !!!');
    });
}
$('.seeMore').on('click', function () {
    var productId = $(this).attr('id');
    $.get('/product/' + productId, function (message) {
        var data = message.product;
        $('.modal-header .productName').text(data.name);
        $('.modal-body .modal-image').attr('src', '/resources/images/products/' + data.image);
        $('.modal-body .productPrice').text('Price: &#8377;' + data.price);
        $('.modal-body .description').html('Description:<br>' + data.description);
        $('.modal-footer .btn').attr('id', data._id);
    });
});