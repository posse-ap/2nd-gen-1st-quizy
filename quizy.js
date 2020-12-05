const batu1=document.getElementById("batu1");
const batu2=document.getElementById("batu2");
const seikaikabatu=document.getElementById("seikaikabatu");
const seikainohyouji=document.getElementById("seikainohyouji");
const success1=document.createTextNode("正解！");
const success2=document.createTextNode("正解は「たかなわ」です！");
const fairure=document.createTextNode("不正解！");
const kome=document.getElementById("komennto");
batu1.onclick=function(){
    batu1.classList.add("aka");
    seikai.classList.add("ao");
    seikaikabatu.appendChild(fairure);
    seikainohyouji.appendChild(success2);
    kome.classList.add("kome")
    seikaikabatu.classList.add("seikaikabatu");
    batu1.classList.add("kurikkudekinai")
    seikai.classList.add("kurikkudekinai")
    batu2.classList.add("kurikkudekinai");

};
const seikai=document.getElementById("seikai");
seikai.onclick=function(){
     seikai.classList.add("ao");
     seikaikabatu.appendChild(success1);
     seikainohyouji.appendChild(success2);
     kome.classList.add("kome");
     seikaikabatu.classList.add("seikaikabatu2");
     seikai.classList.add("kurikkudekinai");
     batu2.classList.add("kurikkudekinai");
     batu1.classList.add("kurikkudekinai")
};
batu2.onclick=function(){
    batu2.classList.add("aka");
    seikai.classList.add("ao");
    seikaikabatu.appendChild(fairure);
    seikainohyouji.appendChild(success2);
    kome.classList.add("kome");
    seikaikabatu.classList.add("seikaikabatu");
    batu2.classList.add("kurikkudekinai");
    batu1.classList.add("kurikkudekinai");
    seikai.classList.add("kurikkudekinai");
    
    
};
