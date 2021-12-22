let a = 3;
let b = 2;
let c = 1;
if((a < b && b < c) || (a > b && b > c)){
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