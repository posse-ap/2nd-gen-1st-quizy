'use strict' ;


var question_list = new Array();
question_list.push(['たかなわ','こうわ','たかわ']);
question_list.push(['かめいど','かめと','かめど']);
question_list.push(['こうじまち','おかとまち','かゆまち']);
question_list.push(['おなりもん','おかどもん','ごせいもん']);
question_list.push(['とどろき','たたりき','たたら']);
question_list.push(['しゃくじい','せきこうい','いじい']);
question_list.push(['ぞうしき','ざっしょく','ざっしき']);
question_list.push(['おかちまち','みとちょう','ごしろちょう']);
question_list.push(['ししぼね','ろっこつ','しこね']);
question_list.push(['こぐれ','こしゃく','こばく']);
    

// let seikai = ['たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'];


const image_box = document.getElementById("image_box");
const loop1 = document.getElementById("loop1");


// question_id：問題番号、1問目の場合は[1]を受け取る
// click_id：回答番号、選択された選択肢の番号を受け取る
// true_id：正解番号、正解の選択肢の番号を受け取る
function click(click_id,question_id,true_id,each_question){

    //クリック無効化
    var answerlists = document.getElementsByName('answerlist_' + question_id);
    answerlists.forEach(answerlist => {
        answerlist.style.pointerEvents = 'none';
    });

    console.log('click_idは' + click_id);
    //111
    //121
    //131


    //211
    //221
    //231
   
   const success1 = document.createTextNode("正解!");
   const false1 = document.createTextNode("不正解！");
   var target = document.getElementById(target);
   var TorF = document.getElementById('TorF_' + question_id);

   var num = Number(click_id);
   console.log('num' + num);
   var key = Math.floor(num / 11);
   console.log('key:' + key);
   if (key % 10 == 0  ) {
       console.log('正解');
       TorF.innerText('正解！');
   } else {
        console.log('不正解');
        TorF.innerText('不正解！');
   }

}
   


 
let main_contents;


function createquestion(question_id,each_question,true_id){


    main_contents += '<div id ="image_box"></div>';
    var img_src = (question_id-1) + ".png";
    var img_tag = '<img src="' + img_src + '">';
    console.log(img_tag);
    main_contents += '<span class="under_line">' + question_id +'.この地名はなんて読む？</span>' + img_tag  +'<ul>';

    each_question.forEach(function(item,index){
        main_contents += ' <li class="button" id ="'+  true_id + (index + 1) + question_id + '" " onclick="click(this.id)">' + item + '</li>' ;
        
        console.log("ok2");

        
    });
    main_contents += '<div id = "target"><p id = "TorF_ ' + question_id +'"> </p><p id ="true_is" ></p></div>';
}



    
function createhtml(){
    question_list.forEach(function(question,index){


        const answer = question[0];

        console.log('1'+ question);

        const shuffle = ([...array]) => {
            for(let i = array.length - 1; i>0;i--){
                const j = Math.floor(Math.random() * (i+1));
                [array[j],array[i]] = [array[i],array[j]];

            }
        return array
        }

        var after_shuffle = shuffle(question);

        console.log(after_shuffle);

        // console.log('2' + question);
        
            createquestion(index+1,after_shuffle,after_shuffle.indexOf(answer) + 1);
            //index+1 = question_id
            //indexOfはanswerの場所を探すため
        })


}




window.load = createhtml();
loop1.innerHTML += main_contents;