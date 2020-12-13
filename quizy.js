'use strict'

const addlist = document.createElement('li');



for (let i = 1; i < 4; i++) {
    document.getElementById(`question${i}`).addEventListener('click', e => {
        if (e.target.id === `correct${i}`) {
            changeid();
            answere(1);
        } else if (e.target.id === `incorrect${i}-1`) {
            changeid();
            answere(2);
        } else if (e.target.id === `incorrect${i}-2`) {
            changeid();
            answere(3);
        } else {
            ;
        }
    });
    
    function changeid() {
        document.getElementById(`correct${i}`).id = `pushed${i}-1`;
        document.getElementById(`incorrect${i}-1`).id = `pushed${i}-2`;
        document.getElementById(`incorrect${i}-2`).id = `pushed${i}-3`;
    }

    function answere(clicked) {
        if (clicked === 1) {
            addlist.textContent = '正解！';
        } else if (clicked === 2) {
            addlist.textContent = '不正解！';
        } else if (clicked === 3) {
            addlist.textContent = '不正解！';
        }
        document.getElementById(`question${i}`).appendChild(addlist);
    }
}  