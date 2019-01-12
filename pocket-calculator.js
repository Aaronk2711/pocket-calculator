var completed = false;
var answer;

do {

function button1() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "1";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button2() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "2";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer
  }
}

function button3() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "3";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button4() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "4";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button5() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "5";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button6() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "6";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button7() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "7";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button8() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "8";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button9() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "9";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function button0() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "0";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function add() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "+";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }

}

function subtract() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent  += "-";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function multiply() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "*";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function divide() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += "/";
  answer = document.getElementById("result").innerHTML;
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
}

function decimal() {
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
  document.getElementById("result").textContent += ".";
  answer = document.getElementById("result").innerHTML;
}

  function comma() {
  let i;
  for(i = 0; i < answer.length; i++) {
    if(answer[i] === ",") {
      answer = answer.substring(0, i) + answer.substring(i + 1);
      i--;
    } else if(answer[i] === ".") {
        break;
    }
  }
  if(i > 3) {
    for(let j = i - 3; j > 0; j -= 3) {
      answer = answer.substring(0, j) + "," + answer.substring(j);
    }
  }
  //if (answer[1,2,3,4] = ",,,," {
    //clean();
  //}
}

//<p id="result">
//,
//  ,   ,   ,  2</p>

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
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }

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
  if (answer.length > 3) {
    comma();
    document.getElementById("result").innerHTML = answer;
  }
  }
}

  function equals() {
    answer = document.getElementById("result").innerHTML;
    if ((Number.isNaN(answer)) || (answer == null) || (answer == undefined) || (answer === "Infinity" || (answer === "/0") || (answer === "**") || (answer === "++") || (answer === "--"))){
      document.getElementById("result").innerHTML = "Sorry, that is not a valid operation"
    }

    else {
    document.getElementById("result").innerHTML = eval(answer);
    if (answer.length > 3) {
      comma();
      document.getElementById("result").innerHTML = answer;
    }
    }
    completed = true;
  }


/*function pi() {
  document.getElementById("result").textContent += "π";
}*/

} while(completed = false)
