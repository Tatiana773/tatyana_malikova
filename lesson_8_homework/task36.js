let numA = 10;
let numB = 20;
let numC = 40;
let minNum;
if(numA < numB && numA < numC){
    minNum = numA;
}
else if(numB < numA && numB < numC){
    minNum = numB;
}
else if(numC < numB && numC < numA){
    minNum = numC;
}
console.log(minNum);