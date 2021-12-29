
function readNumber(){
   let num;
   do{
      num = +prompt('Введите число');
   }
   while(isNaN(num));
    
   if(num === " " || num === null){
      return null;
   }else{
      return num;
   }
}
console.log(readNumber());