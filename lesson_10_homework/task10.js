
function sunInput(){
    let arr = [];
    while(true){
        let num = prompt('Введите число');
        if(num === " " || num === null || isNaN(num)){
            break;
        }
        arr.push(+num);  
    };
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
       sum += arr[i];
    };
    return sum;
}
console.log(sunInput());