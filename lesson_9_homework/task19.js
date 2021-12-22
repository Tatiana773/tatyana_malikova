let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
let num3 = +prompt("Введите третье число");
let maxNum = Math.max(num1, num2, num3);
let minNum = Math.min(num1, num2, num3);
alert(`Разница большего и меньшего: ${maxNum - minNum}`);