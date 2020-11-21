'use strict';

{

  const target1 = document.getElementById("target1");
  const target2 = document.getElementById("target2");
  const target3 = document.getElementById("target3");
  const success = document.getElementById("success");
  const successText = document.getElementById("successText");
  const successNode1 = document.createTextNode('正解!');
  const successNode2 = document.createTextNode('正解は「たかなわ」です!');
  const falseNode1 = document.createTextNode('不正解!');
  const falseNode2 = document.createTextNode('正解は「たかなわ」です!');
  
  
  target1.addEventListener('click',() => {
    target1.classList.add("color-blue");
  });
  
  target2.addEventListener('click',() => {
    target1.classList.add("color-blue");
    target2.classList.add("color-red");
  });
  
  target3.addEventListener('click',() => {
    target1.classList.add("color-blue");
    target3.classList.add("color-red");
  });
  
  
  target1.onclick = function(){
    const div = document.getElementById('target');
    div.classList.add("target");
    
    success.appendChild(successNode1);
    success.classList.add("success");

    successText.appendChild(successNode2);
  }
  target2.onclick = function(){
    const div = document.getElementById('target');
    div.classList.add("target");
    
    success.appendChild(falseNode1);
    success.classList.add("false");

    successText.appendChild(falseNode2);
  }

  target3.onclick = function(){
    const div = document.getElementById('target');
    div.classList.add("target");
    
    success.appendChild(falseNode1);
    success.classList.add("false");

    successText.appendChild(falseNode2);
  }

  // target2.onclick = function(){
  //   const div = document.getElementById('target');
  //   div.classList.add("target");
    
  //   success.appendChild(textNode1);
  //   success.classList.add("success");

  //   successText.appendChild(textNode2);
  // }

  // target3.onclick = function(){
  //   const div = document.getElementById('target');
  //   div.classList.add("target");
    
  //   success.appendChild(textNode1);
  //   success.classList.add("success");

  //   successText.appendChild(textNode2);
  // }

  






}