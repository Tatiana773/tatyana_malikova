let num = 4;
let str = "число";
if(num == 0){
  str = "Нулевое " + str;  
}else{
    if(num % 2 == 0){
        str = "четное " + str;
    }else{
        str = "нечетное " + str;
    }
    if(num < 0){
    str = "Отрицательное " + str;
    }else{
    str = "Положительное " + str;  
    }
}
console.log(str);