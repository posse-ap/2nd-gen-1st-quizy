'use strict';

// const wrongA1 = document.getElementById('wrong1');
// const wrongA2 = document.getElementById('wrong2');
// const Success = document.getElementById('success');

// const answer1 = document.getElementById('hidden_answer1_success');

// const seikai = document.getElementById('seikai');
// const seikaiexp = document.getElementById('seikaiexp');

// const seikaiword = document.createTextNode("正解！");
// const fuseikaiword = document.createTextNode("不正解！");
// const fuseikaiexp = document.createTextNode("正解は「たかなわ」です！");

let choices =[
    ['たかわ','こうわ','たかなわ'],
    ['かめど','かめと','かめいど'],
    ['かゆまち','おかとまち','こうじまち'],
    ['おかどもん','ごせいもん','おなりもん'],
    ['たたりき','たたら','とどろき'],
    ['せきこうい','いじい','しゃくじい'],
    ['ざっしき','ざっしょく','ぞうしき'],
    ['ごしろちょう','みとちょう','おかちまち'],
    ['ろっこつ','しこね','ししぼね'],
    ['こしゃく','こばく','こぐれ']
    ];

var images = new Array()
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


// ループ= 問題番号の操作,選択肢の言葉,写真
var i;
for (i = 0; i < 10; i++) {
    let h =
        '<div class="monnme">'
        + '<div class="monnme1">'
        + `<h2>${i+1}. この地名はなんて読む？</h2>`
        + `<img src= ${images[i]} alt="photo">`
        + '<ul>'
        + `<li id="wrong1">${choices[i][0]}</li>`
        + `<li id="wrong2">${choices[i][1]}</li>`
        + `<li id="success">${choices[i][2]}</li>`
        + '</ul>'
        + '<div id="hidden_answer1_success">'
        + '<p id="seikai"></p>'
        + '<p id="seikaiexp"></p>'
        + '</div>'
        + '</div>';
    document.write(h);
    
};


const wrongA1 = document.getElementById('wrong1');
const wrongA2 = document.getElementById('wrong2');
const success = document.getElementById('success');

const answer1 = document.getElementById('hidden_answer1_success');

const seikai = document.getElementById('seikai');
const seikaiexp = document.getElementById('seikaiexp');

const seikaiword = document.createTextNode(" 正解！");
const fuseikaiword = document.createTextNode("不正解！");
const fuseikaiexp = document.createTextNode("正解は「たかなわ」です！");

// TOD0
// 解答ボックスに対してcssを対応させる
// 1問目だけでなく全ての問題にaddEventListener反映させるようにする
wrongA1.addEventListener('click', () => {
    wrongA1.classList.add('red');
    success.classList.add('blue');
    wrongA1.classList.add('cantclick');
    wrongA2.classList.add('cantclick');
    success.classList.add('cantclick');
    answer1.classList.add('hidden_answer1_success');
    seikai.appendChild(fuseikaiword);
    seikai.classList.add('redbar');
    seikaiexp.appendChild(fuseikaiexp);
});

wrongA2.addEventListener('click', () => {
    wrongA2.classList.add('red');
    success.classList.add('blue');
    wrongA1.classList.add('cantclick');
    wrongA2.classList.add('cantclick');
    success.classList.add('cantclick');
    answer1.classList.add('hidden_answer1_success');
    seikai.appendChild(fuseikaiword);
    seikai.classList.add('redbar');
    seikaiexp.appendChild(fuseikaiexp);
});

success.addEventListener('click', () => {
    success.classList.add('blue');
    wrongA1.classList.add('cantclick');
    wrongA2.classList.add('cantclick');
    success.classList.add('cantclick');
    answer1.classList.add('hidden_answer1_success');
    seikai.appendChild(seikaiword);
    seikai.classList.add('bluebar');
    seikaiexp.appendChild(fuseikaiexp);
});