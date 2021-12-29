
// 1 способ
function calc(income, costs, value){
    let sum = 0;
    let i = 0;
    do{
        sum += (income - costs);
        i++;
    }while(sum < value);
    console.log(`Пальма будет через ${i} месяцев`);
}
// calc(3333, 1750, 8000);

//2 способ
function calc(income, costs, value){
    let sum = 0;
    let month;
    for(let i = 1; sum < value; i++){
         sum += (income - costs);   
         month = i;
    }
    console.log(`Пальма будет через ${month} месяцев`);
}  
// calc(3333, 1750, 8000);

// 3 способ
function calc(income, costs, value){
    return Math.ceil(value/(income - costs));
}
console.log(`Пальма будет через ${calc(3333, 1750, 8000)} месяцев`);

