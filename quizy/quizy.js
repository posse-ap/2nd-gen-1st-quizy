// array[['aaa','iii','uuu'],['bbb','ccc','ddd']]


// array[1][2]="ddd"

const sentakushi = [["たかわ", "こうわ", "たかなわ"],
    ["かめいど", "かめと", "かめど"],
    ["こうじまち", "かゆまち", "おかとまち"],
    ["おなりもん","おかどもん","ごせいもん"],
    ["たたりき", "たたら", "とどろき"],
    ["せきこうい", "しゃくじい", "いじい"],
    ["ぞうしき", "ざっしき", "ざっしょく"],
    ["みとちょう", "おかちまち", "ごしろちょう"],
    ["ししぼね", "ろっこつ", "しこね"],
    ["こばく", "こぐれ", "こしゃく"]]


for (let i = 0; i < 10; i++){
    let x = 
    '<div class="quiz">' +
    `<h3><span class="chimei">${i + 1}.この地名はなんて読む？</span></h3>` +
    `<img src="./image/${i}.png">` +
    '<ul>';

    for (let j = 0; j < 3; j++){
    x += `<li class="list" id="machigai1">${sentakushi[i][j]}</li>`;
    // `<li class="list" id="machigai2">${sentakushi[i][j+1]}</li>` +
    // `<li class="list" id ="seikai">${sentakushi[i][j+2]}</li>` +
    }
    
    x +=
    '</ul>' +
    '<div class="torf" id="torf">' +
    '<p id="kekka1"></p>' +
    '<p id="kekka2">正解は「たかなわ」です！</p>' +
    '</div>' +
    '</div>';

    document.write(x);
}

const machigai1 = document.getElementById('machigai1');
const machigai2 = document.getElementById('machigai2');
const seikai = document.getElementById('seikai');

const torf = document.getElementById('torf');
const kekka1 = document.getElementById('kekka1');
const kekka2 = document.getElementById('kekka2');

const text1 = document.createTextNode('正解！');
const text2 = document.createTextNode('不正解！');



// machigai1.onclick = function() {
//     machigai1.classList.add('red');
//     seikai.classList.add('blue');
//     kekka1.appendChild(text2);
//     torf.classList.add('torfHyouji');
//     kekka1.classList.add('aaa');
//     machigai1.classList.add('cantclick');
//     machigai2.classList.add('cantclick');
//     seikai.classList.add('cantclick');
    
// }

// machigai2.onclick = function() {
//     machigai2.classList.add('red');
//     seikai.classList.add('blue');
//     kekka1.appendChild(text2);
//     torf.classList.add('torfHyouji');
//     kekka1.classList.add('aaa');
//     machigai1.classList.add('cantclick');
//     machigai2.classList.add('cantclick');
//     seikai.classList.add('cantclick');
    
// }

// seikai.onclick = function() {
//     seikai.classList.add('red');
//     seikai.classList.add('blue');
//     kekka1.appendChild(text1);
//     torf.classList.add('torfHyouji');
//     kekka1.classList.add('bbb');
//     machigai1.classList.add('cantclick');
//     machigai2.classList.add('cantclick');
//     seikai.classList.add('cantclick');
    
// }