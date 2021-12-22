
for(let i = 0; i < 3; i++){
   let num1 = +prompt("Введите первое число"); 
   for(let j = 0; j < i+1; j++){
       let num2 = +prompt("Введите второе число");
       let num = (num1 + num2)/2;
       alert(`Среднее арифметическое: ${num}`);
   }
   break;
}