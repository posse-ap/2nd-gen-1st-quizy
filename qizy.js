const kouwa = document.getElementById("button0");
const takawa = document.getElementById("button1");
const takanawa = document.getElementById("button2");
const resultaccess = document.getElementById("result");
const setumeiaccess = document.getElementById("setumei");
const resultboxaccess = document.getElementById("resultbox");
const forunrepeat = document.getElementsByClassName("aaa1");
const unrepeatId = "val";

kouwa.onclick =function(){
  kouwa.classList.add("redbox");
  takanawa.classList.add("bluebox");
  resultboxaccess.classList.add("resultbox");
  resultaccess.appendChild(document.createTextNode("不正解！"));
  setumeiaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
}
takawa.onclick =function(){
  takawa.classList.add("redbox");
  takanawa.classList.add("bluebox");
  resultboxaccess.classList.add("resultbox");
  resultaccess.appendChild(document.createTextNode("不正解！"));
  setumeiaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
}

takanawa.onclick =function(){
  resultaccess.appendChild(document.createTextNode("正解！"));
  setumeiaccess.appendChild(document.createTextNode("正解は「たかなわ」です！"));
  takanawa.classList.add("bluebox");
  resultboxaccess.classList.add("resultbox");
  resultaccess.classList.remove("result2");
}
 
//ボタンを押した結果が切れない

//結果の正解or不正解に下線を引けない


