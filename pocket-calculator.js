function button1() {
  document.getElementById("result").textContent += "1";
}

function button2() {
  document.getElementById("result").textContent += "2";
}

function button3() {
  document.getElementById("result").textContent += "3";
}

function button4() {
  document.getElementById("result").textContent += "4";
}

function button5() {
  document.getElementById("result").textContent += "5";
}

function button6() {
  document.getElementById("result").textContent += "6";
}

function button7() {
  document.getElementById("result").textContent += "7";
}

function button8() {
  document.getElementById("result").textContent += "8";
}

function button9() {
  document.getElementById("result").textContent += "9";
}

function button0() {
  document.getElementById("result").textContent += "0";
}

function add() {
  document.getElementById("result").textContent += "+";
}

function subtract() {
  document.getElementById("result").textContent  += "-";
}

function multiply() {
  document.getElementById("result").textContent += "*";
}

function divide() {
  document.getElementById("result").textContent += "/";
}



/*function pi() {
  document.getElementById("result").textContent += "π";
}*/

function clear() {
  document.getElementById("result").innerHTML = "";
}


function equals() {
  let answer = document.getElementById("result").innerHTML;
  console.log('1', answer);
  document.getElementById("result").innerHTML = eval(answer);
  console.log('2', answer);
}
