let login = prompt("Введите логин");
if(login ==="Админ"){
    let password = prompt("Введите пароль");
    if(password === "Я главный"){
        alert("Здравствуйте!");
    }
    else if(password == null){
        alert("Отмена")
    }
    else{
        alert("Не верный пароль")
    }
}
else if(login == "" || login == null){
    alert("Отменено");
}
else{
    alert("Я вас не знаю");
}