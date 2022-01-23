// questions start
const questions = [{
        id: 1,
        question: "Назовите столицу Франции.",
        answer: ["Берлин", "Париж", "Лондон", "Киев"],
    },
    {
        id: 2,
        question: "Как называют руль автомобиля?",
        answer: ["Бублик", "Баранка", "Сушка", "Калач"],
    },
    {
        id: 3,
        question: "Как называется порода бесшёрстных кошек?",
        answer: ["Сфинкс", "Зевс", "Аполлон", "Фараон"],
    },
    {
        id: 4,
        question: "Чему в пословице не даёт покоя дурная голова?",
        answer: ["Мозгам", "Ногам", "Ушам", "Друзьям"],
    },
    {
        id: 5,
        question: "Как по-другому называется обойма для патронов?",
        answer: ["Магистраль", "Универсам", "Магазин", "Киоск"],
    },
    {
        id: 6,
        question: "Какая картина Малевича находится в музее?",
        answer: ["Красный квадрат", "Черный квадрат", "Белый квадрат", "Точильщик"],
    },
    {
        id: 7,
        question: "Какой титул имел Дон Кихот?",
        answer: ["Барон", "Маркиз", "Идальго", "Вождь"],
    },
    {
        id: 8,
        question: "Где, если верить пословице, любопытной Варваре нос оторвали?",
        answer: ["На рынке", "На горе", "На площади", "На базаре"],
    },
    {
        id: 9,
        question: "За чем послала жена мужа в мультфильме 'Падал прошлогодний снег'?",
        answer: ["За хлебом", "За счастьем", "За елкой", "За зайцем"],
    },
    {
        id: 10,
        question: "Какой знак восточного гороскопа следует за знаком Дракона?",
        answer: ["Змея", "Кролик", "Обезьяна", "Кот"],
    },
    {
        id: 11,
        question: "Как называют звезду, которая указала волхвам место рождения Христа?",
        answer: ["Вифлеемская", "Иерусалимская", "Антарес", "Иорданская"],
    },
    {
        id: 12,
        question: "Что в декабре-январе делают молодые олени?",
        answer: ["Впадают в спячку", "Сбрасывают рога", "Уходят на юг", "Охотятся"],
    },
    {
        id: 13,
        question: "В какую одежду принято плакать, чтобы вызвать сочувствие?",
        answer: ["В пальто", "В воротник", "В шубу", "В жилетку"],
    },
    {
        id: 14,
        question: "Какое прозвище носил король Англии Ричард I?",
        answer: ["Великий", "Солнце", "Львинное сердце", "Галантный Бодрячок"],
    },
    {
        id: 15,
        question: "В какой стране была пробурена первая промышленная нефтяная скважина?",
        answer: ["США", "Россия", "Азербайджан", "ОАЭ"],
    },
];
//questions end

// rihght answers start
const right = [
    "Париж",
    "Баранка",
    "Сфинкс",
    "Ногам",
    "Магазин",
    "Черный квадрат",
    "Идальго",
    "На базаре",
    "За елкой",
    "Змея",
    "Вифлеемская",
    "Сбрасывают рога",
    "В жилетку",
    "Львинное сердце",
    "Азербайджан",
];
// right answers end

//global variables start

// all answers
const variants = Array.from(document.querySelectorAll(".answer"));
const answers = document.querySelectorAll(".answer-text");
//levels

const level = document.querySelectorAll(".level-number");

//buttons "help"
const btn = Array.from(document.querySelectorAll("button"));

//create a modal
const comment = document.createElement("div");
comment.className = "comment";
document.querySelector(".logo").append(comment);

//counter for level exchange
let counter = 0;
// global variables end

// main functions start

// function for level exchange
function changeLevel(counter) {

    for (let q = counter; q < questions.length; q++) {
        document.querySelector("#step").innerText = questions[q].id;
        document.querySelector("#ask").innerText = questions[q].question;

        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = questions[q].answer[i];
        };

        for (let l = 0; l < level.length; l++) {
            if (level[l].innerText == questions[q].id) {
                level[l].parentNode.classList.add("level-active");
            } else {
                level[l].parentNode.classList.remove("level-active");
            }
        };

        variants.forEach((item) => {
            item.removeAttribute("style");
        });

        return;
    };
};

changeLevel(counter);

// function for showing rihgt or wrong answers
variants.map((el) => {
    el.addEventListener(
        "click",
        function(e) {
            let rightAnswer = right.find((item) => item == el.childNodes[1].innerHTML);
            if (rightAnswer) {
                changeColorForRight(el);
                showWinMessage();
                setTimeout(changeLevel, 3000, ++counter);
            } else {
                changeColorWrong(el);
                showLooseMessage();
            }
            for (let variant of variants) {
                variant.style.pointerEvents = "none";
            }
        },
        false
    );
});

// function for "help buttons"
btn.map((el) => {
    el.addEventListener(
        "click",
        function(e) {
            if (!e) el.style.pointerEvents = "none";

            let result = getRandomValue(0, variants.length - 1);
            switch (e.target.className) {
                case "help half":
                    changeColorForRight(variants);
                    searchRight();
                    chooseFake();
                    for (let variant of variants) {
                        if (variant.style.background !== "goldenrod") {
                            variant.style.pointerEvents = "auto";
                        } else {
                            variant.style.pointerEvents = "none";
                        }
                    }
                    e.target.style = "background-position: -101px -2px; opacity: .5";
                    break;
                case "help public":
                    comment.innerHTML = "";
                    let letter = Array.from(document.querySelectorAll(".answer-variant"));
                    letter.forEach((item) => {
                        comment.innerHTML += `<p style = "width: ${getRandomValue(0, letter.length - 1) * 20 + 3}%; height: 18%; background-color: goldenrod; color: darkblue; text-align: start; margin: 1% 0">${ item.innerText}</p>`;
                    });
                    comment.style.display = "block";
                    comment.onclick = () => {
                        comment.removeAttribute("style");
                    };
                    e.target.style = "background-position: -1px -2px; opacity: .5;";
                    break;
                case "help friend":
                    comment.innerHTML = `<p>Привет дружище!<p><p>Я думаю верный ответ: <b>${variants[result].innerText}</b></p>`;
                    comment.style.display = "block";
                    comment.onclick = () => {
                        comment.removeAttribute("style");
                    };
                    e.target.style = "background-position: -203px -2px; opacity: .5;";
                    break;
            }
            e.target.style.pointerEvents = "none";
        },
        false
    );
});
//main functions end

// aditional servicing functions start

// functions for right or wrong coloring
function changeColorForRight(choosen) {
    variants.forEach((element) => {
        if (element == choosen) {
            choosen.style.background = "green";
        } else {
            element.style.background = "goldenrod";
        }
    });
};

function changeColorWrong(choosen) {
    choosen.style.background = "red";
    searchRight();
};

//function for clue
function getRandomValue(min, max) {
    let num = Math.floor(Math.random() * (max + 1 - min)) + min;
    return num;
};

// functions for help button 50/50
function searchRight() {
    for (let item of right) {
        let rightRandom = variants.find((value) => value.childNodes[1].innerHTML == item);
        if (rightRandom) {
            rightRandom.style.background = "green";
            return;
        }
    }
};

function chooseFake() {
    let arr = [];
    for (let variant of variants) {
        if (variant.style.background == "goldenrod") {
            arr.push(variant);
        }
    }
    return (arr[getRandomValue(0, arr.length - 1)].style.background = "green");
};

//functions for show win or loose informal message 
function showWinMessage() {
    let active = document.querySelector(".level-active");
    if (active.firstChild.innerHTML === "5" || active.firstChild.innerHTML === "10") {
        comment.innerHTML = `<h1> Поздравляем!<br>Вы достигли несгораемой суммы ${active.lastChild.innerHTML}.</h1>`;
        comment.style.display = "block";
        setTimeout(() => { comment.removeAttribute("style"); }, 2500);
    } else if (active.firstChild.innerHTML === "15") {
        comment.innerHTML = `<h1> Поздравляем c победой!<br>Вы выиграли ${active.lastChild.innerHTML}!</h1>`;
        comment.style.display = "block";
        comment.onclick = () => {
            comment.removeAttribute("style");
            setTimeout((location.reload()), 5000);
        }

    } else { return }
};

function showLooseMessage() {
    let active = document.querySelector(".level-active");
    if (active.firstChild.innerHTML < 5) {
        comment.innerHTML = `<h1>Жаль, вы проиграли.<br>Попробуйте еще раз.</h1>`;
    } else if (active.firstChild.innerHTML > 5 && active.firstChild.innerHTML < 10) {
        comment.innerHTML = `<h1>Вы выиграли ${document.querySelectorAll(".level")[10].lastChild.innerHTML}.<br>В следующий раз повезет больше.</h1>`;
    } else if (active.firstChild.innerHTML > 10 && active.firstChild.innerHTML < 15) {
        comment.innerHTML = `<h1>Вы выиграли ${document.querySelectorAll(".level")[5].lastChild.innerHTML}.<br>В следующий раз повезет больше.</h1>`;
    } else {
        return;
    }
    comment.style.display = "block";
    comment.onclick = () => {
        comment.removeAttribute("style");
        setTimeout((location.reload()), 5000);
    }
};
// aditional servicing functions end