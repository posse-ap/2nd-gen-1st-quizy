'use strict' ;
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const TorF = document.getElementById('TorF');
const true_is = document.getElementById('true_is');
const success1 = document.createTextNode("正解!");
const false1 = document.createTextNode("不正解！");
const success2 = document.createTextNode("正解は『たかなわ』です！");
const target = document.getElementById('target');
const image_box = document.getElementById("image_box");
// var img = document.getElementById('image_place');

btn1.onclick = () => { 
    btn1.classList.add("red");
    btn2.classList.add("blue");
    TorF.appendChild(false1);
    true_is.appendChild(success2);
    target.classList.add("box");
    TorF.classList.add("ansF");
    button1.classList.add("finish");
    button2.classList.add("finish");
    button3.classList.add("finish");
};

btn2.onclick = () => {
    btn2.classList.add("blue");
    TorF.appendChild(success1);
    true_is.appendChild(success2);
    target.classList.add("box");
    TorF.classList.add("ansT");
    button1.classList.add("finish");
    button2.classList.add("finish");
    button3.classList.add("finish");
};

btn3.onclick = () => {
    btn2.classList.add("blue");
    btn3.classList.add("red");
    TorF.appendChild(false1);
    true_is.appendChild(success2);
    target.classList.add("box");
    TorF.classList.add("ansF");
    button1.classList.add("finish");
    button2.classList.add("finish");
    button3.classList.add("finish");
};

// const choices =([
//      [],
//      [],
//      [],
// ]).map(shuffle);
//

for( var i= 0;i<10;i++){
    var img_src = i + ".png";
    var img_tag = '<img src="' + img_src + '">';
    console.log(img_tag);
    image_box.innerHTML=img_tag;

};
