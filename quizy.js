// const miss1_1 = document.getElementById('miss1_1') ;
// const miss1_2 = document.getElementById('miss1_2') ;
// const seikai1_1 = document.getElementById('seikai1_1') ;

const choice = [
    ['たかわ','こうわ','たかなわ'],
    ['かめど','かめと','かめいど'],
    ['おかとまち','かゆまち','こうじまち'],
    [,'おかどもん','ごせいもん','おなりもん'],
    ['たたりき','たたら','とどろき'],
    ['せきこうい','いじい','しゃくじい'],
    ['ざっしょく','ざっしき','ぞうしき'],
    ['ごしろちょう','みとちょう','おかちまち'],
    ['ろっこつ','しこね','ししぼね'],
    ['こしゃく','こばく','こぐれ'],
];

const correct_choice = ['たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'];

// seikai1_1.onclick = function(){
//     seikai1_1.classList.add("seikai") ;
//     const answer = document.getElementById("answer");
//     answer.style.display ="block";
//     // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
//     miss1_1.classList.add("cantclick") ;
//     miss1_2.classList.add("cantclick") ;
//     seikai1_1.classList.add("cantclick") ;
// }

for(let i = 0;i<10;i++){


let h =
'<div class = "contenainer">'
        +'<div>'
            +`<h2 class="monndai">${i+1}.この地名はなんて読む？</h2> `
        
            
            +'<div class="img">'
                +`<img src = '../quizy/img/${i+1}.png' alt="写真">` 
            +'</div>'
            
            +'<ul>'

               +`<li id ="miss${i+1}_1" class = "list" onclick="check(${i+1},1,3)">${choice[i][0]}</li>`
               +`<li id ="miss${i+1}_2" class = "list" onclick="check(${i+1},2,3)">${choice[i][1]}</li>`
               +`<li id ="miss${i+1}_3" class = "list" onclick="check(${i+1},3,3)">${choice[i][2]}</li>`
                
            +'</ul>'
            
            +'<div id ="answer" class = "answer">'
               +' <div class = "correct_show">正解！</div>'
               +` <p  class = "answer_show">正解は「${correct_choice[i]}」です!</p>`
            +'</div>'

            +'<div id ="wrong_answer" class = "wrong_answer">'
               +' <div class = "wrong_show">不正解！</div>'
               +` <p  class = "answer_show">正解は「${correct_choice[i]}」です!</p>`
            +'</div>'
        +'</div>'
    +'</div>';
        
        document.write(h);
}


function check(question_number,number,place){
    let first = document.getElementById('miss' + question_number + '_1');
    let second = document.getElementById('miss' + question_number + '_' + number);
    let correct_choice = document.getElementById('miss' +question_number + '_'+ place);
    // first.classList.add("seikai");
    // second.classList.add("miss");
    correct_choice.classList.add("seikai");
    
    if(number == place) {
        const answer = document.getElementById('answer');
        answer.style.display ="block";
    }
    else{
        second.classList.add("miss");
        const answer = document.getElementById('wrong_answer');
        answer.style.display = "block";
        
    }
    miss.classList.add("cantclick") ;
    correct_choice.classList.add("cantclick")


    


}



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
