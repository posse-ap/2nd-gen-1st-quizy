const wrong1 = document.getElementById('wrong1');
const wrong2 = document.getElementById('wrong2');
const right1 = document.getElementById('right1');
const torf = document.getElementById ('torf');
const true1 = document.getElementById ('true1');
const success1 = document.createTextNode ("正解！") ;
const fail1 = document.createTextNode ("不正解！") ;
const sentence = document.createTextNode ("正解は「たかなわ」です！")
const comentbox = document.getElementById('comentbox');

wrong1.onclick = function() {
    wrong1.classList.add ('red');
    right1.classList.add ('blue');
    torf.appendChild (fail1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
    torf.classList.add ('red1');
    wrong1.classList.add ('cantclick');
    wrong2.classList.add ('cantclick');
    right1.classList.add ('cantclick');
}
wrong2.onclick = function() {
    wrong2.classList.add ('red');
    right1.classList.add ('blue');
    torf.appendChild (fail1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
    torf.classList.add ('red1');
    wrong1.classList.add ('cantclick');
    wrong2.classList.add ('cantclick');
    right1.classList.add ('cantclick');
}
right1.onclick = function() {
    right1.classList.add ('blue');
    torf.appendChild (success1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
    torf.classList.add ('blue1');
    wrong1.classList.add ('cantclick');
    wrong2.classList.add ('cantclick');
    right1.classList.add ('cantclick');
}

for(let i=0; i<10; i++){
    let one =
    '<div class="container">'
   +'<h2> <span class="container1">'
   +`${i+1}. この地名はなんて読む？</span></h2>`
   +'<div class="picture">'
   +`<img src= ${image[i+1]} alt="画像">`
   +'</div>'
   +'<ul>'
};

const choices = [
    ["たかなわ","こうわ","たかわ"],
    ["かめいど","かめと","かめど"],
    ["こうじまち","おかとまち","かゆまち"],
    ["おなりもん","おかどもん","ごせいもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","せきこうい","いじい"]
    ["ぞうしき","ざっしき","ざっしょく"],
    ["おかちまち","みとちょう","ごしろちょう"],
    ["ししぼね","しこね","ろっこつ"],
    ["こぐれ","こばく","こしゃく"],
]; 

const seikai = [
    "たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち","ししぼね","こぐれ",
]

// const random = Math.floor(Math.random()*choices.length);

document.write(choices[random]);

// const array = []
// for (let i = array.length; i < 10; i++) {
//     let one =
//     '<div class="container">'
//     +'<h2>'
//     +`${i+1}. この地名はなんて読む？<h2>`
//     +'<img src="https:こうわ//d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt=高輪>'
//     +'こうわ<ul>'
//     +'<li id="wrong1">こうわ</li>'
//     +'<li id="wrong2">たかわ</li>'
//     +'<li id="wrong3">たかなわ</li>'
//     +'</ul>'
//     +'<div id="comment box">'
//     +'<p id="torf"></p>'
//     +'<p id="true1"></p>'
//     +'</div>'

//     document.write(one);
// };