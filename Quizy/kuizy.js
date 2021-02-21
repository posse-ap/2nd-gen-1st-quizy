'use strict';

const question = [
 ['たかなわ','たかわ','こうわ'],
 ['かめいど','かめと','かめど'],
 ['こうじまち','かゆまち','おかとまち'],
 ['おなりもん','おかどもん','ごせいもん'],
 ['とどろき','たたら','たたりき'],
 ['しゃくじい','いじい','せきこうい'],
 ['ぞうしき','ざっしき','ざっしょく'],
 ['おかちまち','ごしろちょう','みとちょう'],
 ['ししぼね','しこね','ろっこつ'],
 ['こぐれ','こばく','こしゃく'],
];  

 var newestArray=[]
    for (let i = 0  ; i < 10 ; i++){
     var array = [0,1,2];
     var newArray = [];
     var j;
     var k; 

    while (array.length > 0) {
     j = array.length;
     k = Math.floor(Math.random() * j); //0.1.2が出力

     newArray.push (array[k]);  //k=2のとき　arrayの2番目をnewArrayに追加
     array.splice(k, 1);  //arrayの2番目を削除
   }
    newestArray.push(newArray)
   }

　// console.log(newestArray)

 var b = [];
 for(let i = 0 ; i<10 ;i++){
 var a = newestArray[i].indexOf(0); //newestArray i=0　[1,2,0] から0の位置を特定
 b.push(a);
 }

//  console.log(b)
      
 for (let i = 0  ; i < 10 ; i++){
  const a =
 '<h2>' 
 + `${i+1}.この地名は何て読む？` 
 + '</h2>'
 + `<img src = "./image/${i}.png" alt="picture">`
 + '<ul id="list1">'
 + `<li id ="answerlist${i}-0" class="button" onclick="checkAnswer(${i},0,${b[i]})">`
 + `<b>${question[i][newestArray[i][0]]}</b>`
 + '</li>'
 + `<li id ="answerlist${i}-1" class="button" onclick="checkAnswer(${i},1,${b[i]})">`
 + `<b>${question[i][newestArray[i][1]]}</b>`
 + '</li>'
 + `<li id ="answerlist${i}-2" class="button" onclick="checkAnswer(${i},2,${b[i]})">`
 + `<b>${question[i][newestArray[i][2]]}</b>`
 + '</li>'
 + `<div id ="target${i}"class="hako">`
 + `<p id ="ToF${i}"></p>`
 + `<p id ="answeris${i}"></p>`
 + '</div> '
 + '</ul>';
 document.write(a);
};


 function checkAnswer(iti,ni,san) {
   const answerlist1 = document.getElementById("answerlist"+ iti +'-0');
   const answerlist2 = document.getElementById("answerlist"+ iti +'-1');
   const answerlist3 = document.getElementById("answerlist"+ iti +'-2');
   const clickplace = document.getElementById("answerlist" + iti + '-' + ni);
   const seikai = document.getElementById("answerlist" + iti + '-' + san );
   const ToF = document.getElementById("ToF" + iti);
   const answeris = document.getElementById("answeris" + iti);
   const target = document.getElementById("target" + iti);
   const success1 = document.createTextNode ("正解！");
   const success2 = document.createTextNode(`正解は『${question[iti][0]}』です！`);
   const failure1 = document.createTextNode("不正解！");

target.classList.add("box");
seikai.classList.add("blue");
answeris.appendChild(success2);
answerlist1.classList.add("cantclick");
answerlist2.classList.add("cantclick");
answerlist3.classList.add("cantclick");


if(ni===san){
  ToF.appendChild(success1)
　 ToF.classList.add("ansT")
} else {
  clickplace.classList.add("red")
 ToF.appendChild(failure1)
 ToF.classList.add("ansF")
}

seikai.classList.add("blue");

    }
