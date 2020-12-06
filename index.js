'use strict';

const hako= document.getElementById("hako");
const torf= document.getElementById("torf");
const seikai= document.getElementById("seikai");
const s1= document.getElementById("s1");
const s2= document.getElementById("s2");
const s3= document.getElementById("s3");
const seikai1=document.createTextNode("正解！");
const seikai2=document.createTextNode("正解は「たかなわ」です！");
const huseikai1=document.createTextNode("不正解！");



s2.onclick=function(){
s2.classList.add("blue");
torf.appendChild(seikai1);
seikai.appendChild(seikai2);
hako.classList.add("hako2");
s1.classList.add("cantclick");
s3.classList.add("cantclick");
}
s1.onclick=function(){
s1.classList.add("red");
s2.classList.add("blue");
torf.appendChild(huseikai1);
seikai.appendChild(seikai2);
hako.classList.add("hako2");
s2.classList.add("cantclick");
s3.classList.add("cantclick");
}
s3.onclick=function(){
s3.classList.add("red");
s2.classList.add("blue");
torf.appendChild(huseikai1);
seikai.appendChild(seikai2);
hako.classList.add("hako2");
s2.classList.add("cantclick");
s1.classList.add("cantclick");
}


