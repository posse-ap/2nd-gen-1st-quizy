'use strict';
// const matigai1 = document.getElementById("matigai1");
// const matigai2 = document.getElementById("matigai2");
// const matigai3 = document.getElementById("matigai3");
// // const success  = document.getElementById("success ");
// // const failure  = document.getElementById("failure ");
// const TorF     = document.getElementById("TorF");
// const trueis   = document.getElementById("trueis");
// const target   = document.getElementById("target");
// const success1 = document.createTextNode("正解！");
// const success2 = document.createTextNode("正解は『たかなわ』です！");
// const failure1 = document.createTextNode("不正解！");
// // const failure2 = document.createTextNode("正解は『たかなわ』です！");

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
]).map(shuffle);
choices.map(shuffle);    　// .map = 一つ深い階層に入る
// console.log(choices[5][2])
// const choicesa = [
//     ["たかなわ","こうわ","たかわ"],
//     ["かめいど","かめと","かめど"],
//     ["こうじまち","おかとまち","かゆまち"],
//     ["おなりもん","おかどもん","ごせいもん"], 
//     ["とどろき","たたら","たたりき"],
//     ["しゃくじい","せきこうい","いじい"],
//     ["ぞうしき","ざっしき","ざっしょく"],
//     ["おかちまち","みとちょう","ごしろちょう"],
//     ["ししぼね","しこね","ろっこつ"],
//     ["こぐれ","こばく","こしゃく"],
// ];    　// .map = 一つ深い階層に入る
// // console.log(choices[1][2])
// shuffle(choicesa);

// for?\文を二回回すシャッフル わかんない
// function shufflea(choicesa) {
//     for (let i = 0; i < choicesa.length + 1; i++){
// for (let j = 0; ) 
//     }
// };
// console.log(choices);

//配列の中身をシャッフルする
function shuffle(sentakusi) {
    for (let k = sentakusi.length - 1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
      [sentakusi[j], sentakusi[k]] = [sentakusi[k], sentakusi[j]]; // 分割代入 k と j を入れ替える
    }
    
    return sentakusi;
 };
  

// htmlをループさせる  
for(let i = 0; i < 10; i++){
    const h = 
          '<div class="monnme">'
        + '<div class="monnme1">'
        + '<h2>'
        + `${i + 1}.この地名は何て読む？`
        + '</h2>'
        + `<img src="./img/${i}.png" alt="これは写真です">`
        + '<ul>'
        + `<li id="matigai1">${choices[i][0]}</li>`
        + `<li id="matigai2">${choices[i][1]}</li>`
        + `<li id="matigai3">${choices[i][2]}</li>`
        + '<div id="target">'
        + '<p id="TorF"></p>'
        + '<p id="trueis"></p>'
        + '</div>'
        + '</ul>'
        + '</div>'
        + '</div>'
    document.write(h);
};



// const,functionを復活させる
// 

// "<div class="monnme1">"
//         '<h2>1.この地名は何て読む？</h2>'
//         '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="高輪">'
//         <ul>
//         <li id="matigai1">たかわ</li>
//         <li id="matigai2">たかなわ</li>
//         <li id="matigai3">こうわ</li>
//         <div id="target">
//             <p id="TorF"></p>
//             <p id="trueis"></p>
//             </div>

//         </ul>        
//     </div>
