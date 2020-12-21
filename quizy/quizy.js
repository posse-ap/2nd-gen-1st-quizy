'use strict'

const a1js= document.getElementById('a1-js');
const a2js = document.getElementById('a2-js');
const a3js = document.getElementById('a3-js');
const resultaccess = document.getElementById('quiz-result');
const explainaccess = document.getElementById('explain');
const titleaccess = document.getElementById('quiz-result-title');



    a1js.onclick = function(){
      console.log('ok');
      a1js.classList.add("success");
      resultaccess.classList.add("quiz-result");
      titleaccess.appendChild(document.createTextNode("正解！"));
      titleaccess.classList.add("quiz-result-title-succeeded");
      explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
      a1js.stopPropagation();
    };

    a2js.onclick = function(){
      a2js.classList.add("fail");
      a1js.classList.add("success");
      resultaccess.classList.add("quiz-result");
      titleaccess.appendChild(document.createTextNode("不正解！"));
      titleaccess.classList.add("quiz-result-title-failed");
      explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
    };

    a3js.onclick = function(){
      a3js.classList.add("fail");
      a1js.classList.add("success");
      resultaccess.classList.add("quiz-result");
      titleaccess.appendChild(document.createTextNode("不正解！"));
      titleaccess.classList.add("quiz-result-title-failed");
      explainaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
    };

    function stopAction(e) {
        e.preventDefault();
      }
    
      const check1 = document.getElementById("a1js");
      check1.addEventListener("click", function (e) {
        stopAction(e);
      });