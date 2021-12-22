let pointA = {
    x: -3,
    y: 3,
};
let pointB = {
    x: 2,
    y: 3,
};
let pointC = {
    x: 2,
    y: -5,
};
let pointD = {};
if(pointA.x == pointB.x){
    pointD.x = pointC.x;
}
else if(pointA.x == pointC.x){
    pointD.x = pointB.x;
}
else{
    pointD.x = pointA.x;
}
if(pointA.y == pointB.y){
    pointD.y = pointC.y;
}
else if(pointA.y == pointC.y){
    pointD.y = pointB.y;
}
else{
    pointD.y = pointA.y;
}
console.log("D: x = "+ pointD.x+" y = "+ pointD.y);