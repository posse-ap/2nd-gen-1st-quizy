const miss1_1 = document.getElementById('miss1_1') ;
const miss1_2 = document.getElementById('miss1_2') ;
const seikai1_1 = document.getElementById('seikai1_1') ;

const choice = [
    ['たかわ','こうわ','たかなわ'],
    ['かめいど','かめと','かめいど'],
    ['おかとまち','こうじまち','かゆまち'],
    ['おなりもん','おかどもん','ごせいもん'],
    ['たたりき','とどろき','たたら'],
    ['せきこうい','しゃくじい','いじい'],
    ['ざっしょく','ぞうしき','ざっしき'],
    ['ごしろちょう','みとちょう','おかちまち'],
    ['ろっこつ','しこね','ししぼね'],
    ['こしゃく','こぐれ','こばく'],
];

for(let i = 0;i<10;i++){


let h =
'<div class = "contenainer">'
        +'<div>'
            +`<h3 class="monndai">${i+1}.この地名はなんて読む？</h3> `
            // <!-- TODO:名前直す h2にする -->
        
            
            +'<div class="img">'
                +`<img src = '../quizy/img/${i+1}.png' alt="高輪の写真">` 
            +'</div>'
            
            +'<ul>'

               +`<li id = "miss1_1" class = list>choice${[i][0]}</li>`
               +`<li id ="miss1_2" class = list>choice${[i][1]}</li>`
               +`<li id ="seikai1_1" class = list>choice${[i][2]}</li>`
                
            +'</ul>'
            
            +'<div id ="answer" class = "answer">'
               +' <div class = "correct_show">正解！</div>'
               +' <p  class = "answer_show">正解は「たかなわ」です!</p>'
            +'</div>'

            +'<div id ="wrong_answer" class = "wrong_answer">'
               +' <div class = "wrong git@github.com:takanashiayane/2nd-gen-1st-quizy.git_show">不正解！</div>'
               + '<p class = "answer_show">正解は「たかなわ」です!</p>'
            +'</div>'
        +'</div>'
    +'</div>';
        
        document.write(h);
}


console.log(choice[1][1]);



// miss1_1.onclick = function(){
//     // miss1_1.class ;
//     seikai1_1.classList.add("seikai") ;
//     miss1_1.classList.add("miss") ;
//     //押されたら不正解のdivを表示する
//     const answer = document.getElementById("wrong_answer");
//     answer.style.display ="block";
//     // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
//     miss1_1.classList.add("cantclick") ;
//     miss1_2.classList.add("cantclick") ;
//     seikai1_1.classList.add("cantclick") ;
//     //&でつなげない

// }
// miss1_2.onclick = function(){
//     seikai1_1.classList.add("seikai") ;
//     miss1_2.classList.add("miss") ;
//     const answer = document.getElementById("wrong_answer");
//     answer.style.display ="block";
//     // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
//     miss1_1.classList.add("cantclick") ;
//     miss1_2.classList.add("cantclick") ;
//     seikai1_1.classList.add("cantclick") ;
// }
// seikai1_1.onclick = function(){
//     seikai1_1.classList.add("seikai") ;
//     const answer = document.getElementById("answer");
//     answer.style.display ="block";
//     // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
//     miss1_1.classList.add("cantclick") ;
//     miss1_2.classList.add("cantclick") ;
//     seikai1_1.classList.add("cantclick") ;
// }

// //TODO:tmlをjsに書き込む
