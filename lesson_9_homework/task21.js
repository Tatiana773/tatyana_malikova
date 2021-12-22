let numA = 34;
let sum;
if(numA >=10){
    console.log("В числе две цифры");
    sum = Math.trunc(numA/10) + (numA % 10);

}else{
    console.log("В числе одна цифра");
    sum = numA;
}
console.log("Сумма цифр из числа: " + sum);