let year = 2024;
if(year % 4 == 0){
    if(year % 100 == 0 && year % 400 !=0){
        console.log("год не высокосный, в нем 365 дней");
    }else{
        console.log("Высокосный год, в нем 366 дней");
    }
    
}else{
    console.log("год не высокосный, в нем 365 дней");
}
