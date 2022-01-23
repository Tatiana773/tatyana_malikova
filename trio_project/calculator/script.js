//global variables
const text = document.querySelector('#text');
const btns = Array.from(document.querySelectorAll('.operator'));
const numbers = Array.from(document.querySelectorAll(".number"));
let operation = [];
let operator;

//buttons
numbers.map(btn => {
    btn.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "0":
                text.innerText += e.target.innerText;
                text.innerText = checkZeros(text.innerText);
                break;
            case ".":
                text.innerText += ".";
                if (text.innerText.includes(".")) {
                    e.target.style.pointerEvents = "none";
                }
                break;
            case '+/-':
                text.innerText = toggleMinus(+text.innerText);
                break;
            default:
                text.innerText += e.target.innerText;
        }
    })
})
btns.map(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector(".dot").style.pointerEvents = "auto";
        switch (e.target.innerText) {
            case 'C':
                text.innerText = "";
                operation.length = 0;
                operator = "";
                break;
            case "x":
                if (operator !== "equal") {
                    operation.push(Number(text.innerText));
                }

                if (operation.length > 1) {
                    equal(e);
                }
                operator = "*";
                text.innerText = "";
                break;
            case "/":
                if (operator !== "equal") {
                    operation.push(Number(text.innerText));
                }
                if (operation.length > 1) {
                    equal(e);
                }
                operator = e.target.innerText;
                text.innerText = "";
                break;
            case "+":
                if (operator !== "equal") {
                    operation.push(Number(text.innerText));
                }
                if (operation.length > 1) {
                    equal(e);
                }
                operator = e.target.innerText;;
                text.innerText = "";
                break;
            case "-":
                if (operator !== "equal") {
                    operation.push(Number(text.innerText));
                }
                if (operation.length > 1) {
                    equal(e);
                }
                operator = e.target.innerText;
                text.innerText = "";
                break;
            case '%':
                if (operator !== "equal") {
                    operation.push(Number(text.innerText));
                }
                if (operation.length == 1) {
                    text.innerText = perc(operation[0], 0, null);
                } else {
                    text.innerText = perc(operation[0], operation[1], operator);
                }
                break;
            case '=':
                operation.push(Number(text.innerText));
                equal(e);
                operator = "equal";
                break;
            default:
                text.innerText = operation[0];
        }
    });
});
//functoins
function checkZeros(a) {
    if (a == "00") {
        a = "0";
    }
    return a;
};

function perc(a, b, operator) {
    if (operator == "+") {
        return (a * b * 0.01) + (+a);
    } else if (operator == "-") {
        return a - (a * b * 0.01);
    } else if (operator == "/") {
        return a / b * 100;
    } else if (operator == "*") {
        return a * b * 0.01;
    } else if (operator == null) {
        return (a + b) * 0.01;
    }
};

function toggleMinus(a) {
    if (a) {
        a = -(a);
    } else if (-(a)) {
        a = a;
    }
    return a;
}

function equal(e) {
    try {
        let result = operation.reduce(function(prev, item) {
            if (operator == "*") {
                return prev * item;
            } else if (operator == "/") {
                if (item == 0) { return err; } else {
                    return prev / item;
                }
            } else if (operator == "+") {
                return prev + item;
            } else if (operator == "-") {
                return prev - item;
            } else {
                return;
            }
        });
        if (Number.isInteger(result)) {
            text.innerText = result;
        } else {
            text.innerText = result.toFixed(3);
        }
        operation[0] = Number(text.innerText);
        operation.length = 1;

    } catch (err) {
        return text.innerText = "";
    }
};