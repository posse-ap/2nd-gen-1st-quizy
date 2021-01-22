'use strict';

let choices = [
    ['たかわ', 'こうわ', 'たかなわ'],
    ['かめど', 'かめと', 'かめいど'],
    ['かゆまち', 'おかちまち', 'こうじまち'],
    ['おかどもん', 'ごせいもん', 'おなりもん'],
    ['たたりき', 'たたら', 'とどろき'],
    ['せきこうい', 'いじい', 'しゃくじい'],
    ['ざっしき', 'ざっしょく', 'ぞうしき'],
    ['ごしろちょう', 'みとちょう', 'おかちまち'],
    ['ろっこつ', 'しこね', 'ししぼね'],
    ['こしゃく', 'こばく', 'こぐれ']
];

let answerBoxAnswer = [
    "たかなわ", "かめいど", "こうじまち", "おなりもん", "とどろき", "しゃくじい", "ぞうしき", "おかちまち", "ししぼね", "こぐれ"
];

let images = new Array()
images[0] = "https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png";
images[1] = "https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png";
images[2] = "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png";
images[3] = "https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png";
images[4] = "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png";
images[5] = "https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png";
images[6] = "https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png";
images[7] = "https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png";
images[8] = "https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png";
images[9] = "https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png";

let i, k, m;
const shuffle = (choices) => {
    for (k = 0; k < choices.length; k++) {
        for (m = choices.length - 1; m >= 0; m--) {
            const j = Math.floor(Math.random() * (m + 1));
            [choices[m], choices[j]] = [choices[j], choices[m]];
        };
        return choices;
    };
    console.log(shuffle(choices[i]));
};

choices.map(shuffle);

let p, a;
let b = [];
for (p = 0; p < choices.length; p++) {
    a = choices[p].indexOf(answerBoxAnswer[p]);
    b.push(a);
};
console.log(b);

for (i = 0; i < choices.length; i++) {
    let h =
        '<div class="monnme">'
        + '<div class="monnme1">'
        + `<h2>${i + 1}. この地名はなんて読む？</h2>`
        + `<img src= ${images[i]} alt="photo">`
        + '<ul>';
    for (let c = 0; c < choices[0].length; c++) {
        h = h + `<li id="option${i}-${c}" onclick="clickedFunction(${i},'${c}','${b[i]}')">${choices[i][c]}</li>`
    };
    h = h
        + '</ul>'
        + `<div id="answerBox${i}">`
        + `<p id="seikai${i}"></p>`
        + `<p id="seikaiexp${i}"></p>`
        + '</div>'
        + '</div>';
    document.write(h);
};


var clickedFunction = function (rounds, clkdButton, answer) {
    let option1 = document.getElementById('option' + rounds + '-0');
    let option2 = document.getElementById('option' + rounds + '-1');
    let option3 = document.getElementById('option' + rounds + '-2');

    let answerBox = document.getElementById('answerBox' + rounds);
    let answer1 = document.getElementById('option' + rounds + '-' + answer);
    let pressedButton = document.getElementById('option' + rounds + '-' + clkdButton);

    let seikai = document.getElementById('seikai' + rounds);
    let seikaiexp = document.getElementById('seikaiexp' + rounds);

    let seikaiword = document.createTextNode(" 正解！");
    let fuseikaiword = document.createTextNode("不正解！");
    let explanation = document.createTextNode(`正解は「${answerBoxAnswer[rounds]}」です！`);

    option1.classList.add('cantclick');
    option2.classList.add('cantclick');
    option3.classList.add('cantclick');
    answerBox.classList.add('answerBox');

    seikaiexp.appendChild(explanation);
    answer1.classList.add('successButton');

    if (answer == clkdButton) {
        seikai.appendChild(seikaiword);
        seikai.classList.add('successBar');
    } else {
        pressedButton.classList.add('wrongButton');
        seikai.appendChild(fuseikaiword);
        seikai.classList.add('wrongBar');
    }
};
