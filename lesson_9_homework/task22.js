let question1 = confirm("Нужно перевести дюймы в сантиметры?");
if(question1 == true){
   let inch = +prompt("Введите число в дюймах"); 
   alert(`${inch} дюйма = ${(inch * 2.54).toFixed(2)} см`);
}else{
    let question2 = confirm("Нужно перевести сантиметры в дюймы?");
    if(question2 == true){
      let sm = +prompt("Введите число в сантиметрах"); 
      alert(`${sm} см = ${(sm/2.54).toFixed(2)} дюйма`);
    }else{
        alert("До встречи!")
    }
}


