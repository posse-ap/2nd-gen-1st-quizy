'use strict' ;

// const btn1 = document.getElementById('button1');
// const btn2 = document.getElementById('button2');
// const btn3 = document.getElementById('button3');
const TorF = document.getElementById('TorF');
const true_is = document.getElementById('true_is');
const success1 = document.createTextNode("正解!");
const false1 = document.createTextNode("不正解！");
const success2 = document.createTextNode("正解は『たかなわ』です！");
const target = document.getElementById('target');
const image_box = document.getElementById("image_box");
const loop1 = document.getElementById("loop1");
// // const click_space = document.getElementById("click_space");
// // var img = document.getElementById('image_place');

// btn1.onclick = () => { 
//     btn1.classList.add("red");
//     btn2.classList.add("blue");
//     TorF.appendChild(false1);
//     true_is.appendChild(success2);
//     target.classList.add("box");
//     TorF.classList.add("ansF");
//     button1.classList.add("finish");
//     button2.classList.add("finish");
//     button3.classList.add("finish");
// };

// btn2.onclick = () => {
//     btn2.classList.add("blue");
//     TorF.appendChild(success1);
//     true_is.appendChild(success2);
//     target.classList.add("box");
//     TorF.classList.add("ansT");
//     button1.classList.add("finish");
//     button2.classList.add("finish");
//     button3.classList.add("finish");
// };

// btn3.onclick = () => {
//     btn2.classList.add("blue");
//     btn3.classList.add("red");
//     TorF.appendChild(false1);
//     true_is.appendChild(success2);
//     target.classList.add("box");
//     TorF.classList.add("ansF");
//     button1.classList.add("finish");
//     button2.classList.add("finish");
//     button3.classList.add("finish");
// };

const answer_choices =[
     ['たかわ','たかなわ','こうわ'],
     ['かめいど','かめと','かめど'],
     ['おかちまち','こうじまち','かゆまち'],
     ['j','k','l'],
     ['m','n','o'],
     ['p','q','r'],
     ['s','t','u'],
     ['v','w','x'],
     ['y','z','A'],
     ['B','C','D'],

];
// ]).map(shuffle);


let main_contents;


for( var i= 0;i<10;i++){
    // kokodayo.innerHTML='<span class="under_line">1.この地名はなんて読む？</span>';
    var img_src = i + ".png";
    var img_tag = '<img src="' + img_src + '">';
    console.log(img_tag);
    image_box.innerHTML=img_tag;
    
    main_contents += '<span class="under_line">' + [i+1] +'.この地名はなんて読む？</span>' + img_tag  +'<ul>';
    
    for (var j=0;j<3;j++){
        // var id_name = `button${j+1}`;
        // var id_NAME = '<id ="' + id_name +'">';
        // console.log(id_NAME)
        main_contents += `<li class="button" id ="button${i*3+j+1}" >` + answer_choices[i][j] + '</li>' ;
    };
    
      main_contents += '</ul>';
      loop1.innerHTML = main_contents;

    let btn1 = document.getElementById(`button${i*3+1}`);
    let btn2 = document.getElementById(`button${i*3+2}`);
    let btn3 = document.getElementById(`button${i*3+3}`);
    

        btn1.onclick =function (){ console.log("ok");
            btn1.classList.add("red");
            btn2.classList.add("blue");
            TorF.appendChild(false1);
            true_is.appendChild(success2);
            target.classList.add("box");
            TorF.classList.add("ansF");
            button1.classList.add("finish");
            button2.classList.add("finish");
            button3.classList.add("finish"); 
        };

        btn2.onclick = () => {
            btn2.classList.add("blue");
            TorF.appendChild(success1);
            true_is.appendChild(success2);
            target.classList.add("box");
            TorF.classList.add("ansT");
            button1.classList.add("finish");
            button2.classList.add("finish");
            button3.classList.add("finish");
        };

        btn3.onclick = () => {
            btn2.classList.add("blue");
            btn3.classList.add("red");
            TorF.appendChild(false1);
            true_is.appendChild(success2);
            target.classList.add("box");
            TorF.classList.add("ansF");
            button1.classList.add("finish");
            button2.classList.add("finish");
            button3.classList.add("finish");
        };
    // let btn1 = document.getElementById(`button${i*3+j+1}`);
    // btn1.onclick = () => { 
    //     btn1.classList.add("red");
    //     btn2.classList.add("blue");
    //     TorF.appendChild(false1);
    //     true_is.appendChild(success2);
    //     target.classList.add("box");
    //     TorF.classList.add("ansF");
    //     button1.classList.add("finish");
    //     button2.classList.add("finish");
    //     button3.classList.add("finish");
    
};
// click_space.innerHTML = id_NAME;

// loop1.innerHTML = main_contents;
