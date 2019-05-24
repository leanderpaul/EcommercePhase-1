function check() {
    if(validateEmail() && validateName() && validatePassword() && validatePhoneNumber()) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhoneNumber() {
    var phoneNo = document.getElementById('mobileNumber').value;
    if(phoneNo.toString().length == 10) {
        return true;
    } else {
        return false;
    }
}

function validatePassword() {
    var re = /\S{8,}/
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if(password === confirmPassword && re.test(password)) {
        return true;
    } else {
        return false;
    }
}

function validateName() {
    var re = /\S{1,}/;
    if(re.test(document.getElementById('firstName').value) && re.test(document.getElementById('lastName'))) {
        return true;
    } else {
        return false;
    }
}