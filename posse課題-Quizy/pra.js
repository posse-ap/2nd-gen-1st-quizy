// こっちが本当


 // 配列
 
 
 // quizeSet.forEach(element => {
   
   //  let quizeSet_answer = quizeSet[0];
   
   //  console.log(quizeSet_answer);
   // });
   
   
   
   
   
   
   
   
   // for (let i = 0; i < 10; i++) {
     
     
     
     
     
     // let hash = [
       
       //   ["value0"], 
       //   ["value1"]
       
       // ];
       
       
       
       
       
       // function aaa(num) {
         //   let gh = 1  + num ;
         //   console.log(gh); 
         // }
         // aaa(34);
         
         
         
         
         
         // console.log(quizeSet);
         // const correct = [
           
           //   quizeSet[0][0],quizeSet[1][0],quizeSet[2][0],quizeSet[3][0],quizeSet[4][0],
           //   quizeSet[5][0],quizeSet[6][0],quizeSet[7][0],quizeSet[8][0],quizeSet[9][0], 
           // ];
           
           // question_num　：問題番号
           // selection_num　：選択された番号
           // answer_num：　答えの番号
           
           Object.keys(quizeSet).forEach(key => {
          });         
          
          
    
  'use strict';

  // 配列
  let quizeSet = new Array();

  quizeSet.push(["たかなわ", "こうわ", "たかわ"]);
  quizeSet.push(["かめいど", "かめど", "かめと"]);
  quizeSet.push(["こうじまち", "おかとまち", "かゆまち"]);
  quizeSet.push(["ごせいもん", "おなりもん", "おかどもん"]);
  quizeSet.push(["とどろき", "たたりき", "たたら"]);
  quizeSet.push(["せきこうい", "いじい", "しゃくじい"]);
  quizeSet.push(["ざっしょく", "ざっしき", "ぞうしき"]);
  quizeSet.push(["みとちょう", "おかちまち", "ごしろちょう"]);
  quizeSet.push(["ろっこつ", "ししぼね", "しこね"]);
  quizeSet.push(["こぐれ", "こばく", "こしゃく"]);




//正解
  function answer(num) {
  let quizeSet_answer = new Array();

  for (let q = 0; q < quizeSet.length; q++) {
  quizeSet_answer.push(quizeSet[q][0]);
  }

  console.log(quizeSet_answer);
  }

  answer();

  // console.log(quizeSet[0]);

  // ループ
for (let i = 0; i < 10; i++) {
  createdocument(i,0,0);
}


// htmlに出力
function createdocument(question_num , selection_num , answer_num) {
  
  let h = 
    '<div id="body">'
      + '<div class="container" id="container">'
          + '<div class="box" id="box">'
              + '<p class="title" id="title">'
              +  question_num + '.この地名はなんて読む？'
              + '</p>'
              + '<img class="img-fluid" src="./img/' + question_num   +  '.png" alt="選択肢の写真">'
          + '</div>'

          + '<div class="btn" id="btn">'
            + '<ul id="ul">'

              + '<li class="list" id="' + question_num + "_" + selection_num + "_" + answer_num + '" onclick="check()">'
              + quizeSet[question_num][0]
              + '</li>'

              + '<li class="list" id="' + question_num + "_" + selection_num + "_" + answer_num + '" onclick="check()">'
              + quizeSet[question_num][1]
              + '</li>'

              + '<li class="list" id="' + question_num + "_" + selection_num + "_" + answer_num + '" onclick="check()">'
              + quizeSet[question_num][2]
              + '</li>'

              // + `<li class="list" id="list${i}-1" onclick='check()'>${quizeSet[i][0]}</li>`
              // + `<li class="list" id="list${i}-2" onclick='check()'>${quizeSet[i][1]}</li>`
              // + `<li class="list" id="list${i}-3" onclick='check()'>${quizeSet[i][2]}</li>`

              + '<div id="target">'
                + '<p id="success"></p>'
                + '<p id="successText"></p>'
              + '</div>'
            + '</ul>'
          + '</div>'
      + '</div>'
    + '</div>';

    // console.log(h); 
    document.write(h);

  }

// クリックしたときの動作
  function check() {
    console.log("aaaaaaaaaaaa");

    if
  }




    
  // }

  
// function check(seikai) {
//   if(quizeSet[0][0] == quizeSet[0][seikai]){
//     // const list1 = document.getElementById("list1");
//     // const list2 = document.getElementById("list2");
//     // const list3 = document.getElementById("list3");

//     console.log("正解")
//     list1.classList.add("color-blue");

    
//   }else{
//     list2.classList.add("color-red");
//     list3.classList.add("color-red");
//     console.log("失敗")

//   }
// }

//  // target
//  const target = document.getElementById("target");
//  //  success
//  const success = document.getElementById("success");
//  //  successText
//  const successText = document.getElementById("successText");
//  const successNode1 = document.createTextNode('正解!');
//  const successNode2 = document.createTextNode('正解は「たかなわ」です!');
//  const falseNode1 = document.createTextNode('不正解!');
//  const falseNode2 = document.createTextNode('正解は「たかなわ」です!');

//  const list1 =  document.getElementById("list1_${i}");
//  const list2 =  document.getElementById("list2");
//  const list3 =  document.getElementById("list3");
// //  console.log(list1);





