
function pow(x, n){
    x = +prompt('Введите число');
    n = +prompt('Введите степень');
    if(n > 1){
      return x**Math.floor(n);
    }
    return;
}
alert(pow());