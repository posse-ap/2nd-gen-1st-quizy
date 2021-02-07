'use strict' ;

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


// let seikai = ['たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'];


const image_box = document.getElementById("image_box");
const loop1 = document.getElementById("loop1");


function createquestion(question_id,each_question,true_id){

    var main_contents = [];

    main_contents += '<div id ="image_box"></div>';
    var img_src = (question_id-1) + ".png";
    var img_tag = '<img src="' + img_src + '">';
    console.log(img_tag);
    main_contents += '<span class="under_line">' + question_id +'.この地名はなんて読む？</span>' + img_tag  +'<ul>';

    each_question.forEach(function(item,index){
        main_contents += ' <li class="button" id ="answerlist_' + question_id + '_' + (index + 1) +'"name="answerlist_' + question_id + '" onclick="check('+ question_id + ', ' + (index + 1) + ', ' + true_id +')">' + item + '</li>' ;
        
        console.log("ok2");

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

function check(question_id,click_id,true_id){

    //クリック無効化
    var answerlists = document.getElementsByName('answerlist_' + question_id);
    answerlists.forEach(answerlist => {
        answerlist.style.pointerEvents = 'none';
    });

   

    var button_red = document.getElementById('answerlist_' + question_id + '_' + click_id);
    var button_blue = document.getElementById('answerlist_' + question_id + '_' + true_id);
    // selectiontext.classList.add('red');
    button_blue.classList.add('blue');
 

    var success1 = document.createTextNode('正解!');
    var false1 = document.createTextNode('不正解!');
    var answerbox = document.getElementById('answerbox_' + question_id);
    var answertext = document.getElementById('answertext_' + question_id);
    // var num = Number(click_id);
    // console.log('num' + num);
    // var key = Math.floor(num / 11);
    // console.log('key:' + key);

    if (click_id == true_id) {
        console.log('正解');
        // answertext.classList.add('blue');
        answertext.appendChild(success1);
        answertext.classList.add('ansT');
        answertext.classList.add('syutugenn')
    } else {
         console.log('不正解');
         button_red.classList.add('red');
         answertext.classList.add('ansF');
        //  answertext.classList.add('red');
         answertext.appendChild(false1);
         answertext.classList.add('syutugenn')
    }
   answerbox.style.display = 'block';
}




window.load = createhtml();
// loop1.innerHTML += main_contents;
