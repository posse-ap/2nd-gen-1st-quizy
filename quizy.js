'use strict';
const batu1=document.getElementById("batu1");
const batu2=document.getElementById("batu2");
const seikaikabatu=document.getElementById("seikaikabatu");
const seikainohyouji=document.getElementById("seikainohyouji");
const success1=document.createTextNode("正解！");
const success2=document.createTextNode("正解は「たかなわ」です！");
const fairure=document.createTextNode("不正解！");
const kome=document.getElementById("komennto");
// batu1.onclick=function(){
//     batu1.classList.add("aka");
//     seikai.classList.add("ao");
//     seikaikabatu.appendChild(fairure);
//     seikainohyouji.appendChild(success2);
//     kome.classList.add("kome")
//     seikaikabatu.classList.add("seikaikabatu");
//     batu1.classList.add("kurikkudekinai")
//     seikai.classList.add("kurikkudekinai")
//     batu2.classList.add("kurikkudekinai");

// };
// const seikai=document.getElementById("seikai");
// seikai.onclick=function(){
//      seikai.classList.add("ao");
//      seikaikabatu.appendChild(success1);
//      seikainohyouji.appendChild(success2);
//      kome.classList.add("kome");
//      seikaikabatu.classList.add("seikaikabatu2");
//      seikai.classList.add("kurikkudekinai");
//      batu2.classList.add("kurikkudekinai");
//      batu1.classList.add("kurikkudekinai")
// };
// batu2.onclick=function(){
//     batu2.classList.add("aka");
//     seikai.classList.add("ao");
//     seikaikabatu.appendChild(fairure);
//     seikainohyouji.appendChild(success2);
//     kome.classList.add("kome");
//     seikaikabatu.classList.add("seikaikabatu");
//     batu2.classList.add("kurikkudekinai");
//     batu1.classList.add("kurikkudekinai");
//     seikai.classList.add("kurikkudekinai");
    
    
// };

	

// qa
// qa[1]    ['たかなわ', 'こうわ', 'たかわ'],
// qa[2]    ['かめいど', 'かめど', 'かめと'],
// qa[3]    ['こうじまち', 'かゆまち', 'おかちまち'],
// qa[4]    ['ごせいもん', 'おかどもん', 'おなりもん',
// qa[5]    ['たたら', 'たたりき', 'とどろき'],
// qa[6]    ['しゃくじい', 'せきこうい', 'いじい'],
// qa[7]    ['ざっしき', 'ぞうしき', 'ざっしょく'],
// qa[8]    ['おかちまち', 'ごしろちょう', 'みとちょう'],
// qa[9]    ['ろっこつ', 'ししぼね','しこね'],
// qa[10]   ['こしゃく', 'こぱく', 'こぼね'],

const senntakushi=([["たかなわ","たかわ","こうわ"],
                  ['かめいど', 'かめど', 'かめと'],
                  ['こうじまち', 'かゆまち', 'おかちまち'],
                  ['おなりもん', 'おかどもん', 'ごせいもん'],
                  ['とどろき', 'たたりき', 'たたら'],
                  ['しゃくじい', 'せきこうい', 'いじい'],
                  ['ぞうしき', 'ざっしき', 'ざっしょく'],
                  ['おかちまち', 'ごしろちょう', 'みとちょう'],
                  ['ししぼね', 'ろっこつ','しこね'],
                  ['こぐれ', 'こぱく', 'こしゃく']]);

// const senntakushishuffle=([["たかなわ","たかわ","こうわ"],
//                            ['かめいど', 'かめど', 'かめと'],
//                            ['こうじまち', 'かゆまち', 'おかちまち'],
//                            ['おなりもん', 'おかどもん', 'ごせいもん'],
//                            ['とどろき', 'たたりき', 'たたら'],
//                            ['しゃくじい', 'せきこうい', 'いじい'],
//                            ['ぞうしき', 'ざっしき', 'ざっしょく'],
//                            ['おかちまち', 'ごしろちょう', 'みとちょう'],
//                            ['ししぼね', 'ろっこつ','しこね'],
//                            ['こぐれ', 'こぱく', 'こしゃく']]);

const seikailist=["たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち","ししぼね","こぐれ"]


//シャッフル関数
function shuffle(arr) {
  for (let k = 3 - 1; k > 0; k--) { 
    const j = Math.floor(Math.random() * (k + 1)); 
    [arr[j], arr[k]] = [arr[k], arr[j]]; 
  }
  return arr;
}
senntakushi.map(shuffle);

var b=[];
for(let i=0;i<10;i++){
  var a=senntakushi[i].indexOf(seikailist[i]);
  b.push(a);
};
console.log(b)

for(let i=0;i<10;i++){
let p='<div class="itimonnme">'
        +'<section class="quiz box-container">'
        +`<h2>${i+1}.この地名は何と読む？</h2>`
        +`<img src="${i+1}.png"></img>`　　//写真
        +'<ul>'
        for(let g=0;g<senntakushi[g].length;g++){
          p = p+ `<li id="matigai${i}-${g}" onclick="judge(${i},${g},${b[i]})">${senntakushi[i][g]}</li>`
        }
        p=p+`<div  id="target${i}">`
       + `<p id="seikaikabatu${i}"></p>`;
       + `<p id="seikainohyouji${i}" class="seikainohyouji"></p>`;
       +'</div>';
       +'</ul>';
       +'</div>';
      document.write(p)
}



function judge (nannmonnme,clicknumber,seikainumber){
  let matigai=document.getElementById("matigai"+nannmonnme+"-"+clicknumber);
  let success=document.getElementById("matigai"+nannmonnme+"-"+seikainumber);
  let matigai1=document.getElementById("matigai"+nannmonnme+"-0")
  let matigai2=document.getElementById("matigai"+nannmonnme+"-1")
  let matigai3=document.getElementById("matigai"+nannmonnme+"-2")
  const success1=document.createTextNode("正解！");
  const success2=document.createTextNode(`正解は「${seikailist[nannmonnme]}」です！`);
  const fairure=document.createTextNode("不正解！");
  const target=document.getElementById(`target`+nannmonnme);
  const seikainohyouji=document.getElementById(`seikainohyouji`+nannmonnme);
  const seikaikabatu=document.getElementById(`seikaikabatu`+nannmonnme);
  
};

if(clicknumber==seikainumber){
  seikaikabatu.appendChild(success1);
  seikainohyouji.appendChild(success2);
  seikaikabatu.classList.add("seikaikabatu2")
}else{
  batu2.classList.add("aka");
  seikaikabatu.appendChild(fairure);
  seikainohyouji.appendChild(success2);
  seikaikabatu.classList.add("seikaikabatu");
}
target.classList.add("komme");
seikai.classList.add("ao");
matigai1.classList.add("kurikkudekinai");
matigai2.classList.add("kurikkudekinai");
matigai3.classList.add("kurikkudekinai");