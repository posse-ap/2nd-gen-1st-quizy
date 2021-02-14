
var choices=['a','b','c'];
var img =["https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png",
"https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png",
"https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png",
"https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png",
];
var words = [
    ["たかなわ","こうわ","たかわ"],
    ["かめいど","かめと","かめど"],
    ["こうじまち","おかとまち","かゆまち"],
    ["おなりもん","おかどもん","ごせいもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","せきこうい","いじい"],
    ["ぞうしき","ざっしき","ざっしょく"],
    ["おかちまち","みとちょう","ごしろちょう"],
    ["ししぼね","しこね","ろっこつ"],
    ["こぐれ","こばく","こしゃく"],
// おかとまちを選びたい場合は　console.log(words[2][[2]])

];
words.map(shuffle);

var trueanswer = ["たかなわ","かめいど","こうじまち","おなりもん","とどろき","しゃくじい","ぞうしき","おかちまち",
"ししぼね","こぐれ",
]

var empty =[];
for (var j = 0; j<10;j++){
var search =words[j].indexOf(trueanswer[j]);
empty.push(search);

};
console.log(empty);

function shuffle(chosen){
for(var i = 3 - 1; i > 0; i--){
   
    var r = Math.floor(Math.random() * (i + 1));
    [chosen[r],chosen[i]]=[chosen[i],chosen[r]]
    // var tmp = words[i];
    // words[i]= words[r];
    // words[r] = tmp;
}
return chosen;
};



for (var i = 0;i<10;i++){
let question ='<div class=container>'
+ '<div class="box">'
+ `<h3 class="yellowline"> ${i+1}. この地名はなんて読む？ </h3>`
+ `<img src = ${img[i]}>`
+'</div>'

+'<div class="btn">'
+'<ul>'

+`      <li class="buttondesign" id=buttonFunction2${i} onclick='reaction(2,${i},${empty[i]})' >${words[i][2]}</li>`
+`      <li class="buttondesign" id=buttonFunction1${i} onclick='reaction(1,${i},${empty[i]})' >${words[i][1]}</li>`
+`      <li class="buttondesign" id=buttonFunction0${i} onclick='reaction(0,${i},${empty[i]})' >${words[i][0]}</li>`


+`  <div id=answerarea${i}></div>`
+'</ul>'

+'</div>'
+'</div>'
document.write(question);}
//getelementbyIDにはiが使えないからfunctionを定義する必要がある。

function reaction (number,d,zero){
    const falsefunction2 = document.getElementById('buttonFunction2' + d );//不正解選択肢10問にgetElementByIdを適応させている。
    const falsefunction1 = document.getElementById('buttonFunction1' + d );
    const truefunction =  document.getElementById('buttonFunction0'  + d);
    const tru =  document.getElementById('buttonFunction' + zero + d);
    const paragraph = document.createElement('p');
    const resultDivided = document.getElementById('answerarea'+d)
    // const refer = document.getElementById('buttonFunction'+ d);
    const header = document.createElement('h3');
    
    
    resultDivided.appendChild(header);
    paragraph.innerText = `正解は「${words[d][zero]}」です！`;
    resultDivided.appendChild(paragraph);    
    
    truefunction.classList.add('stopaction');
    falsefunction2.classList.add('stopaction');
    falsefunction1.classList.add('stopaction');
    resultDivided.classList.add("answer-box");
   tru.classList.add('color-blue');
    if (number==zero){
        header.innerText = '正解！';
        header.classList.add('word-design');
       
    }

    else{
        header.innerText = '不正解！';
        header.classList.add('word-design2');
        
    };
        
       
      };
      

        
      
      
        
        
        
        
