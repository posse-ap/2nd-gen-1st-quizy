'use strict';

// const hako= document.getElementById("hako");
// const torf= document.getElementById("torf");
// const seikai= document.getElementById("seikai");
// const s1= document.getElementById("s1");
// const s2= document.getElementById("s2");
// const s3= document.getElementById("s3");
// const seikai1=document.createTextNode("正解！");
// const seikai2=document.createTextNode("正解は「たかなわ」です！");
// const huseikai1=document.createTextNode("不正解！");



// s2.onclick=function(){
// s2.classList.add("blue");
// torf.appendChild(seikai1);
// torf.classList.add("seikai1")
// seikai.appendChild(seikai2);
// hako.classList.add("hako2");
// s1.classList.add("cantclick");
// s2.classList.add("cantclick");
// s3.classList.add("cantclick");
// }
// s1.onclick=function(){
// s1.classList.add("red");
// s2.classList.add("blue");
// torf.appendChild(huseikai1);
// torf.classList.add("huseikai1")
// seikai.appendChild(seikai2);
// hako.classList.add("hako2");
// s1.classList.add("cantclick");
// s2.classList.add("cantclick");
// s3.classList.add("cantclick");
// }
// s3.onclick=function(){
// s3.classList.add("red");
// s2.classList.add("blue");
// torf.appendChild(huseikai1);
// torf.classList.add("huseikai1")
// seikai.appendChild(seikai2);
// hako.classList.add("hako2");
// s2.classList.add("cantclick");
// s1.classList.add("cantclick");
// s3.classList.add("cantclick");
// }
for (let i =0; i<10;i++){
    
let one =
        '<div class="mainvisual">'
        +'<h2> <span class="under">'
        + ` ${i + 1}. この地名はなんて読む？</span></h2>`
        + '<div class="picture">'
        +'<img src="./img/picture1.png" alt="高輪">'
        +'</div>'
        +'<ul>'
        +'<li id="s1"class="button">'
        +'<b>たかわ</b>'
        +'</li>'
        +'<li id="s2"class="button">'
        +'<b>たかなわ</b>'
        +'</li>'
        +'<li id="s3"class="button">'
        +'<b>こうわ</b>'
        +'</li>'
        +'</ul>'
        +'<div id="hako">'
        +'<p id="torf"></p>'
        +'<p id="seikai"></p>'
        +'</div>'
        +'</div>';

    document.write(one);
}
// aaaaaaaaa
