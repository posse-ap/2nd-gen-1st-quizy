// const wrong1 = document.getElementById('wrong1');
// const wrong2 = document.getElementById('wrong2');
// const right1 = document.getElementById('right1');
// const torf = document.getElementById ('torf');
// const true1 = document.getElementById ('true1');
// const success1 = document.createTextNode ("正解！") ;
// const fail1 = document.createTextNode ("不正解！") ;
// const sentence = document.createTextNode ("正解は「たかなわ」です！")
// const comentbox = document.getElementById('comentbox');

// wrong1.onclick = function() {
//     wrong1.classList.add ('red');
//     right1.classList.add ('blue');
//     torf.appendChild (fail1);
//     true1.appendChild (sentence);
//     comentbox.classList.add ('comentbox');
//     torf.classList.add ('red1');
//     wrong1.classList.add ('cantclick');
//     wrong2.classList.add ('cantclick');
//     right1.classList.add ('cantclick');
// }
// wrong2.onclick = function() {
//     wrong2.classList.add ('red');
//     right1.classList.add ('blue');
//     torf.appendChild (fail1);
//     true1.appendChild (sentence);
//     comentbox.classList.add ('comentbox');
//     torf.classList.add ('red1');
//     wrong1.classList.add ('cantclick');
//     wrong2.classList.add ('cantclick');
//     right1.classList.add ('cantclick');
// }
// right1.onclick = function() {
//     right1.classList.add ('blue');
//     torf.appendChild (success1);
//     true1.appendChild (sentence);
//     comentbox.classList.add ('comentbox');
//     torf.classList.add ('blue1');
//     wrong1.classList.add ('cantclick');
//     wrong2.classList.add ('cantclick');
//     right1.classList.add ('cantclick');
// }

// for(let i=0; i<10; i++){
//     let one =
//     '<div class="container">'
//    +'<h2> <span class="container1">'
//    +`${i+1}. この地名はなんて読む？</span></h2>`
//    +'<div class="picture">'
//    +`<img src= ${image[i+1]} alt="画像">`
//    +'</div>'
//    +'<ul>'
// document.write(h);
// };

const choices = [
    ["たかなわ","こうわ","たかわ"],
    ["かめいど","かめと","かめど"],
    ["こうじまち","おかとまち","かゆまち"],
    ["おなりもん","おかどもん","ごせいもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","せきこうい","いじい"],
    ["ぞうしき","ざっしき","ざっしょく"],
    ["おかちまち","みとちょう","ごしろちょう"],
    ["ししぼね","しこね","ろっこつ"],
    ["こぐれ","こばく","こしゃく"],
];

function shuffle(arr) {
    for( let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
};

const seikai = [
    "たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち","ししぼね","こぐれ",
];


// document.write(choices[random]);

for (let k = 0; k < 10; k++) {
    let one =
    '<div class="container">'
    +'<h2>'
    +`${k+1}. この地名はなんて読む？`
    +'</h2>'
    +`<img src='./img/${k+1}.png' alt='写真'>`
    +'<ul>'
    +`<li id="wrong${k+1}_1" class="list" onclick="check(${k+1})">`
    +`${choices[k][0]}`
    +'</li>'
    +`<li id="wrong${k+1}_2" class="list" onclick="check(${k+1})">`
    +`${choices[k][1]}`
    +'</li>'
    +`<li id="wrong${k+1}_3" class="list" onclick="check(${k+1})">`
    +`${choices[k][2]}`
    +'</li>'
    +'</ul>'
    +'<div id="comment box">'
    +'<p id="torf"></p>'
    +'<p id="true1"></p>'
    +'</div>'
    +'</div>';

    document.write(one);
};

function check (id,number,seikai) {
    let wrong = document.getElementById('wrong' + id + number);
    let right = document.getElementById('right' + id + seikai);
    let wrong1 = document.getElementById('wrong1' + id);
    let wrong2 = document.getElementById('wrong2' + id);
    let wrong3 = document.getElementById('wrong3' + id);
    let torf = document.getElementById('torf' + id);
    let true1 = document.getElementById('true1' + id);
    let success1 = document.getElementById('success1' + id);
    let fail1 = document.getElementById('fail1' + id);
    let seikai1 = document.createTextNode("正解！");
    let machigai1 = document.createTextNode("不正解！");
    let comentbox = document.createTextNode("正解は　です");
};

if (choices == seikai) {
    torf.appendChild (success1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
} else {
    wrong1.classList.add ('red');
    torf.appendChild (fail1);
    comentbox.classList.add ('comentbox')
};