let numA = 30;
let numB = 200;
let numC = 120;
let min;
let max;
if(numA > numB && numA > numC){
    max = numA;
    if(numB > numC){
        min = numC;
    }else{
        min = numB;
    }
}
else if(numB > numA && numB > numC){
    max = numB;
    if(numA > numC){
        min = numC;
    }else{
        min = numA;
    }
}
else if(numC > numA && numC > numB){
    max = numC;
    if(numA > numB){
        min = numB;
    }else{
        min = numA;
    }
}
console.log("min: " +min);
console.log("max: "+max);