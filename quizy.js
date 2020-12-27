'use strict'

const a1js= document.getElementById('a1-js');
const a2js = document.getElementById('a2-js');
const a3js = document.getElementById('a3-js');
const resultaccess = document.getElementById('quiz-result');
const explainaccess = document.getElementById('explain');
const titleaccess = document.getElementById('quiz-result-title');
const choices = [
  ["たかなわ","こうわ","たかわ"]
//   ["かめいど","かめど","かめと"]
//   // ["こうじまち","かゆまち","おかとまち"]
//   ["おなりもん","おかどもん","ごせいもん"]
//   ["とどろき","たたら","たたりき"]
//   ["しゃくじい","いじい","せきこうい"]
//   ["ぞうしき","ざっしょく","ざっしき"]
//   ["おかちまち","ごしろちょう","みとちょう"]
//   ["ししぼね","しこね","ろっこつ"]
//   ["こぐれ","こばく","こしゃく"]
]

const img = [
  []
]



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

    // a3js.onclick = function(){
    //   a3js.classList.add("fail");
    //   a1js.classList.add("success");
    //   resultaccess.classList.add("quiz-result");
    //   titleaccess.appendChild(document.createTextNode("不正解！"));
    //   titleaccess.classList.add("quiz-result-title-failed");
    //   explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
    // };


  for(let i=1; i<11; i++){
    //値が1から10まで10回実行
    let i =
      '<div class = "quiz-container">'
      +'<h2>'
      +`${i}. この地名は何て読む？`
      +'<h2>'
      +`<img src = "${i}.png">`

    document.write(`<img src="${i}.png">`);



  };

  // <div class="quiz-container">
  //           <h2>1. この地名はなんて読む？</h2>
  //           <img class="quiz-image" src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="">
         
  //           <ul>
  //             <li id="a1-js" class="answerlist">たかなわ</li>
  //             <li id="a2-js" class="answerlist">たかわ</li>
  //             <li id="a3-js" class="answerlist">こうわ</li>
  //           </ul>

  //           <div id="quiz-result">
  //               <p id="quiz-result-title"></p>
  //               <p id="explain"></p>
  //           </div>
  //       </div>