var completed = false;
var answer;

do {

function button1() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "1";
  //answer = document.getElementById("result").innerHTML;
}

function button2() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "2";
  //answer = document.getElementById("result").innerHTML;
}

function button3() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "3";
  //answer = document.getElementById("result").innerHTML;
}

function button4() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "4";
  //answer = document.getElementById("result").innerHTML;
}

function button5() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "5";
  //answer = document.getElementById("result").innerHTML;
}

function button6() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "6";
  //answer = document.getElementById("result").innerHTML;
}

function button7() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "7";
  //answer = document.getElementById("result").innerHTML;
}

function button8() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "8";
  //answer = document.getElementById("result").innerHTML;
}

function button9() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "9";
  //answer = document.getElementById("result").innerHTML;
}

function button0() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "0";
  //answer = document.getElementById("result").innerHTML;
}

function add() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "+";
  //answer = document.getElementById("result").innerHTML;
}

function subtract() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent  += "-";
  //answer = document.getElementById("result").innerHTML;
}

function multiply() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "*";
  //answer = document.getElementById("result").innerHTML;
}

function divide() {
<<<<<<< HEAD
  answer = document.getElementById("result").innerHTML;
  answer = answer.toString();
=======
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
  document.getElementById("result").textContent += "/";
  //answer = document.getElementById("result").innerHTML;
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
  //answer = document.getElementById("result").innerHTML;
}

function negate() {
  answer = document.getElementById("result").innerHTML;
<<<<<<< HEAD
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
=======
  answer = answer * -1;
  if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer = "/0") || (answer[1,2] = "**") || (answer[1,2] = "++") || (answer[1,2] == "--"))){
>>>>>>> af2cd2a76c8c0d9b3832077faa31fdf4cd9e5a84
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
