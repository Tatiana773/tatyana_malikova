let numA = 1;
let numB = 2;
let numC = 3;
let max;
let mid;
if(numA > numB && numA > numC){
    max = numA;
    if(numB > numC){
        mid = numB;
    }else{
        mid = numC;
    }
}
else if(numB > numA && numB > numC){
    max = numB;
    if(numA > numC){
        mid = numA;
    }else{
        mid = numC;
    }
}
else if(numC > numA && numC > numB){
    max = numC;
    if(numA > numB){
        mid = numA;
    }else{
        mid = numB;
    }
}
let sum = max + mid;
console.log(sum);