let sentakusi = ([
  ["たかなわ", "こうわ", "たかわ"],
  ["かめいど", "かめと", "かめど"],
  ["こうじまち", "おかとまち", "かゆまち"],
  ["おなりもん", "おかどもん", "ごせいもん"],
  ["とどろき", "たたら", "たたりき"],
  ["しゃくじい", "せきこうい", "いじい"],
  ["ぞうしき", "ざっしき", "ざっしょく"],
  ["おかちまち", "みとちょう", "ごしろちょう"],
  ["ししぼね", "しこね", "ろっこつ"],
  ["こぐれ", "こばく", "こしゃく"],
]);
const atari = [ 'たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'];

var shuffledarray = [];
for (let a =0; a<10;a++){
var array = [0, 1, 2,];
let r;
let temp;
for(let i = array.length - 1; i >= 0; i--){
  r = Math.floor(Math.random()*( i + 1));
  temp = array[i];
  array[i] = array[r];
  array[r] = temp;
};
shuffledarray.push(array);
};
// function shuffle(sentakusi) {
//   for (let k = sentakusi.length -1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
//     const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
//     // console.log(j);
//     [sentakusi[j], sentakusi[k]] = [sentakusi[k], sentakusi[j]]; // 分割代入 k と j を入れ替える
//   };
//   return sentakusi;
// };

// var shufflearray =[];
// for (let i =0; i<sentakusi.length; i++){
// var array = [0,1,2];
// var latestarray = [];

// for (let k = array.length -1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
//   const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
//   [array[j], array[k]] = [array[k], array[j]]; // 分割代入 k と j を入れ替える
// };
// return array;
// };


// function shuffle(sentakusi){
// let r
// let temp
// for(let i = sentakusi.length - 1; i >= 0; i--){
//   r = Math.floor(Math.random()*( i + 1));
//   temp = sentakusi[i];
//   sentakusi[i] = sentakusi[r];
//   sentakusi[r] = temp;
// };
// return sentakusi;

// };
// console.log(sentakusi);

for (let i = 0; i < 10; i++) {
  const h =
    '<div class="center">'
    + '<div class="box">'
    + '<h1 class="mondai">'
    + `${i + 1}.この地名はなんて読む？`
    + '</h1>'
    + `<img src='./クイジー写真/${i}.png' alt="高輪">`
    + '<div class="btn">'
    + '<ul>'
    + `<li  id="s${i}-1-${shuffledarray[i][0]}"onclick="judge(${i},1,${shuffledarray[i][0]})">${sentakusi[i][shuffledarray[i][0]]}</li>`
    + `<li  id="s${i}-2-${shuffledarray[i][1]}"onclick="judge(${i},2,${shuffledarray[i][1]})">${sentakusi[i][shuffledarray[i][1]]}</li>`
    + `<li  id="s${i}-3-${shuffledarray[i][2]}"onclick="judge(${i},3,${shuffledarray[i][2]})">${sentakusi[i][shuffledarray[i][2]]}</li>`
    + `<div id="hide-${i}">`
    + `<p id="torf-${i}">`
    + '</p>'
    + `<p id="seikou-${i}>`
    + '</p>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>'

  document.write(h);
};

// let hide = document.getElementById("hide");
// let torf = document.getElementById("torf");
// let seikou3 = document.getElementById("seikou");
let seikou = document.createTextNode("正解");
let sippai = document.createTextNode("不正解");
// let seikou2 = document.createTextNode("正解は"+atari+"です");
// console.log(array_success);

function judge(question,pushnumber,correctnumber){
let s = document.getElementById("s"+question+"-"+pushnumber+"-"+correctnumber);
let s1 =document.getElementById("s"+question+"-"+1+"-"+shuffledarray[i][0]);


function ok(number) {
  let seikai = document.getElementById("success-"+number);
  let miss1 = document.getElementById("miss1-" + number);
  let miss2 = document.getElementById("miss2-" + number);
  let hide = document.getElementById("hide-" +number);
  let torf = document.getElementById("torf-" +number);
  let seikou3 = document.getElementById("seikou-"+number);
  seikai.classList.add("blue");
  torf.appendChild(seikou);
  // seikou3.appendChild(seikou2);
  hide.classList.add("hako");
  torf.classList.add('yes');
  miss1.classList.add('cantclick');
  miss2.classList.add('cantclick');
  seikai.classList.add('cantclick');
};



  function miss1(number) {
  let seikai = document.getElementById("success-"+number);
  let miss1 = document.getElementById("miss1-" + number);
  let miss2 = document.getElementById("miss2-" + number);
  miss1.classList.add("red");
  seikai.classList.add("blue");
  // torf[i].appendChild(sippai);
  // seikou3[i].appendChild(seikou2);
  // hide[i].classList.add("hako");
  // torf.classList[i].add("tigai");
  miss2.classList.add('cantclick');
  miss1.classList.add('cantclick');
  seikai.classList.add('cantclick');
};

};

//   array_miss2[i].onclick = function () {
//   array_miss2[i].classList.add("red");
//   array_success[i].classList.add("blue");
//   // torf[i].appendChild(sippai);
//   // seikou3[i].appendChild(seikou2);
//   // hide[i].classList.add("hako");
//   // torf[i].classList.add('tigai');
//   array_miss2[i].classList.add('cantclick');
//   array_success[i].classList.add('cantclick');
//   array_miss1[i].classList.add('cantclick');
// };




// console.log(array_24);
 


// for (let b = 0; b < 10; b++) {
// `let miss2-${b} = document.getElementById('miss2-'+b)`;
// `let success0-${b}= document.getElementById('success-'+${b})`;
// `let miss1-${b} = document.getElementById('miss1-'+b)`;
// };


 /*そのうちletに変える。変数でも理解できる。つまりidはひとつなので*/

// console.log(success0-0);
// console.log(miss1);
// console.log(miss2);

// document.getElementById("success-0").onclick = function () {
//   document.getElementById("success-0").classList.add("blue");
//   torf.appendChild(seikou);
//   seikou3.appendChild(seikou2);
//   hide.classList.add("hako");
//   torf.classList.add('yes');
//   document.getElementById('miss1-0').classList.add('cantclick');
//   document.getElementById('miss2-0').classList.add('cantclick');
//   success.classList.add('cantclick');
// };

// for (let i = 0; i < 10; i++) {
// let miss1 = document.getElementById('miss1-0');
// let miss2 = document.getElementById('miss2-0');
// let success = document.getElementById('success-0');



// for (var i = 0; i < 10; ++i) {
  
// };


// .map(shuffle)

// function shuffle(sentakusi) {
//   for (let k = sentakusi.length -1; k > 0; k--) { // k = ランダムに選ぶ終点のインデックス
//     const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
//     console.log(j);
//     [sentakusi[j], sentakusi[k]] = [sentakusi[k], sentakusi[j]]; // 分割代入 k と j を入れ替える
//   };

//   return sentakusi;
// };

// console.log(j);

// var array_success = [];
// var array_miss1 = [];
// var array_miss2 = [];

// for (let i = 0; i < 10; i++) {
// array_success.push(document.getElementById("success-" + i));
// array_miss1.push(document.getElementById("miss1-" + i));
// array_miss2.push(document.getElementById("miss2-" + i));
// };
// console.log(document.getElementById("success-1"));

// var array_success = [];
// var array_miss1 =[];
// var array_miss2 =[];
// var hide =[];
// var torf =[];
// var seikou3 =[];
// for (var i = 0; i < 10; ++i) {
//   array_success.push(document.getElementById("success-" + i));
//   array_miss1.push(document.getElementById("miss1-" + i));
//   array_miss2.push(document.getElementById("miss2-" + i));
//   hide.push(document.getElementById("hide-" + i));
//   torf.push(document.getElementById("torf-" + i));
//   seikou3.push(document.getElementById("seikou-" + i));
// };

// console.log(array_success);
// console.log(array_miss1);
// console.log(array_miss2);
// console.log(array_success);
// console.log(array_miss1);
// console.log(array_miss2);
