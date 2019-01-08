var completed = false;
var answer;

do {

function button1() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "1";

}

function button2() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "2";

}

function button3() {
  document.getElementById("result").textContent += "3";
}

function button4() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "4";

}

function button5() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "5";

}

function button6() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "6";

}

function button7() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "7";

}

function button8() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "8";

}

function button9() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "9";

}

function button0() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "0";

}

function add() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "+";

}

function subtract() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent  += "-";

}

function multiply() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "*";

}

function divide() {
  if (document.getElementById("result").innerHTML = "Sorry, that is not a valid operation.") {
    clean();
  }
  document.getElementById("result").textContent += "/";

}

function clean() {
  document.getElementById("result").innerHTML = "";
  answer = document.getElementById("result").innerHTML;
}

function negate() {
  answer = answer * -1;
  if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer = "/0") || (answer[1,2] = "**") || (answer[1,2] = "++") || (answer[1,2] == "--"))){
    document.getElementById("result").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("result").innerHTML = eval(answer);
  }
}

  function equals() {

    answer = document.getElementById("result").innerHTML;
    if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer = "/0") || (answer = "**") || (answer = "++") || (answer[1,2] == "--"))){
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
