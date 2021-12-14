let numA = 120;
let numB = 12;
let numMax;
if(numA !== numB){
    if(numA > numB){
        numMax = numA;
    }
    else{
        numMax = numB;
    }
}
else {
    numMax= 0;
}
numA = numMax;
numB = numMax;
console.log( "A: "+numA);
console.log("B: " +numB);