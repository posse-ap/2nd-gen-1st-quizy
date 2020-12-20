'use strict'

for (let i = 1; i < 4; i++) {
    
    const addlist = document.createElement('li');
    addlist.id = `answereLi${i}`;
    const addp = document.createElement('p');
    const addp_detail = document.createElement('p');

    document.getElementById(`question${i}`).addEventListener('click', e => {
        if (e.target.id === `correct${i}`) {
            addclass(1);
            answere(1);
            answere_detail();
            changeid();
        } else if (e.target.id === `incorrect${i}-1`) {
            addclass(2);
            answere(2);
            answere_detail();
            changeid();
        } else if (e.target.id === `incorrect${i}-2`) {
            addclass(3);
            answere(3);
            answere_detail();
            changeid();
        } else {
            ;
        }
    });
    
    function changeid() {
        document.getElementById(`correct${i}`).id = `pushed${i}-1`;
        document.getElementById(`incorrect${i}-1`).id = `pushed${i}-2`;
        document.getElementById(`incorrect${i}-2`).id = `pushed${i}-3`;
    }

    function addclass(clicked) {
        if (clicked === 1) {
            document.getElementById(`correct${i}`).classList.add('pushed-correct');
        } else if (clicked === 2) {
            document.getElementById(`correct${i}`).classList.add('pushed-correct');
            document.getElementById(`incorrect${i}-1`).classList.add('pushed-incorrect');
        } else if (clicked === 3) {
            document.getElementById(`correct${i}`).classList.add('pushed-correct');
            document.getElementById(`incorrect${i}-2`).classList.add('pushed-incorrect');
        }
        
    }

    function answere(clicked) {
        if (clicked === 1) {
            addp.textContent = '正解！';
        } else if (clicked === 2) {
            addp.textContent = '不正解！';
        } else if (clicked === 3) {
            addp.textContent = '不正解！';
        }
        document.getElementById(`question${i}`).appendChild(addlist);
        document.getElementById(`answereLi${i}`).appendChild(addp);
    }

    function answere_detail() {
            addp_detail.textContent = `正解は「${answers[i-1]}」です！`
            document.getElementById(`answereLi${i}`).appendChild(addp_detail);
        }
    
    const answers = ['たかなわ', 'かめいど', 'こうじまち']
}  