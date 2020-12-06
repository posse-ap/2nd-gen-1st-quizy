const miss1 = document.getElementById('miss1');
const miss2 = document.getElementById('miss2');
const success = document.getElementById('success');
const hide =document.getElementById("hide");
const torf =document.getElementById("torf");
const seikou3 =document.getElementById("seikou");
const seikou =document.createTextNode("正解");
const sippai =document.createTextNode("不正解");
const seikou2 =document.createTextNode("正解は「たかなわ」です");

success.onclick = function () {
  success.classList.add("blue");
  torf.appendChild(seikou);
  seikou3.appendChild(seikou2);
  hide.classList.add("hako");
  torf.classList.add('yes');
  miss1.classList.add('cantclick');
  miss2.classList.add('cantclick');
  success.classList.add('cantclick');
};


miss1.onclick = function () {
    miss1.classList.add("red");
    success.classList.add("blue");
   torf.appendChild(sippai);
   seikou3.appendChild(seikou2);
   hide.classList.add("hako");
   torf.classList.add("tigai");
   miss2.classList.add('cantclick');
   success.classList.add('cantclick');
   miss1.classList.add('cantclick');
};


miss2.onclick = function () {
    miss2.classList.add("red");
    success.classList.add("blue");
    torf.appendChild(sippai);
    seikou3.appendChild(seikou2);
    hide.classList.add("hako");
    torf.classList.add('yes');
    miss2.classList.add('cantclick');
    success.classList.add('cantclick');
    miss1.classList.add('cantclick');
};

const sentakusi = ([
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


function shuffle(sentakusi) {
    for (let k = sentakusi.length - 1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
      [sentakusi[j], sentakusi[k]] = [sentakusi[k], sentakusi[j]]; // 分割代入 k と j を入れ替える
    }
    
    return sentakusi;
 };

for (let i =0; i<10; i++){
const h = 
'<div class="box">'
       + '<h1 class="yahho">'
       + `${i+1}.この地名はなんて読む？`
       +'</h1>'
        + `<img src='./クイジー写真/${i}.png' alt="高輪">`
       + '<div class="btn">'
           + '<ul>'
                + `<li class="btn2" id="miss1">${sentakusi[i][0]}</li>`
                + `<li class="btn2" id=success>${sentakusi [i] [1]}</li>`
               + `<li class="btn2" id=miss2>${sentakusi [i] [2]}</li>`

                // <div class= "btn3" id=hide>
                //     <p class = "tigai">不正解！</p>
                //     <p>正解はたかなわです。</p>
                // </div>
                // <div class= "btn4" id=hide2>
                //     <p class = "yes">正解！</p>
                //     <p>正解はたかなわです。</p>
                // </div>
       +'</div>'
  +  '</div>'
  document.write(h);
};

