let pointA = {
    x: 8,
    y: -10,
}
if(pointA.x > 0 && pointA.y > 0){
    console.log("I четверть");
}
else if(pointA.x < 0 && pointA.y > 0){
    console.log("II четверть");
}
else if(pointA.x < 0 && pointA.y < 0){
    console.log("III четверть");
}
else if(pointA.x > 0 && pointA.y < 0){
    console.log("VI четверть");
}