let pointA = {
    x: -4,
    y: 9,
};
let r = 10;
let l = Math.sqrt(Math.pow(pointA.x,2) + Math.pow(pointA.y, 2));
if(l <= r){
    console.log("Точка принадлежит окружности");
}else{
    console.log("Точка не принадлежит окружности");
}