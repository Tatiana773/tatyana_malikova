
function unique(arr) {
    let newArr = [];
    for(let item of arr){
        if(!newArr.includes(item)) newArr.push(item);
    }
    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

alert( unique(strings) ); 