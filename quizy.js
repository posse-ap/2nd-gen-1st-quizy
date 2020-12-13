const miss1_1 = document.getElementById('miss1_1') ;
const miss1_2 = document.getElementById('miss1_2') ;
const seikai1_1 = document.getElementById('seikai1_1') ;

miss1_1.onclick = function(){
    // miss1_1.class ;
    seikai1_1.classList.add("seikai") ;
    miss1_1.classList.add("miss") ;
    //押されたら不正解のdivを表示する
    const answer = document.getElementById("wrong_answer");
    answer.style.display ="block";
    // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
    miss1_1.classList.add("cantclick") ;
    miss1_2.classList.add("cantclick") ;
    seikai1_1.classList.add("cantclick") ;
    //&でつなげない

}
miss1_2.onclick = function(){
    seikai1_1.classList.add("seikai") ;
    miss1_2.classList.add("miss") ;
    const answer = document.getElementById("wrong_answer");
    answer.style.display ="block";
    // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
    miss1_1.classList.add("cantclick") ;
    miss1_2.classList.add("cantclick") ;
    seikai1_1.classList.add("cantclick") ;
}
seikai1_1.onclick = function(){
    seikai1_1.classList.add("seikai") ;
    const answer = document.getElementById("answer");
    answer.style.display ="block";
    // (seikai1_1 && miss1_1 && miss1_2).classList.add("cantclick") ;
    miss1_1.classList.add("cantclick") ;
    miss1_2.classList.add("cantclick") ;
    seikai1_1.classList.add("cantclick") ;
}

//TODO:tmlをjsに書き込む
