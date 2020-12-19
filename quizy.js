const wrong1 = document.getElementById('wrong1');
const wrong2 = document.getElementById('wrong2');
const right1 = document.getElementById('right1');
const torf = document.getElementById ('torf');
const true1 = document.getElementById ('true1');
const success1 = document.createTextNode ("正解！") ;
const fail1 = document.createTextNode ("不正解！") ;
const sentence = document.createTextNode ("正解は「たかなわ」です！")
const comentbox = document.getElementById('comentbox');

wrong1.onclick = function() {
    wrong1.classList.add ('red');
    right1.classList.add ('blue');
    torf.appendChild (fail1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
    torf.classList.add ('red1');
    wrong1.classList.add ('cantclick');
    wrong2.classList.add ('cantclick');
    right1.classList.add ('cantclick');
}
wrong2.onclick = function() {
    wrong2.classList.add ('red');
    right1.classList.add ('blue');
    torf.appendChild (fail1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
    torf.classList.add ('red1');
    wrong1.classList.add ('cantclick');
    wrong2.classList.add ('cantclick');
    right1.classList.add ('cantclick');
}
right1.onclick = function() {
    right1.classList.add ('blue');
    torf.appendChild (success1);
    true1.appendChild (sentence);
    comentbox.classList.add ('comentbox');
    torf.classList.add ('blue1');
    wrong1.classList.add ('cantclick');
    wrong2.classList.add ('cantclick');
    right1.classList.add ('cantclick');
}

for (let i = 0; i < array.length; i++) {
     if(`$array[i]`)
}