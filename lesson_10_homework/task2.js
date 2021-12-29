
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key])=='number'){
            obj[key] *= 2;
        }
    }
}

let user = {
    name: "Ann",
    age: 25,
    weight: 50,
}
multiplyNumeric(user);
console.log(user);