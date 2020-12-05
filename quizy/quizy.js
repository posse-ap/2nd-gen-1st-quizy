const machigai1 = document.getElementById('machigai1');
const machigai2 = document.getElementById('machigai2');
const seikai = document.getElementById('seikai');

const torf = document.getElementById('torf');
const kekka1 = document.getElementById('kekka1');
const kekka2 = document.getElementById('kekka2');

const text1 = document.createTextNode('正解！');
const text2 = document.createTextNode('不正解！');


machigai1.onclick = function() {
    machigai1.classList.add('red');
    seikai.classList.add('blue');
    kekka1.appendChild(text2);
    torf.classList.add('torfHyouji');
    kekka1.classList.add('aaa');
    machigai1.classList.add('cantclick');
    machigai2.classList.add('cantclick');
    seikai.classList.add('cantclick');
    
}

machigai2.onclick = function() {
    machigai2.classList.add('red');
    seikai.classList.add('blue');
    kekka1.appendChild(text2);
    torf.classList.add('torfHyouji');
    kekka1.classList.add('aaa');
    machigai1.classList.add('cantclick');
    machigai2.classList.add('cantclick');
    seikai.classList.add('cantclick');
    
}

seikai.onclick = function() {
    seikai.classList.add('red');
    seikai.classList.add('blue');
    kekka1.appendChild(text1);
    torf.classList.add('torfHyouji');
    kekka1.classList.add('bbb');
    machigai1.classList.add('cantclick');
    machigai2.classList.add('cantclick');
    seikai.classList.add('cantclick');
    
}