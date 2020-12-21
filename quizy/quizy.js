// 選択肢
const sentakushi = [["たかなわ", "こうわ", "たかわ"],
["かめいど", "かめと", "かめど"],
["こうじまち", "かゆまち", "おかとまち"],
["おなりもん","おかどもん","ごせいもん"],
["とどろき", "たたら", "たたろき"],
["しゃくじい", "せきこうい", "いじい"],
["ぞうしき", "ざっしき", "ざっしょく"],
["おかちまち", "みとちょう", "ごしろちょう"],
["ししぼね", "ろっこつ", "しこね"],
["こぐれ", "こばく", "こしゃく"]]

// それぞれの問題表示
for (let i = 0; i < 10; i++){
    let x = 
    '<div class="quiz">' +
    `<h3><span class="chimei">${i + 1}.この地名はなんて読む？</span></h3>` +
    `<img src="./image/${i}.png">` +
    '<ul>';
    
    for (let j = 0; j < 3; j++){
        x += `<li class="list" id="${i}_${j}_${0}" onclick="judge(${i},${j},${0})">${sentakushi[i][j]}</li>`;
    }
    
    x +=
    '</ul>' +
    `<div class="torf" id="torf${i}">` +
    `<p id="result${i}"></p>` +
    `<p id="resultText${i}">正解は「` + sentakushi[i][0] + '」です！</p>' +
    '</div>' +
    '</div>';
    
    document.write(x);
}

// resultTextへ挿入
    const correct = document.createTextNode('正解！');
    const miss = document.createTextNode('不正解！');

// 正誤判定
function judge(parts, questions, ans) {
    
    document.getElementById(`torf${parts}`).classList.add('torfHyouji');

    document.getElementById(`${parts}_${ans}_${ans}`).classList.add('blue');
    if (questions == ans){
        document.getElementById(`result${parts}`).appendChild(correct);
        document.getElementById(`result${parts}`).classList.add('bbb');
        
    } else {
        document.getElementById(`${parts}_${questions}_${ans}`).classList.add('red');
        document.getElementById(`result${parts}`).appendChild(miss);
        document.getElementById(`result${parts}`).classList.add('aaa');
    }
    
    document.getElementById(`${parts}_${0}_${ans}`).classList.add('cantclick');
    document.getElementById(`${parts}_${1}_${ans}`).classList.add('cantclick');
    document.getElementById(`${parts}_${2}_${ans}`).classList.add('cantclick');
    
    
};




// const machigai1 = document.getElementById('machigai1');
// const machigai2 = document.getElementById('machigai2');
// const seikai = document.getElementById('seikai');

// const torf = document.getElementById('torf');
// const result = document.getElementById('result');
// const  = document.getElementById('kekka2');




// machigai1.onclick = function() {
    //     machigai1.classList.add('red');
    //     seikai.classList.add('blue');
    //     kekka1.appendChild(text2);
    //     torf.classList.add('torfHyouji');
    //     kekka1.classList.add('aaa');
    //     machigai1.classList.add('cantclick');
    //     machigai2.classList.add('cantclick');
    //     seikai.classList.add('cantclick');
    
    // }
    
    // machigai2.onclick = function() {
        //     machigai2.classList.add('red');
        //     seikai.classList.add('blue');
        //     kekka1.appendChild(text2);
        //     torf.classList.add('torfHyouji');
        //     kekka1.classList.add('aaa');
        //     machigai1.classList.add('cantclick');
        //     machigai2.classList.add('cantclick');
        //     seikai.classList.add('cantclick');
        
        // }
        
        // seikai.onclick = function() {
            //     seikai.classList.add('red');
            //     seikai.classList.add('blue');
            //     kekka1.appendChild(text1);
            //     torf.classList.add('torfHyouji');
            //     kekka1.classList.add('bbb');
            //     machigai1.classList.add('cantclick');
            //     machigai2.classList.add('cantclick');
            //     seikai.classList.add('cantclick');
            //     }
            
            // array[['aaa','iii','uuu'],['bbb','ccc','ddd']]
            
            
            // array[1][2]="ddd"