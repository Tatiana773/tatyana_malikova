
function filterRange(arr, a, b){
   return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 8, 3, 15, -2, 85, 67, 4, 7, 1, -20, 9, -3, 0, 58];
let filtered = filterRange(arr, 7, 70);
console.log(filtered);
console.log(arr);