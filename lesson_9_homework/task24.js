let side1 = +prompt("Введите первую сторону");
let side2 = +prompt("Введите вторую сторону");
let side3 = +prompt("Введите третью сторону");
if((side1 + side2) > side3 && (side1 + side3) > side2 && (side3 + side2) > side1){
    console.log("Получился треугольник");
}else{
    console.log("Это не треугольник");
}