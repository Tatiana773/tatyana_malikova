
function truncate(str, maxlength){
    if(str.length > maxlength){
       return str.slice(0,maxlength-3) + "...";
    }
    return str;
    
}

console.log(truncate("Это очень долгая, но поучительная история.", 15));