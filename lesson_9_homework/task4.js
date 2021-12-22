let a = -3;
let b = -2;
let c = 1;
let sum1 = a - b;
let sum2 = a - c;
if(sum1 < 0){
    sum1 = sum1 * (-1);
}
if (sum2 < 0){
    sum2 = sum2 * (-1);
}
if(sum1 > sum2){
    console.log("Точка С: " +c +" Расстояние до точки А: " + sum2);
}
else if(sum1 < sum2){
    console.log("Точка B: " +b +" Расстояние до точки А: " + sum1);
}