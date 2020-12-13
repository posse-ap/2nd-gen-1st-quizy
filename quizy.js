'use strict';
// // constで定義して省略
// const matigai1 = document.getElementById("matigai1");
// const matigai2 = document.getElementById("matigai2");
// const matigai3 = document.getElementById("matigai3");
// const TorF     = document.getElementById("TorF");
// const trueis   = document.getElementById("trueis");
// const target   = document.getElementById("target");
// const success1 = document.createTextNode("正解！");
// const success2 = document.createTextNode("正解は『たかなわ』です！");
// const failure1 = document.createTextNode("不正解！");

// // クリックした時の処理
// matigai1.onclick= function(){ 
//     matigai1.classList.add("red");
//     matigai2.classList.add("blue");
//     TorF.appendChild(failure1);
//     trueis.appendChild(success2);
//     target.classList.add("target");
//     TorF.classList.add("ansF");
//     matigai1.classList.add("cantclick");
//     matigai2.classList.add("cantclick");
//     matigai3.classList.add("cantclick");
// };
// matigai2.onclick= function(){
//     matigai2.classList.add("blue");
//     TorF.appendChild(success1);
//     trueis.appendChild(success2);
//     target.classList.add("target");
//     TorF.classList.add("ansT");
//     matigai1.classList.add("cantclick");
//     matigai2.classList.add("cantclick");
//     matigai3.classList.add("cantclick");
// };
// matigai3.onclick= function(){
//     matigai3.classList.add("red");
//     matigai2.classList.add("blue");
//     TorF.appendChild(failure1);
//     trueis.appendChild(success2);
//     target.classList.add("target");
//     TorF.classList.add("ansF");
//     matigai1.classList.add("cantclick");
//     matigai2.classList.add("cantclick");
//     matigai3.classList.add("cantclick");
// };

// 配列　[i][0]が真
const choices = ([
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
]);

// シャッフル用の配列
const choices2 = ([
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
]).map(shuffle);
choices.map(shuffle);    　// .map = 一つ深い階層に入る
// console.log(choices[5][0])

//配列の中身をシャッフルする
function shuffle(sentakusi) {
    for (let k = sentakusi.length - 1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数　letでも同様に確からしい
      [sentakusi[j], sentakusi[k]] = [sentakusi[k], sentakusi[j]]; // 分割代入 k と j を入れ替える
    }
    return sentakusi;
};

 // htmlをループさせる  
for(let i = 0; i < choices.length; i++){
    let h = 
          '<div class="monnme">'
        + '<div class="monnme1">'
        + '<h2>'
        + `${i + 1}.この地名は何て読む？`
        + '</h2>'
        + `<img src="./img/${i}.png" alt="これは写真です">`
        + '<ul>'

        if(`${choices[i][0]}` == `${choices2[i][0]}`){      // 正誤判定 onclick=で発火できない？
            h = h + `<li id="matigai${i}-1" matigai${i}-1.onclick="check1" >${choices2[i][0]}</li>`;
        }else{
            h = h + `<li id="matigai${i}-1" matigai${i}-1.onclick="check(不正解の処理)">${choices2[i][0]}</li>`;
        }
        if(`${choices[i][0]}` == `${choices2[i][1]}`){
            h = h + `<li id="matigai${i}-2" onclick="check1">${choices2[i][1]}</li>`;
        }else{
            h = h + `<li id="matigai${i}-2" onclick="check(不正解の処理)">${choices2[i][1]}</li>`;
        }      
        if(`${choices[i][0]}` == `${choices2[i][2]}`){
            h = h + `<li id="matigai${i}-3" onclick="check1">${choices2[i][2]}</li>`;
        }else{
            h = h + `<li id="matigai${i}-3" onclick="check(不正解の処理)">${choices2[i][2]}</li>`;
        }

        // + `<li id="matigai${i}-1">`
        // + `${choices[i][0]}`
        // + '</li>'
        // +  `<li id="matigai${i}-2">`
        // + `${choices[i][1]}`
        // + '</li>'
        // + `<li id="matigai${i}-3">`
        // + `${choices[i][2]}` 
        // + '</li>'

        +`<div id="target${i}">`
        + `<p id="TorF${i}"></p>`
        + `<p id="trueis${i}" class="trueis"></p>`
        + '</div>'
        + '</ul>'
        + '</div>'
        + '</div>';
    document.write(h);

    let matigai1   = document.getElementById(`matigai${i}-1`);
    let matigai2   = document.getElementById(`matigai${i}-2`);
    let matigai3   = document.getElementById(`matigai${i}-3`);
    const TorF     = document.getElementById(`TorF${i}`);
    const trueis   = document.getElementById(`trueis${i}`);
    const target   = document.getElementById(`target${i}`);
    const success1 = document.createTextNode("正解！");
    const success2 = document.createTextNode(`正解は『${choices[i][0]}』です！`);　// なぜかchoicesもシャッフルされてる
    const failure1 = document.createTextNode("不正解！");

    // matigai1.onclick= function(){ 
    //     matigai1.classList.add("red");
    //     matigai2.classList.add("blue");
    //     TorF.appendChild(failure1);
    //     trueis.appendChild(success2);
    //     target.classList.add("target");
    //     TorF.classList.add("ansF");
    //     matigai1.classList.add("cantclick");
    //     matigai2.classList.add("cantclick");
    //     matigai3.classList.add("cantclick");
    // };
    // matigai2.onclick= function(){
    //     matigai2.classList.add("blue");
    //     TorF.appendChild(success1);
    //     trueis.appendChild(success2);
    //     target.classList.add("target");
    //     TorF.classList.add("ansT");
    //     matigai1.classList.add("cantclick");
    //     matigai2.classList.add("cantclick");
    //     matigai3.classList.add("cantclick");
    // };
    // matigai3.onclick= function(){
    //     matigai3.classList.add("red");
    //     matigai2.classList.add("blue");
    //     TorF.appendChild(failure1);
    //     trueis.appendChild(success2);
    //     target.classList.add("target");
    //     TorF.classList.add("ansF");
    //     matigai1.classList.add("cantclick");
    //     matigai2.classList.add("cantclick");
    //     matigai3.classList.add("cantclick");
    // };
    function check1(){
        matigai2.classList.add("blue");
        TorF.appendChild(success1);
        trueis.appendChild(success2);
        target.classList.add("target");
        TorF.classList.add("ansT");
        matigai1.classList.add("cantclick");
        matigai2.classList.add("cantclick");
        matigai3.classList.add("cantclick");
    };
    
    function check2(){
    
    };
    
};