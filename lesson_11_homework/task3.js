
function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= a || arr[i] >= b){
          arr.splice(i, 1);   
          i--;
        } 
    }
}
let arr = [5, 8, 3, 15, -2, 85, 67, 4, 7, 1, -20, 9, -3, 0, 58];
filterRangeInPlace(arr, 3, 10);
console.log(arr);