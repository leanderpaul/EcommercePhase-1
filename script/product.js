$('.add-to-cart').click(function() {
    let user = $('body').find('.user-logged');
    if(user.length == 0) {
        alert('Login to Add to Cart');
    } else {
        let data = {
            productId: $('#productId').val(),
            quantity: $('#quantity').val()
        };
        $.post('/account/addToCart',data).done(function(data) {
            console.log(data);
            if(data.err) {
                alert('Failed to Add to Cart');
            } else {
                alert('Added to cart successfully');
            }
        });
    }
});