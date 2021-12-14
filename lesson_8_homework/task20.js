// вариант с Не
let age = 91;
if(!(age >= 14 && age <= 90)){
    console.log("Ok");
}
else{
    console.log("not Ok");
}
// вариант без Не
let age = 10;
if(age < 14 || age > 90){
    console.log("Ok");
}
else{
    console.log("not Ok");
}