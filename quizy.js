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

// 配列[i][0]が真
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
])      // .map = 一つ深い階層に入る
choices2.map(shuffle);

var b = [];     //indexOf関数で、シャッフル後の正解の場所を取る
for(let i =0; i <choices2.length; i++){
    var a = choices2[i].indexOf(choices[i][0]);
    b.push(a);
}

//配列の中身のシャッフル
function shuffle(sentakusi) {
    for (let k = sentakusi.length - 1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
    const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数　letでも同様に確からしい
    [sentakusi[j], sentakusi[k]] = [sentakusi[k], sentakusi[j]]; // 分割代入 k と j を入れ替える
    }
    return sentakusi;
};

 // htmlのループ
for(let i = 0; i < choices.length; i++){
    let h = 
          '<div class="monnme">'
        + '<div class="monnme1">'
        + '<h2>'
        + `${i + 1}.この地名は何て読む？`
        + '</h2>'
        + `<img src="./img/${i}.png" alt="これは写真です">`
        + '<ul>';

        if(`${choices[i][0]}` == `${choices2[i][0]}`){        //check関数が一つで処理を賄えるからif,elseに分ける必要ない、for文でまとめる。 
            h = h + `<li id="matigai${i}-0" onclick="check(${i},0,1,${b[i]})">${choices2[i][0]}</li>`;
        }else{
            h = h + `<li id="matigai${i}-0" onclick="check(${i},0,0,${b[i]})">${choices2[i][0]}</li>`;
        }
        if(`${choices[i][0]}` == `${choices2[i][1]}`){
            h = h + `<li id="matigai${i}-1" onclick="check(${i},1,1,${b[i]})">${choices2[i][1]}</li>`;
        }else{
            h = h + `<li id="matigai${i}-1" onclick="check(${i},1,0,${b[i]})">${choices2[i][1]}</li>`;
        }      
        if(`${choices[i][0]}` == `${choices2[i][2]}`){
            h = h + `<li id="matigai${i}-2" onclick="check(${i},2,1,${b[i]})">${choices2[i][2]}</li>`;
        }else{
            h = h + `<li id="matigai${i}-2" onclick="check(${i},2,0,${b[i]})">${choices2[i][2]}</li>`;
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
        h = h 
        +`<div id="target${i}">`
        + `<p id="TorF${i}"></p>`
        + `<p id="trueis${i}" class="trueis"></p>`
        + '</div>'
        + '</ul>'
        + '</div>'
        + '</div>';
    document.write(h);
    // let matigai1   = document.getElementById(`matigai${i}-1`);
    // let matigai2   = document.getElementById(`matigai${i}-2`);
    // let matigai3   = document.getElementById(`matigai${i}-3`);
    // const TorF     = document.getElementById(`TorF${i}`);
    // const trueis   = document.getElementById(`trueis${i}`);
    // const target   = document.getElementById(`target${i}`);
    // const success1 = document.createTextNode("正解！");
    // const success2 = document.createTextNode(`正解は『${choices[i][0]}』です！`);　// なぜかchoicesもシャッフルされてる
    // const failure1 = document.createTextNode("不正解！");

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

};

function check(id,number,torf,seikai){     //三つ目の引数がいらない for文中にiで変わる定義ができない。
    let matigai    = document.getElementById('matigai' + id + '-' + number);
    let success    = document.getElementById('matigai' + id + '-' + seikai);
    let matigai1   = document.getElementById('matigai' + id +'-0');
    let matigai2   = document.getElementById('matigai' + id +'-1');
    let matigai3   = document.getElementById('matigai' + id +'-2');
    const TorF     = document.getElementById(`TorF` + id);
    const trueis   = document.getElementById(`trueis` + id);
    const target   = document.getElementById(`target` + id);
    const success1 = document.createTextNode("正解！");
    const success2 = document.createTextNode(`正解は『${choices[id][0]}』です！`);
    const failure1 = document.createTextNode("不正解！");
    console.log(number);
    console.log(seikai);

    if (number == seikai){                 
        TorF.appendChild(success1);
        trueis.appendChild(success2);
        TorF.classList.add("ansT");
    }
    else {
        matigai.classList.add("red");
        TorF.appendChild(failure1);
        trueis.appendChild(success2);
        TorF.classList.add("ansF");
    }
    success.classList.add("blue");
    target.classList.add("target");
    matigai1.classList.add("cantclick");
    matigai2.classList.add("cantclick");
    matigai3.classList.add("cantclick");
};