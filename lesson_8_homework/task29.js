let numA = 5;
let numB = 8;
let numC = 15;
let quantityPos = 0;
let quantityNeg = 0;

if(numA > 0){
    quantityPos++;
}
else if(numA < 0){
    quantityNeg++;
}
if(numB > 0){
    quantityPos++;
}
else if(numB < 0){
    quantityNeg++;
}
if(numC > 0){
    quantityPos++;
}
else if(numC < 0){
    quantityNeg++;
}
console.log("Положительных: " + quantityPos + " Отрицательных: " + quantityNeg);