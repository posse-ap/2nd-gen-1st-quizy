const batu1=document.getElementById("batu1");
const batu2=document.getElementById("batu2");
const seikaikabatu=document.getElementById("seikaikabatu");
const seikainohyouji=document.getElementById("seikainohyouji");
const success1=document.createTextNode("正解！");
const success2=document.createTextNode("正解は「たかなわ」です！");
const fairure=document.createTextNode("不正解！");
const kome=document.getElementById("komennto");
var nannmonnme=document.getElementById("nannmonnme");
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
    
    
//};

	

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

const senntakusi=([["たかなわ","たかわ","こうわ"],
                  ['かめいど', 'かめど', 'かめと'],
                  ['こうじまち', 'かゆまち', 'おかちまち'],
                  ['おなりもん', 'おかどもん', 'ごせいもん'],
                  ['とどろき', 'たたりき', 'たたら'],
                  ['しゃくじい', 'せきこうい', 'いじい'],
                  ['ぞうしき', 'ざっしき', 'ざっしょく'],
                  ['おかちまち', 'ごしろちょう', 'みとちょう'],
                  ['ししぼね', 'ろっこつ','しこね'],
                  ['こぐれ', 'こぱく', 'こしゃく']]);


for(let i=0;i<10;i++){
let p='<div class="itimonnme">'
        +'<section class="quiz box-container">'
        + '<div id="nannmonnme"></div>'
        +`<h2>${i+1}.この地名は何と読む？</h2>`
        +`<img src="${i+1}.png"></img>`
         +'<section class="quiz box-container">'
        　+`<li id="seikai">${senntakusi[i][0]}</li>`
        +　`<li id="batu1">${senntakusi[i][1]}</li>`
        +　`<li id="batu2">${senntakusi[i][2]}</li>`
      +'<div id="komennto">'
       + '<p id="seikaikabatu"></p>'
       + '<p id="seikainohyouji"></p>'
      +'</div>';
      document.write(p);
};




