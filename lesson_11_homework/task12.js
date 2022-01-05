
let map = new Map([]);
map.set("name", "John");
let keys = Array.from(map.keys());
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

// map.keys() возвращает итерируемый обьект, поэтому keys не массив, и его нужно сделать массивом.