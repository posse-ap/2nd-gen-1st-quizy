'use strict';
// const answerlist1 = document.getElementById("answerlist1")
// const answerlist2 = document.getElementById("answerlist2")
// const answerlist3 = document.getElementById("answerlist3")
// const ToF = document.getElementById("ToF")
// const answeris = document.getElementById("answeris")
// const target = document.getElementById("target")
// const success1 = document.createTextNode ("正解！")
// const success2 = document.createTextNode("正解は『たかなわ』です！");
// const failure1 = document.createTextNode("不正解！");

//   answerlist1.onclick=function(){
//       answerlist1.classList.add("red");
//       answerlist2.classList.add("blue");
//       ToF.appendChild(failure1);
//       answeris.appendChild(success2);
//       target.classList.add("box");
//       ToF.classList.add("ansF");
//       answerlist1.classList.add("cantclick")
//       answerlist2.classList.add("cantclick")
//       answerlist3.classList.add("cantclick")
//  }

// answerlist2.onclick=function(){
//     answerlist2.classList.add("blue");
//     ToF.appendChild(success1);
//     answeris.appendChild(success2);
//     target.classList.add("target");
//     ToF.classList.add("ansT");
//     answerlist1.classList.add("cantclick")
//     answerlist2.classList.add("cantclick")
//     answerlist3.classList.add("cantclick")
// }

// answerlist3.onclick=function(){
//     answerlist3.classList.add("red");
//     answerlist2.classList.add("blue");
//     ToF.appendChild(failure1);
//     answeris.appendChild(success2);
//     target.classList.add("target");
   //  ToF.classList.add("ansF");
//     answerlist1.classList.add("cantclick")
//     answerlist2.classList.add("cantclick")
//     answerlist3.classList.add("cantclick")
// }




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

// let seikai = [
//    'たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','おかちまち','ししぼね','こぐれ'
//  ];


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
 for(let i = 0 ; i<10 ;i++){
 var a = newestArray[i].indexOf(0);
 b.push(a);
 }

 console.log(b)
      
 for (let i = 0  ; i < 10 ; i++){
  const a =
 '<h2>' 
 + `${i+1}.この地名は何て読む？` 
 + '</h2>'
 + `<img src = "./image/${i}.png" alt="picture">`
 + '<ul id="list1">'
 + `<li id ="answerlist${i}-0" class="button"onclick="checkAnswer(${i},0,${b[i]})">`
 + `<b>${question[i][newestArray[i][0]]}</b>`
 + '</li>'
 + `<li id ="answerlist${i}-1" class="button"onclick="checkAnswer(${i},1,${b[i]})">`
 + `<b>${question[i][newestArray[i][1]]}</b>`
//  + `<b>${question[i][newestArray[i][1]]}</b>`
 + '</li>'
 + `<li id ="answerlist${i}-2" class="button"onclick="checkAnswer(${i},2,${b[i]})">`
 + `<b>${question[i][newestArray[i][2]]}</b>`
//  + `<b>${question[i][newestArray[i][2]]}</b>`
 + '</li>'
 + `<div id ="target">`
 + `<p id ="ToF"></p>`
 + '<p id ="answeris"></p>'
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
  //  const ToF = document.getElementById("ToF");
  // const answeris = document.getElementById("answeris");
  const target = document.getElementById("target");
  // const success1 = document.createTextNode ("正解！");
  //  const success2 = document.createTextNode("正解は『たかなわ』です！");
  //  const failure1 = document.createTextNode("不正解！");
//       ToF.appendChild(failure1);
//       answeris.appendChild(success2);
//       target.classList.add("box");
//       ToF.classList.add("ansF");

//     ToF.appendChild(success1);
//     answeris.appendChild(success2);
//     target.classList.add("target");
//     ToF.classList.add("ansT");



  if(ni===san){
  //  ToF.appendChild(success1)
  //  ToF.classList.add("ansT")
  } else {
    clickplace.classList.add("red")
    // failure1.classList.add("ansF")
  }

target.classList.add("box")
seikai.classList.add("blue")
answerlist1.classList.add("cantclick");
answerlist2.classList.add("cantclick");
answerlist3.classList.add("cantclick");

    }
