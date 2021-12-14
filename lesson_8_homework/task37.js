let numA = 3;
let numB = 1;
let numC = 2;
let midNum;
if(numA > numB && numA > numC){
    if(numB > numC){
      midNum = numB;  
    }else{
        midNum = numC;
    }
}
else if(numB > numA && numB > numC){
    if(numA > numC){
        midNum = numA;  
      }else{
        midNum = numC;
    }
}
else if(numC > numB && numC > numA){
    if(numB > numA){
        midNum = numB;  
    }else{
        midNum = numA;
    }
}
console.log(midNum);