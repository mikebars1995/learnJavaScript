let login = prompt('Логин', '');
// let pass = prompt ("Введите пароль...", '');
if (login == "Админ"){
    let pass = prompt ("Введите пароль...", '');
    if (pass =='Я Главный'){
        alert('Здравствуйте');
    } else if(pass == "" || pass == undefined){
        alert('Отменено');
    } else{
        alert("Неверный пароль");
    }
} else if (login == "" || login == undefined){
    alert("Отменено");
} else {
    alert('Я вас не знаю');
}