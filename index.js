'use strict'

// a1js.onclick = function(){
//   console.log('ok');
//   a1js.classList.add("success");
//   resultaccess.classList.add("quiz-result");
//   titleaccess.appendChild(document.createTextNode("正解！"));
//   titleaccess.classList.add("quiz-result-title-succeeded");
//   explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
// };

// a2js.onclick = function(){
//   a2js.classList.add("fail");
//   a1js.classList.add("success");
//   resultaccess.classList.add("quiz-result");
//   titleaccess.appendChild(document.createTextNode("不正解！"));
//   titleaccess.classList.add("quiz-result-title-failed");
//   explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
// };

  // 画像挿入するよー
    let image = new Array()
    image[0] = "./1.png";
    image[1] = "./2.png";
    image[2] = "./3.png";
    image[3] = "./4.png";
    image[4] = "./5.png";
    image[5] = "./6.png";
    image[6] = "./7.png";
    image[7] = "./8.png";
    image[8] = "./9.png";
    image[9] = "./10.png";

  const original = ([
    ["たかなわ","こうわ","たかわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","かゆまち","おかとまち"],
    ["おなりもん","おかどもん","ごせいもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","いじい","せきこうい"],
    ["ぞうしき","ざっしょく","ざっしき"],
    ["おかちまち","ごしろちょう","みとちょう"],
    ["ししぼね","しこね","ろっこつ"],
    ["こぐれ","こばく","こしゃく"],
  ]).map(shuffle);

  const answer =
  ["たかなわ",
   "かめいど",
   "こうじまち",
   "おなりもん",
   "とどろき",
   "しゃくじい",
   "ぞうしき",
   "おかちまち",
   "ししぼね",
   "こぐれ"
  ];

    // JSON#parseはstringをJSONに変換し、
    // JSON#stringifyはJSONをstringに変換する。
    // 深いコピー
    // const cloned = JSON.parse(JSON.stringify(original));/
    //shuffle([...original].c);
    // cloned.map(shuffle);//シャッフル

  function shuffle(original) {
    for (let k = original.length - 1; k > 0; k--) { // i = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
      [original[j], original[k]] = [original[k], original[j]]; // 分割代入 i と j を入れ替える
    }
    return original;
  }
  console.log(original);

    var b = []
  for(let i=0; i<original.length; i++){
      var a = original[i].indexOf(answer[i]);
          b.push(a)
  };

    
  for(let i=0; i<original.length; i++){
    let h =
      '<div class = "main">'
        +'<div class = "quiz-container">'
        +`<h2>${i+1}.この地名は何て読む？</h2>`
        +`<img class="quiz-image" img src = "${image[i]}" alt = "picture">`
        +'<ul>';
    for(let m=0; m<3; m++){
        h = h + `<li id="li${i}-${m}" class="answerlist" onclick="check(${i},${m},${b[i]})">${original[i][m]}</li>`
    }
        h= h +'</ul>'
          +`<div id="quiz-result${i}">`
          +`<p id="quiz-result-title${i}"></p>`
          +`<p id="explain${i}"></p>`
          +'</div>'
        +'<div>'
      +'</div>';

    document.write(h);
  };

  function check(qnumber,clicked,right){
    let li1 = document.getElementById('li'+ qnumber + '-0');
    let li2 = document.getElementById('li'+ qnumber + '-1');
    let li3 = document.getElementById('li'+ qnumber + '-2');
    let push = document.getElementById('li'+qnumber + '-' + clicked);
    let correct = document.getElementById('li'+qnumber + '-' + right);
    const resultaccess = document.getElementById('quiz-result' + qnumber);
    const explainaccess = document.getElementById('explain' + qnumber);
    const titleaccess = document.getElementById('quiz-result-title' + qnumber);
    const successA = document.createTextNode("正解！");
    const explain = document.createTextNode(`正解は「${answer[qnumber]}」です！`);
    const miss = document.createTextNode("不正解！");
    var photo = document.getElementById('image'+qnumber);

    if (clicked == right){
        titleaccess.appendChild(successA);
        titleaccess.classList.add("quiz-result-title-succeeded");
    }
    else{
        push.classList.add("fail");
        titleaccess.appendChild(miss);
        titleaccess.classList.add("quiz-result-title-failed");
    };

    resultaccess.classList.add("quiz-result");
    explainaccess.appendChild(explain);
    correct.classList.add("success");
    li1.classList.add("xpush");
    li2.classList.add("xpush");
    li3.classList.add("xpush");

    //scroll作る
    var element = document.getElementById('image'); // 移動させたい位置の要素を取得
      console.log('ok');
      // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
      var rect = element.getBoundingClientRect();
      var position = rect.top;    // 一番上からの位置を取得

      window.scrollTo(0, position);
  };

