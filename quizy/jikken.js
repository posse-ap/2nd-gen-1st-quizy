let sentakusi = new Array();
    sentakusi.push(["たかなわ", "こうわ", "たかわ"]);
    sentakusi.push(["かめいど", "かめと", "かめど"]);
    sentakusi.push(["こうじまち", "おかとまち", "かゆまち"]);
    sentakusi.push(["おなりもん", "おかどもん", "ごせいもん"]);
    sentakusi.push(["とどろき", "たたら", "たたりき"]);
    sentakusi.push(["しゃくじい", "せきこうい", "いじい"]);
    sentakusi.push(["ぞうしき", "ざっしき", "ざっしょく"]);
    sentakusi.push(["おかちまち", "みとちょう", "ごしろちょう"]);
    sentakusi.push(["ししぼね", "しこね", "ろっこつ"]);
    sentakusi.push(["こぐれ", "こばく", "こしゃく"]);

    console.log(sentakusi[1][0]);

//   var shuffledarray = [];
sentakusi.forEach (function(sentakusi,item){
answer = sentakusi[0];
let r;
let temp;
for(let i = sentakusi.length - 1; i >= 0; i--){
  r = Math.floor(Math.random()*( i + 1));
  temp = sentakusi[i];
  sentakusi[i] = sentakusi[r];
  sentakusi[r] = temp;
};
// console.log('question.indexOf(answer):' + sentakusi.indexOf(answer));

makingquestion(item+1,sentakusi,sentakusi.indexOf(answer)+1);
});

function makingquestion(question_number,s_list,correct_number){
var contents ='<div class="center">'
+ '<div class="box">'
+ '<h1 class="mondai">'
+ `${i + 1}.この地名はなんて読む？`
+ '</h1>'
+ `<img src='./クイジー写真/${i}.png' alt="高輪">`
+ '<div class="btn">';

s_list.forEach(sentakusi,item){
    contents +=
}

};


console.log('question.indexOf(answer):' + sentakusi.indexOf(answer));

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
      + `<li  id="s${i}-1-${sentakusi[i][0]}"onclick="judge(${i},1,${sentakusi[i][0]})">${sentakusi[i][0]}</li>`
      + `<li  id="s${i}-2-${sentakusi[i][1]}"onclick="judge(${i},2,${sentakusi[i][1]})">${sentakusi[i][1]}</li>`
      + `<li  id="s${i}-3-${sentakusi[i][2]}"onclick="judge(${i},3,${sentakusi[i][2]})">${sentakusi[i][2]}</li>`
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

  