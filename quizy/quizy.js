// const machigai1 = document.getElementById('machigai1');
// const seikai = document.getElementById('seikai');
// const machigai2 = document.getElementById('machigai2');
// const fontt = document.getElementById('fontt');
// const fontw = document.getElementById('fontw');
// const success = document.createTextNode('正解！');
// const wrong = document.createTextNode('不正解！');
// const sentence = document.createTextNode('正解は「たかなわ」です！');
// const box = document.getElementById('box');
// const kekka = document.getElementById('kekka');


// machigai1.onclick = function() {
//     machigai1.classList.add ('red');
//     seikai.classList.add ('blue');
//     box.classList.add ('box');
//     fontw.appendChild (wrong);
//     //fontw.classList.add ('fontw');
//     kekka.appendChild (sentence);
// }

// machigai2.onclick = function() {
//     machigai2.classList.add ('red');
//     seikai.classList.add ('blue');
//     box.classList.add ('box');
//     fontw.appendChild (wrong);
//     //fontw.classList.add ('fontw');
//     kekka.appendChild (sentence);
// }

// seikai.onclick = function() {
//     seikai.classList.add ('blue');
//     box.classList.add ('box');
//     fontt.appendChild (success);
//     //fontt.classList.add ('fontt')
//     kekka.appendChild (sentence);
// }


const img = [
    'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png',
    'https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png',
    'https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png',
];

function shuffle(array){
    let n = array.length, t, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
      }
    
      return array;
}


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
shuffle(choices)

const answer = ["たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち","ししぼね","こぐれ",];

var b = []
for(let i=0; i<choices.length; i++){
    var a = choices[i].indexOf(answer[i]);
        b.push(a)
        
};
//console.log(b);


for(let i =0; i<10; i++){
    let h =
          '<div class="chuo">'
        + `<h2><span class="chimei"> ${i+1}.この地名はなんて読む？</span></h2>`
        + `<img src=${img[i]}>`
        + '<ul>'
        + `<li id="sentakushi${i}-0" onclick="check(${i},0,${b[i]})">${choices[i][0]}</li>`
        + `<li id="sentakushi${i}-1" onclick="check(${i},1,${b[i]})">${choices[i][1]}</li>`
        + `<li id="sentakushi${i}-2" onclick="check(${i},2,${b[i]})">${choices[i][2]}</li>`
        + `<div id="box${i}">`
        + `<p class="fontt" id="fontt${i}"></p>`
        + `<p class="fontw" id="fontw${i}"></p>`
        + `<p class="kekka" id="kekka${i}"></p>`

        + '</div>'
        
        + '</ul>'  
        document.write(h);
            
};


function check(mondaibangou,id,seikai){
    let sentakushi0 =  document.getElementById('sentakushi' + mondaibangou + '-0');
    let sentakushi1 =  document.getElementById('sentakushi' + mondaibangou + '-1');
    let sentakushi2 =  document.getElementById('sentakushi' + mondaibangou + '-2');
    let machigai    =  document.getElementById('sentakushi' + mondaibangou + '-' + id);
    let kotae       =  document.getElementById('sentakushi' + mondaibangou + '-' + seikai);
    let fontt       =  document.getElementById('fontt' + mondaibangou);
    const success   = document.createTextNode('正解！');
    const sentence  = document.createTextNode(`正解は「${answer[mondaibangou]}」です！`);
    const box       = document.getElementById('box' + mondaibangou);
    const kekka     = document.getElementById('kekka' + mondaibangou);
    let fontw       = document.getElementById('fontw' + mondaibangou);
    const wrong     = document.createTextNode('不正解！');


 if(id==seikai){
   
    fontt.classList.add ('fontt');
    fontt.appendChild (success);
    

 }
 else{
    machigai.classList.add ('red');
    
    fontw.classList.add ('fontw');
    fontw.appendChild (wrong);
    
 };
 kotae.classList.add('blue');
 box.classList.add ('box');
 kekka.appendChild (sentence);
 sentakushi0.classList.add('cantclick');
 sentakushi1.classList.add('cantclick');
 sentakushi2.classList.add('cantclick');
};





