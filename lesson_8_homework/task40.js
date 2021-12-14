let numA = 2;
let numB = 1;
let numC = 2;
let order;
if(numA == numB){
    order = 3;
}
else if (numB == numC){
    order = 1;
}
else if(numC==numA){
    order = 2;
}
console.log(order);