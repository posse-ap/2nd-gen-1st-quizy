'use strict'

for (let i = 1; i < 4; i++) {
    
    const places = [
        ['たかなわ', 'たかわ', 'こうわ'],
        ['かめいど', 'かめと', 'かめど'],
        ['こうじまち', 'おかとまち', 'かゆまち']
    ];

    const pictures = [
        'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
        'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
        'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
    ];
    
    const addp = document.createElement('p');
    const addp_detail = document.createElement('p');
    addp_detail.classList.add('answerP_detail');
    const addlist = document.createElement('li');
    addlist.id = `answerLi${i}`;
    addlist.classList.add('answerLi');

    const addsection = document.createElement('section');
    addsection.id = `quiz${i}`;
    addsection.classList.add('quiz', 'box-container');
    document.getElementById(`quiz-title`).appendChild(addsection);

    const addh2 = document.createElement('h2');
    addh2.id = `heading${i}`;
    addh2.textContent = `${i}. この地名はなんて読む？`;
    document.getElementById(`quiz${i}`).appendChild(addh2);

    const addimg = document.createElement('img');
    addimg.src = pictures[i - 1];
    addimg.alt = `問題${i}の画像`;
    addimg.id = `picture${i}`;
    document.getElementById(`quiz${i}`).appendChild(addimg);

    const addul = document.createElement('ul');
    addul.id = `question${i}`;
    document.getElementById(`quiz${i}`).appendChild(addul);

    const addli1 = document.createElement('li');
    addli1.id = `correct${i}`;
    addli1.textContent = places[i - 1][0];
    document.getElementById(`question${i}`).appendChild(addli1);

    const addli2 = document.createElement('li');
    addli2.id = `incorrect${i}-1`;
    addli2.textContent = places[i - 1][1];
    document.getElementById(`question${i}`).appendChild(addli2);

    const addli3 = document.createElement('li');
    addli3.id = `incorrect${i}-2`;
    addli3.textContent = places[i - 1][2];
    document.getElementById(`question${i}`).appendChild(addli3);
    
    document.getElementById(`question${i}`).addEventListener('click', e => {
        if (e.target.id === `correct${i}`) {
            addclass(1, i);
            answer(1);
            changeid(i);
        } else if (e.target.id === `incorrect${i}-1`) {
            addclass(2 ,i);
            answer(2);
            changeid(i);
        } else if (e.target.id === `incorrect${i}-2`) {
            addclass(3, i);
            answer(3);
            changeid(i);
        } else {
            ;
        }
        document.getElementById(`question${i}`).appendChild(addlist);
        document.getElementById(`answerLi${i}`).appendChild(addp);
        answer_detail();
    });
    
    function answer(clicked) {
        if (clicked === 1) {
            addp.textContent = '正解！';
            addp.classList.add('answerP_correct');
        } else if (clicked === 2) {
            addp.textContent = '不正解！';
            addp.classList.add('answerP_incorrect');
        } else if (clicked === 3) {
            addp.textContent = '不正解！';
            addp.classList.add('answerP_incorrect');
        }
    }
    
    function answer_detail() {
        addp_detail.textContent = `正解は「${answers[i - 1]}」です！`
        document.getElementById(`answerLi${i}`).appendChild(addp_detail);
    }
    
    const answers = ['たかなわ', 'かめいど', 'こうじまち']

} 

function changeid(i) {
    document.getElementById(`correct${i}`).id = `pushed${i}-1`;
    document.getElementById(`incorrect${i}-1`).id = `pushed${i}-2`;
    document.getElementById(`incorrect${i}-2`).id = `pushed${i}-3`;
}

function addclass(clicked, i) {
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