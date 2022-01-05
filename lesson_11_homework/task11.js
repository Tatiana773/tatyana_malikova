
function unique(arr) {
    let selected = new Set(arr);
    let newArr = [];
    for(let value of selected){
        newArr.push(value);
    }
    return newArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert( unique(values) );