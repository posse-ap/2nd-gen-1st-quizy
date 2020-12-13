'use strict';

const takawa = document.getElementById('wrong1');
const kouwa = document.getElementById('wrong2');
const takanawa = document.getElementById('success');
// const reveal1 = document.getElementById('answer1');

const answer1 =document.getElementById('hidden_answer1_success');
// const wronganswer1 =document.getElementById('hidden_answer1_wrong');

const seikai = document.getElementById('seikai');
const seikaiexp = document.getElementById('seikaiexp');
// const fuseikai = document.getElementById('fuseikai');

const seikaiword = document.createTextNode("正解！");
const fuseikaiword = document.createTextNode("不正解！");
const fuseikaiexp = document.createTextNode("正解は「たかなわ」です！");



takawa.onclick = function() {
    takawa.classList.add('red');
    takanawa.classList.add('blue');
    seikai.appendChild(fuseikaiword);
    seikaiexp.appendChild(fuseikaiexp);
    answer1.classList.add('hidden_answer1_success');
    seikai.classList.add ('redbar');
    kouwa.classList.add('cantclick');
    takanawa.classList.add('cantclick');
    takawa.classList.add('cantclick');
    // fuseikai.classList.add('redbar');
    // wronganswer1.style.display = 'block';
    // wronganswer1.classList.add('show');

};

kouwa.onclick = function(){
    kouwa.classList.add('red');
    takanawa.classList.add('blue');
    seikai.appendChild(fuseikaiword);
    seikaiexp.appendChild(fuseikaiexp);
    answer1.classList.add('hidden_answer1_success');
    seikai.classList.add ('redbar');
    kouwa.classList.add('cantclick');
    takanawa.classList.add('cantclick');
    takawa.classList.add('cantclick');
    // wronganswer1.style.display = 'block';
    // fuseikai.classList.add('redbar');
};

takanawa.onclick = function(){
    takanawa.classList.add('blue');
    seikai.appendChild(seikaiword);
    seikaiexp.appendChild(fuseikaiexp);
    answer1.classList.add('hidden_answer1_success');
    seikai.classList.add('bluebar');
    kouwa.classList.add('cantclick');
    takanawa.classList.add('cantclick');
    takawa.classList.add('cantclick');
    // rightanswer1.style.display = 'block';
    // seikai.classList.add('bluebar');
};


/*to-do  li要素をid 作る
get elementbyid
    =ファンクション作る
        ファンクション一つ一つで行われる物を作る　＝.classlist.addでcssのクラスを追加する
 liクリックしてcssで変形するモーションを作る(class)
    =クリックしたらアクセスすするid作る
        そのid
classが発動する */