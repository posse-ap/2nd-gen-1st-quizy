'use strict' ;

//課題　正解の選択肢のidをどう持ってくるのか
const question_list = [
    ['たかなわ','こうわ','たかわ'],
    ['かめいど','かめと','かめど'],
    ['こうじまち','おかとまち','かゆまち'],
    ['おなりもん','おかどもん','ごせいもん'],
    ['とどろき','たたりき','たたら'],
    ['しゃくじい','せきこうい','いじい'],
    ['ぞうしき','ざっしょく','ざっしき'],
    ['おかちまち','みとちょう','ごしろちょう'],
    ['ししぼね','ろっこつ','しこね'],
    ['こぐれ','こしゃく','こばく'],
    
    ];
//問題　question＿idが定義されていない

// let seikai = ['たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'];



const image_box = document.getElementById("image_box");
const loop1 = document.getElementById("loop1");



// question_id：問題番号、1問目の場合は[1]を受け取る
// click_id：回答番号、選択された選択肢の番号を受け取る
// true_id：正解番号、正解の選択肢の番号を受け取る
function check(true_id,click_id,question_id,){

    //クリック無効化
    var answerlists = document.getElementsByName('answerlist_' + question_id);
    answerlists.forEach(answerlist => {
        answerlist.style.pointerEvents = 'none';
    });


    // var button_red = document.getElementById('answerlist_' + question_id + '_' + click_id);
    // var button_blue = document.getElementById('answerlist_' + question_id + '_' + true_id);
    // // selectiontext.classList.add('red');
    // button_blue.classList.add('blue');

    console.log('click_idは' + click_id);
    console.log('questionid は'　+ question_id);

   
    var answerbox = document.getElementById('answerbox_' + question_id);
    console.log('answerbox_は' + answerbox);
    var answertext = document.getElementById('answertext_' + question_id);
    var success1 = document.createTextNode('正解!');
    var false1 = document.createTextNode('不正解!');

    

    //正誤判定
    
    var num = Number(100*true_id + 10*click_id +question_id);

    console.log('num_' + num);
    var key = Math.floor(num / 11);
    console.log('key:' + key);
    const sentakusi = document.getElementById(num);
    // const takanawa = document.getElementById();
    if (key % 10 == 0  ) {
        console.log('正解');
        answertext.appendChild(success1);
        answertext.classList.add('ansT');
        answertext.classList.add('syutugenn');
        sentakusi.classList.add('blue');
    } else {
         console.log('不正解');
         answertext.appendChild(false1);
         answertext.classList.add('ansF');
         answertext.classList.add('syutugenn');
         sentakusi.classList.add('red');
        
    }

    if (true_id == click_id){
        sentakusi.classList.add('blue');
    }

    

   answerbox.style.display = 'block';
}

    

// function check2(question_id){

//     クリック無効化
//     var answerlists = document.getElementsByName('answerlist_' + question_id);
//     answerlists.forEach(answerlist => {
//         answerlist.style.pointerEvents = 'none';
//     });

// }
   


 
// let main_contents;


function createquestion(question_id,each_question,true_id){


    var main_contents = [];

    main_contents += '<div id ="image_box"></div>';
    var img_src = (question_id-1) + ".png";
    var img_tag = '<img src="' + img_src + '">';
    console.log(img_tag);
    main_contents += '<span class="under_line">' + question_id +'.この地名はなんて読む？</span>' + img_tag  +'<ul>';

    each_question.forEach(function(item,index){
        main_contents += ' <li class="button" id ="'+  true_id + (index + 1) + question_id + '" "name="answerlist_' + question_id + '" " onclick="check('+true_id + ',' + (index + 1) + ',' + question_id+')">' + item + '</li>' ;
        
        console.log("ok2");

        // main_contents += '<li id = "answerbox'
        //id = answerlist_1_1_0
        //id = answerlist_2_2_0
    });
    main_contents += '<div id="answerbox_' + question_id + '" class="box"><p id = "answertext_' + question_id +'"></p><br> <p>正解は「' + each_question[true_id - 1] + '」です！</p> </div>';

    document.getElementById('loop1').insertAdjacentHTML('beforeend',main_contents);
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
