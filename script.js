function displayError(message) {
	document.getElementById('error').innerHTML = `<b>Ошибка!</br>${message}</b>`;
    document.getElementById('error').style.display = "block";
    document.getElementById('error').style.color = "red";
}   

function success() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirmpassword').value = "";
    document.getElementById('error').style.color = "green";
    document.getElementById('error').style.display = "block";
    document.getElementById('error').innerHTML = '<b>Регистрация прошла успешно</b>';

}

function registration(){
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    
    if (!mail || !password || !confirmpassword ){
        displayError ('Не все поля заполнены');
        
        return;
    }

    let checkmail = mail.match(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/);

    if (!checkmail) {
        displayError('Введен некорректный e-mail!');
    
    return;
    }

    let checkpassword = password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g);

    if (!checkpassword) {
        displayError('Пароль должен состоять минимум из 8 символов, а также включать миниммум 1 символ верхнего регистра и 1 цифру');

        return;
    }

    if (password != confirmpassword) {
        displayError('Пароли не совпадают');

        return;
    }
    
    success();
} 
