let a = 2;
let b = 1;
let c = 3;
if(a < b && b < c){
    a = a * 2;
    b = b * 2;
    c = c * 2;
}else{
    a = (-a);
    b = (-b);
    c = (-c);
}
console.log(a);
console.log(b);
console.log(c);