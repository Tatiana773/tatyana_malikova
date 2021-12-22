let num = 100;
let str = "число";
if(num <=0 || num >= 1000){
    str = "Запрещенное " + str;
}else{
    if(num % 2 == 0){
        str = "четное " + str;
    }else{
        str = "нечетное " + str;
    }
    if(num > 0 && num < 10){
        str = "однозначное " + str;
    }
    else if(num >= 10 && num < 100){
        str = "двузначное " + str;
    }
    else if(num >= 100 && num < 1000){
        str = "трехзначное " + str;
    }
}
console.log(str);