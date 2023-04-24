 $(document).ready(function () {
    $('#confirmPwd').keyup(function () {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPwd').val();
        if (password != confirmPassword) {
            //$('#confirmPwd').css('background-color', '#FEE8E8'); 
            $('#confirmPwd').css('border-color', 'red');
        }
        else {
            //$('#confirmPwd').css('background-color', '');
            $('#confirmPwd').css('border-color', '');
        }
    });

    $('#password').keyup(function () {
            var password = $('#password').val();
        var confirmPassword = $('#confirmPwd').val();
        if (password == confirmPassword) {
        //$('#confirmPwd').css('background-color', '');
            $('#confirmPwd').css('border-color', '');
            }
    });


    $('#show-password').click(function () {
        var passwordField = $('#password');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType == 'password') {
            passwordField.attr('type', 'text');
            $(this).html('<i class="fas fa-eye-slash"></i>');
        } else {
            passwordField.attr('type', 'password');
            $(this).html('<i class="fas fa-eye"></i>');
        }
    });

    $('#show-confirm-password').click(function () {
        var confirmPwdField = $('#confirmPwd');
        var confirmPwdFieldType = confirmPwdField.attr('type');
        if (confirmPwdFieldType == 'password') {
            confirmPwdField.attr('type', 'text');
            $(this).html('<i class="fas fa-eye-slash"></i>');
        } else {
            confirmPwdField.attr('type', 'password');
            $(this).html('<i class="fas fa-eye"></i>');
        }
    });

});

