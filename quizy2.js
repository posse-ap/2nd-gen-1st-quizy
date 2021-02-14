'use strict';

const choices = [
    "たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち","ししぼね","こぐれ"
];
const choices2 = [
    ["たかなわ","こうわ","たかわ",],
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

// function shuffle(arrey) {
//     for (let k = arrey.length - 1; k > 0; k--) { 
//     const j = Math.floor(Math.random() * (k + 1));  
//     [arrey[j], arrey[k]] = [arrey[k], arrey[j]];
//     }
//     return arrey;
// };
// choices2.map(shuffle);

var newestArray=[]
 for (let i = 0  ; i < 10 ; i++){
   var array = [1,2,0];
   var newArray = [];
   var j;
   var k; 

  while (array.length > 0) {
   j = array.length;
   k = Math.floor(Math.random() * j); 

   newArray.push (array[k]);
   array.splice(k, 1);

 }
  newestArray.push(newArray)
 }

var b = [];
for(let i =0; i < choices2.length; i++){
    var a = choices2[i].indexOf(choices[i]);
    b.push(a);
};

for(let i = 0; i < choices.length; i++){
    let h = 
          '<div class="monnme">'
        + '<h2>'
        + `${i + 1}.この地名は何て読む？`
        + '</h2>'
        + `<img src="./img/${i}.png" alt="これは写真です">`
        + '<ul>';
    for(let k = 0; k < choices2[k].length; k++){
        h = h + `<li id="matigai${i}-${k}" onclick="ignition(${i},${k},${b[i]})">${choices2[i][k]}</li>`
    }
        h = h +`<div id="target${i}">`
        + `<p id="TorF${i}"></p>`
        + `<p id="trueis${i}" class="trueis"></p>`
        + '</div>'
        + '</ul>'
        + '</div>';
    document.write(h);
};

function ignition(id,number,seikai){
    let matigai    = document.getElementById('matigai' + id + '-' + number);
    let success    = document.getElementById('matigai' + id + '-' + seikai);
    let matigai1   = document.getElementById('matigai' + id +'-0');
    let matigai2   = document.getElementById('matigai' + id +'-1');
    let matigai3   = document.getElementById('matigai' + id +'-2');
    const TorF     = document.getElementById(`TorF` + id);
    const trueis   = document.getElementById(`trueis` + id);
    const target   = document.getElementById(`target` + id);
    const success1 = document.createTextNode("正解！");
    const success2 = document.createTextNode(`正解は「${choices[id]}」です！`);
    const failure1 = document.createTextNode("不正解！");
    // let scroll     = target.element.getBoundingClientRect();
    // let position   = scroll.top;

    if (number == seikai){                 
        TorF.appendChild(success1);
        TorF.classList.add("ansT");
    }
    else { 
        matigai.classList.add("red");
        TorF.appendChild(failure1);
        TorF.classList.add("ansF");
    };
    // scrollBy(0,position);
    
    target.classList.add("target");
    trueis.appendChild(success2);
    success.classList.add("blue");
    matigai1.classList.add("cantclick");
    matigai2.classList.add("cantclick");
    matigai3.classList.add("cantclick");
};