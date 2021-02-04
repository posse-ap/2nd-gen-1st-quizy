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

    

//   var shuffledarray = [];
sentakusi.forEach (function(sentakusi,item){
    answer = sentakusi[0];
    miss1 = sentakusi[1];
    miss2 = sentakusi[2];
    
let r;
let temp;
for(let i = sentakusi.length - 1; i >= 0; i--){
  r = Math.floor(Math.random()*( i + 1));
  temp = sentakusi[i];
  sentakusi[i] = sentakusi[r];
  sentakusi[r] = temp;
};
console.log('question.indexOf(answer):' + sentakusi.indexOf(answer));

makingquestion(item+1,sentakusi,sentakusi.indexOf(answer)+1,sentakusi.indexOf(miss1)+1,sentakusi.indexOf(miss2)+1);
});

function makingquestion(question_number,s_list,correct_number,miss1_number,miss2_number){
var contents ='<div class="center">'
+ '<div class="box">'
+ '<h1 class="mondai">'
+ question_number+'. この地名はなんて読む？'
+ '</h1>'
+ '<img src="./クイジー写真/'+(question_number-1) +'.png "alt="写真" >'
+ '<div class="btn">';

s_list.forEach(function display(sentakusi,item){
    contents +='        <p class="gyou"><li id="answerlist_' + question_number + '_' + (item + 1) +'"class="uls'
    + '"onclick="check(' + question_number  + ', ' +(item+1) +','+ correct_number + ', ' + miss1_number + ', '+ miss2_number + ')" >' + sentakusi + '</li></p>';

    
});
 contents += '<p>'+'</p>'+
    '<div id="hide-'+question_number+'">'
    + '<div id="torf-'+question_number+'">'
    + '</div>'
    + '<div id="seikou-'+question_number+'">'   
    + '</div>'
    + '</div>'
document.getElementById('question').insertAdjacentHTML('beforeend', contents);
};


function check(question,pushnumber,correctnumber,false1_number,false2_number){
    var correct =document.getElementById('answerlist_'+question+'_'+correctnumber);
    var incorrect =document.getElementById('answerlist_'+question+'_'+pushnumber);
    var missing1 =document.getElementById('answerlist_' +question +'_'+false1_number);
    var missing2 =document.getElementById('answerlist_' +question +'_'+false2_number);
    var hide =document.getElementById('hide-'+question);
    var torf =document.getElementById('torf-'+question);
    var seikou3 =document.getElementById('seikou-'+question);
    var seikou2 =document.createTextNode('正解は「'+sentakusi[question-1][correctnumber-1]+'」です!');
    var seikou =document.createTextNode('正解!');
    var sippai =document.createTextNode('不正解!');

    correct.classList.add("blue","cantclick");
    incorrect.classList.add("red");
    missing1.classList.add("cantclick");
    missing2.classList.add("cantclick");

    if(correctnumber==pushnumber){
        torf.appendChild(seikou);
        torf.classList.add('yes');
    }else{
        torf.appendChild(sippai);
        torf.classList.add('tigai');
    }
    
    seikou3.appendChild(seikou2);
    seikou3.classList.add('fonto');
    hide.classList.add("hako");
    
};

// console.log('question.indexOf(answer):' + sentakusi.indexOf(answer));

// for (let i = 0; i < 10; i++) {
//     const h =
//       '<div class="center">'
//       + '<div class="box">'
//       + '<h1 class="mondai">'
//       + `${i + 1}.この地名はなんて読む？`
//       + '</h1>'
//       + `<img src='./クイジー写真/${i}.png' alt="高輪">`
//       + '<div class="btn">'
//       + '<ul>'
//       + `<li  id="s${i}-1-${sentakusi[i][0]}"onclick="judge(${i},1,${sentakusi[i][0]})">${sentakusi[i][0]}</li>`
//       + `<li  id="s${i}-2-${sentakusi[i][1]}"onclick="judge(${i},2,${sentakusi[i][1]})">${sentakusi[i][1]}</li>`
//       + `<li  id="s${i}-3-${sentakusi[i][2]}"onclick="judge(${i},3,${sentakusi[i][2]})">${sentakusi[i][2]}</li>`
//       + `<div id="hide-${i}">`
//       + `<p id="torf-${i}">`
//       + '</p>'
//       + `<p id="seikou-${i}>`
//       + '</p>'
//       + '</div>'
//       + '</div>'
//       + '</div>'
//       + '</div>'
  
//     document.write(h);
//   };

  