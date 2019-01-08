var completed = false;
var answer;

do {

function button1() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "1";
  answer = document.getElementById("result").innerHTML;
}

function button2() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "2";
  answer = document.getElementById("result").innerHTML;
}

function button3() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "3";
  answer = document.getElementById("result").innerHTML;
}

function button4() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "4";
  answer = document.getElementById("result").innerHTML;
}

function button5() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "5";
  answer = document.getElementById("result").innerHTML;
}

function button6() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "6";
  answer = document.getElementById("result").innerHTML;
}

function button7() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "7";
  answer = document.getElementById("result").innerHTML;
}

function button8() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "8";
  answer = document.getElementById("result").innerHTML;
}

function button9() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "9";
  answer = document.getElementById("result").innerHTML;
}

function button0() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "0";
  answer = document.getElementById("result").innerHTML;
}

function add() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "+";
  answer = document.getElementById("result").innerHTML;
}

function subtract() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent  += "-";
  answer = document.getElementById("result").innerHTML;
}

function multiply() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "*";
  answer = document.getElementById("result").innerHTML;
}

function divide() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "/";
  answer = document.getElementById("result").innerHTML;
}

function decimal() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += ".";
  answer = document.getElementById("result").innerHTML;
}

function clean() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").innerHTML = "";
  answer = document.getElementById("result").innerHTML;
}

function negate() {
  answer = document.getElementById("result").innerHTML;
  answer = eval(answer) * -1;
  if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer === "/0") || (answer[1,2] === "**") || (answer[1,2] === "++") || (answer[1,2] === "--"))){
    document.getElementById("result").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("result").innerHTML = eval(answer);
  }
}

function percentage() {
  answer = document.getElementById("result").innerHTML;
  answer = eval(answer);
  answer = answer / 100;
  if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer === "/0") || (answer[1,2] === "**") || (answer[1,2] === "++") || (answer[1,2] === "--"))){
    document.getElementById("result").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("result").innerHTML = eval(answer);
  }
}

  function equals() {
    answer = document.getElementById("result").innerHTML;
    if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer === "/0") || (answer === "**") || (answer === "++") || (answer[1,2] === "--"))){
      document.getElementById("result").innerHTML = "Sorry, that is not a valid operation"
    }

    else {
    document.getElementById("result").innerHTML = eval(answer);
    }
    completed = true;
  }


/*function pi() {
  document.getElementById("result").textContent += "π";
}*/

} while(completed = false)
