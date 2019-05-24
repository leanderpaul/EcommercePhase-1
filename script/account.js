$('.viewBill').click(function () {
    let billNumber = $(this).attr('id');
    $('.modal-body .products').text('');
    $.get('/account/bill/' + billNumber, function (msg) {
        $('.modal-header .billNumber').text('Bill Number: ' + billNumber);
        msg.bill.products.forEach(element => {
            let productModal = modalPart1 + element.product.image + modalPart2 + element.product.name +
                modalPart3 + element.product.price + modalPart4 + element.quantity + modalPart5 +
                (element.product.price * element.quantity) + modalPart6;
            $('.modal-body .products').append(productModal);
        });
        console.log(msg);
        let date = new Date(msg.bill.date);
        $('.date').text('Date: ' + date.toLocaleString());
        $('.total').text('Total: ' + msg.bill.total);
    });
});

var modalPart1 = '<section class="col-sm-3 text-center modal-img-container item">' +
            '<img src="http://localhost:9090/images/products/';
var modalPart2 = '" class="modal-img">' +
            '</section><section class="col-sm-3 item">' +
            'Name: <span class="productName">';
var modalPart3 = '</span><br>' +
            'Price: <span class="productPrice">';
var modalPart4 = '</span><br>' +
            'Quantity: <span class="productQuantity">';
var modalPart5 = '</span><br>' +
            'Total: <span class="price">';
var modalPart6 = '</span><br>' +
            '</section>';

function edit() {
    $('#firstName').prop('disabled', false);
    $('#lastName').prop('disabled', false);
    $('#mobileNumber').prop('disabled', false);
    $('.fa-check').removeClass('invisible');
    $('.fa-pencil-alt').addClass('invisible');
}

function edited() {
    $('#firstName').prop('disabled', true);
    $('#lastName').prop('disabled', true);
    $('#mobileNumber').prop('disabled', true);
    $.post('/account/updateAccount', {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        mobileNumber: $('#mobileNumber').val()
    }).done((data) => {
        alert(data);
        $('.fa-check').addClass('invisible');
        $('.fa-pencil-alt').removeClass('invisible');
    });
}