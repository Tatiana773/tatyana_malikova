let num = +prompt("Введите трехзначное число");
let num1 = Math.trunc(num / 100);
let num2 = Math.trunc((num % 100) / 10);
let num3 = num % 10;
if(num % 2 ==0){
    console.log(`Четное число. Сумма цифр: ${num1 + num2 + num3}`);
}else{
    console.log(`Нечетное число. Произведение цифр: ${num1 * num2 * num3}`);
}