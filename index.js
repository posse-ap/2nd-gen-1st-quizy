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



  const original = ([
    ["たかなわ","こうわ","たかわ"], //0-0,0-1,0-2
    ["かめいど","かめど","かめと"],
    ["こうじまち","かゆまち","おかとまち"],
    ["おなりもん","おかどもん","ごせいもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","いじい","せきこうい"],
    ["ぞうしき","ざっしょく","ざっしき"],
    ["おかちまち","ごしろちょう","みとちょう"],
    ["ししぼね","しこね","ろっこつ"],
    ["こぐれ","こばく","こしゃく"],
  ]);

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
    const cloned = JSON.parse(JSON.stringify(original));
    //shuffle([...original].c);
    cloned.map(shuffle);//シャッフル

  function shuffle(cloned) {
    for (let k = cloned.length - 1; k > 0; k--) { // i = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
      [cloned[j], cloned[k]] = [cloned[k], cloned[j]]; // 分割代入 i と j を入れ替える
    }
    return cloned;
  }
  console.log(original,cloned);

    // cloned.forEach(choice => {
    //   cloned.textContent = choice;
    //   cloned.addEventListener('click', () => {
    //     checkAnswer(cloned);
    //   });
    // });

  // function checkAnswer(li) {
  //   if (li.textContent === original[0,1,2,3,4,5,6,7,8,9][0]) {
  //     console.log('correct');
  //   } else {
  //     console.log('wrong');
  //   }
  // }

  // 画像挿入するよー
    let image = new Array()
    image[1] = "./1.png";
    image[2] = "./2.png";
    image[3] = "./3.png";
    image[4] = "./4.png";
    image[5] = "./5.png";
    image[6] = "./6.png";
    image[7] = "./7.png";
    image[8] = "./8.png";
    image[9] = "./9.png";
    image[10] = "./10.png";

    
  for(let i=0; i<10; i++){
    //値が0から9まで10回実行
    let a =
      '<div class = "quiz-container">'
        +`<h2>${i+1}.この地名は何て読む？</h2>`
        +`<img src = "${image[i+1]}" alt = "picture">`
        +'<ul>'
          +`<li id="li${i+1}-0" class="answerlist" onclick="judge(${i+1},0,${[i]})">${cloned[i][0]}</li>`
          // "onclick="judge(${i+1},1,${newestArray[i][0]})"
          +`<li id="li${i+1}-1" class="answerlist" onclick="judge(${i+1},1,${[i]})">${cloned[i][1]}</li>`
          +`<li id="li${i+1}-2" class="answerlist" onclick="judge(${i+1},2,${[i]})">${cloned[i][2]}</li>`
        +'</ul>'
        +'<div id="quiz-result">'
          +'<p id="quiz-result-title"></p>'
          +'<p id="explain"></p>'
        +'</div>'
      +'<div>';
    document.write(a);
  };

  function judge(qnumber,pushed,right){
    let li1 = document.getElementById('li'+ qnumber + '-0');
    let li2 = document.getElementById('li'+ qnumber + '-1');
    let li3 = document.getElementById('li'+ qnumber + '-2');
    let 
  }




// for(let j=0;j<3;j++){

// }
// const li1= document.getElementById('li1');
// const li2 = document.getElementById('li2');
// const li3 = document.getElementById('li3');
// const resultaccess = document.getElementById('quiz-result');
// const explainaccess = document.getElementById('explain');
// const titleaccess = document.getElementById('quiz-result-title');
  
// li1.onclick = function(){
//       console.log('ok');
//       li1.classList.add("success");
//       resultaccess.classList.add("quiz-result");
//       titleaccess.appendChild(document.createTextNode("正解！"));
//       titleaccess.classList.add("quiz-result-title-succeeded");
//       explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
//     };

// isAnswered = choices[i][0];

  // function checkAnswer(li) {
  //   if (isAnswered) {
  //     a1.classList.add("success")
  //   }
  //   isAnswered = true;

  //   if (li.textContent === quizSet[currentNum].c[0]) {
  //     li.classList.add('correct');
  //     score++;
  //   } else {
  //     li.classList.add('wrong');
  //   }

  //   btn.classList.remove('disabled');
  // }




// function (answerlist){
//   if(a1.classList.onclick){
// 　　//　containsメソッドで、test2クラスが既に付与されているか判定
//     a1.classList.add('success');
// 　　//　test2クラスがついている場合、test２クラスを削除する 
//   }else{
//     a2.classList.add('failor')
//     a3.classList.add('failor');
// 　　//　test2クラスがついていない場合、test２クラスを追加する 
//   }
// };

//i-0を選んだ時に正解、それ以外を選択すると不正解