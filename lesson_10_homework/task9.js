
function extractCurrencyValue(str){
   let sum = str.slice(1);
   if(!isNaN(sum)){
       return sum;
   }
    return false;
   
}
console.log(extractCurrencyValue("$1500"));