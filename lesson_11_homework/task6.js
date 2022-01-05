
function calculator(a, b, operator){
    switch(operator){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        case "%": return a * b / 100;
        case "**": return a ** b;
        case "r": return a ** (1/b);
    }
}
console.log(calculator(2,3,"+"));
console.log(calculator(2,3,"-"));
console.log(calculator(2,5,"*"));
console.log(calculator(2,5,"/"));
console.log(calculator(2,10,"%"));
console.log(calculator(2,3,"**"));
console.log(calculator(8,3,"r"));
console.log(calculator(5,8,"%"));
console.log(calculator(10,9,"**"));
console.log(calculator(16,4,"r"));
console.log(calculator(-3,2,"/"));
