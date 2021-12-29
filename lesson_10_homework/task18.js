
function calc(){
    let sum = 0;
    for(let i = 1; i <= 10; i++){
        let num = +prompt(`Введите ${i}е число`);
        if(num < 0){
            sum += num;
        }else{
            sum = sum;
        }
    }
    console.log(sum);
}
calc();