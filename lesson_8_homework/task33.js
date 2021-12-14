let numA = 120;
let numB = 80;
let numMin;
let numMax;
if(numA < numB){
    numMin = numA;
    numMax = numB;
}
else if(numA > numB){
    numMin = numB;
    numMax = numA;
}
numA = numMin;
numB = numMax;
console.log( "A: "+numA);
console.log("B: " +numB);