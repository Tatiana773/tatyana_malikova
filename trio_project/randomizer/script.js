const result = document.querySelector("#result");
let range = [];

function generateNumber(min, max, quantity) {
    let numbers = new Set();
    while (numbers.size < quantity) {
        let num = Math.floor(Math.random() * (max + 1 - min)) + min;
        numbers.add(num);
    }
    return (result.innerText = Array.from(numbers.values()));
}

document.querySelector("#form").onsubmit = function() {
    range.push(+document.querySelector("#start").value);
    range.push(+document.querySelector("#end").value);
    range.sort((a, b) => a - b);
    let min = range[0];
    let max = range[1];
    let quantity = +document.querySelector("#quantity").value;
    if (quantity > max) {
        return result.innerText = "Исходные данные не коректные!"
    } else {
        generateNumber(min, max, quantity);
    }
};
document.querySelector("#reset").onclick = function() {
    result.innerText = "";
    range.length = 0;
};