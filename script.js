function registration() {
    let mail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    if (mail == "" || password == "" || confirmpassword == ""){
        alert("Не все поля заполнены")
    } else {
        if (mail.match(/.+@.+\..+/i) != mail) {
            alert("Введен некорректный e-mail");
        } else {
            if (password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g) != password) {
                alert('Пароль должен состоять не менее чем из 8 символов, а также не менее 1 символа верхнего и нижнего регистра и не менее 1 цифры');
            } else {
                if (password != confirmpassword) {
                    alert('Пароли не совпадают');
                } else {
                    document.getElementById('email').value = "";
                    document.getElementById('password').value = "";
                    document.getElementById('confirmpassword').value = "";
                    alert("Регистрация прошла успешно");
                }
            }
        }
    }
}
