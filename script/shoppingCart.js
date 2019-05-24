$('.remove-item').click(function() {
    let data = {
        itemId: $(this).attr('id')
    };
    console.log(data);
    $.post('/account/removeProduct', data).done(function(msg) {
        console.log(msg);
        if(msg) {
            location.reload();
        } else {
            alert('Cannot remove product');
        }
    });
});