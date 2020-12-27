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
]

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


// シャッフル

let insideChoices = choices[k];
var i, k, m;

for (k = 0; k < choices.length; k++) {
    const shuffle = (insideChoices) => {
        for (m = insideChoices.length - 1; m >= 0; m--) {
            const j = Math.floor(Math.random() * (m + 1));
            insideChoices[m], insideChoices[j] = insideChoices[j], insideChoices[m];
        }
        return insideChoices;
    };
    console.log(shuffle(insideChoices));
};

    for (i = 0; i < choices.length; i++) {
        shuffle(insideChoices);

            var answerNumber = 3;
            // この３に答えが来るようにする

            let h =
                '<div class="monnme">'
                + '<div class="monnme1">'
                + `<h2>${i + 1}. この地名はなんて読む？</h2>`
                + `<img src= ${images[i]} alt="photo">`
                + '<ul>'
                + `<li id="option${i}-1" onclick="clickedFunction(${i},'${choices[i][0]}','${answerBoxAnswer[i]}',1,${answerNumber})">${choices[i][0]}</li>`
                + `<li id="option${i}-2" onclick="clickedFunction(${i},'${choices[i][1]}','${answerBoxAnswer[i]}',2,${answerNumber})">${choices[i][1]}</li>`
                + `<li id="option${i}-3" onclick="clickedFunction(${i},'${choices[i][2]}','${answerBoxAnswer[i]}',3,${answerNumber})">${choices[i][2]}</li>`
                + '</ul>'
                + `<div id="answerBox${i}">`
                + `<p id="seikai${i}"></p>`
                + `<p id="seikaiexp${i}"></p>`
                + '</div>'
                + '</div>';
            document.write(h);
            // let answer = value;
        };


        // shuffle 選択肢  answerの指定　abcのどれかどうか

        var clickedFunction = function (rounds, clkdButton, answer, pressed, answerNumber) {
            // クリックされたのがどれか、どれが答えか
            let option1 = document.getElementById('option' + rounds + '-1');
            let option2 = document.getElementById('option' + rounds + '-2');
            let option3 = document.getElementById('option' + rounds + '-3');

            let answerBox = document.getElementById('answerBox' + rounds);
            let answer1 = document.getElementById('option' + rounds + '-' + answerNumber);
            let pressedButton = document.getElementById('option' + rounds + '-' + pressed);


            let seikai = document.getElementById('seikai' + rounds);
            let seikaiexp = document.getElementById('seikaiexp' + rounds);

            let seikaiword = document.createTextNode(" 正解！");
            let fuseikaiword = document.createTextNode("不正解！");
            let fuseikaiexp = document.createTextNode(`正解は「${answerBoxAnswer[rounds]}」です！`);

            option1.classList.add('cantclick');
            option2.classList.add('cantclick');
            option3.classList.add('cantclick');
            answerBox.classList.add('answerBox');

            seikaiexp.appendChild(fuseikaiexp);
            answer1.classList.add('successButton');

            if (answer === clkdButton) {
                seikai.appendChild(seikaiword);
                seikai.classList.add('successBar');
            } else {
                pressedButton.classList.add('wrongButton');
                seikai.appendChild(fuseikaiword);
                seikai.classList.add('wrongBar');
            }
        };
    