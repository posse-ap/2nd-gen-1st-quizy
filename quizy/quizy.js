const machigai1 = document.getElementById('machigai1');
const seikai = document.getElementById('seikai');
const machigai2 = document.getElementById('machigai2');
const fontt = document.getElementById('fontt');
const fontw = document.getElementById('fontw');
const success = document.createTextNode('正解！');
const wrong = document.createTextNode('不正解！');
const sentence = document.createTextNode('正解は「たかなわ」です！');
const box = document.getElementById('box');
const kekka = document.getElementById('kekka');


machigai1.onclick = function() {
    machigai1.classList.add ('red');
    seikai.classList.add ('blue');
    box.classList.add ('box');
    fontw.appendChild (wrong);
    //fontw.classList.add ('fontw');
    kekka.appendChild (sentence);
}

machigai2.onclick = function() {
    machigai2.classList.add ('red');
    seikai.classList.add ('blue');
    box.classList.add ('box');
    fontw.appendChild (wrong);
    //fontw.classList.add ('fontw');
    kekka.appendChild (sentence);
}

seikai.onclick = function() {
    seikai.classList.add ('blue');
    box.classList.add ('box');
    fontt.appendChild (success);
    //fontt.classList.add ('fontt')
    kekka.appendChild (sentence);
}

