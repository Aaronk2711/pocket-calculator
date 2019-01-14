var completed = false;
var display;
var total;

do {

function button1() {
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "1";
  display = document.getElementById("display").innerHTML;
}

function button2() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "2";
  display = document.getElementById("display").innerHTML;
}

function button3() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "3";
  display = document.getElementById("display").innerHTML;
}

function button4() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "4";
  display = document.getElementById("display").innerHTML;
}

function button5() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "5";
  display = document.getElementById("display").innerHTML;
}

function button6() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "6";
  display = document.getElementById("display").innerHTML;
}

function button7() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "7";
  display = document.getElementById("display").innerHTML;
}

function button8() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "8";
  display = document.getElementById("display").innerHTML;
}

function button9() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "9";
  display = document.getElementById("display").innerHTML;
}

function button0() {
  if (display = "") {
    document.getElementById("display").innerHTML = "0";
  }
  display = document.getElementById("total").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += "0";
  display = document.getElementById("display").innerHTML;
}

function add() {
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    total += "+";
    document.getElementById("display").innerHTML = "";
    document.getElementById("total").innerHTML = total;
  }

function subtract() {
     total = document.getElementById("total").innerHTML;
     total = total.toString();
     total += display;
     total += "-";
     document.getElementById("display").innerHTML = "";
     document.getElementById("total").innerHTML = total;
   }

function multiply() {
      total = document.getElementById("total").innerHTML;
      total = total.toString();
      total += display;
      total += "*";
      document.getElementById("display").innerHTML = "";
      document.getElementById("total").innerHTML = total;
    }

function divide() {
       total = document.getElementById("total").innerHTML;
       total = total.toString();
       total += display;
       total += "/";
       document.getElementById("display").innerHTML = "";
       document.getElementById("total").innerHTML = total;
     }

function decimal() {
  display = document.getElementById("display").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += ".";
  display = document.getElementById("display").innerHTML;
}

function zero() {
  document.getElementById("display").innerHTML = "0";
}

function clean() {
  document.getElementById("display").innerHTML = "";
}

function negate() {
  display = document.getElementById("display").innerHTML;
  display = eval(display) * -1;
  if ((Number.isNaN(display)) || (display === "Infinity" || (display === "/0") || (display[1,2] === "**") || (display[1,2] === "++") || (display[1,2] === "--"))){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("display").innerHTML = eval(display);
  if (display.length > 3) {
    comma();
    document.getElementById("display").innerHTML = display;
  }

  }
}

function percentage() {
  display = document.getElementById("display").innerHTML;
  display = eval(display);
  display = display / 100;
  if ((Number.isNaN(display)) || (display === "Infinity" || (display === "/0") || (display[1,2] === "**") || (display[1,2] === "++") || (display[1,2] === "--"))){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("display").innerHTML = eval(display);
  if (display.length > 3) {
    comma();
    document.getElementById("display").innerHTML = display;
  }
  }
}

  function equals() {
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    //if ((Number.isNaN(total)) || (total === null) || (total === undefined) || (total === "Infinity")){
      //document.getElementById("display").innerHTML = "Sorry, that is not a valid operation"
    //}

    //else {
    document.getElementById("display").innerHTML = eval(total);
  //  if (total.length > 3) {
    //  document.getElementById("display").innerHTML = display;
    //}
    //}
    completed = true;
  }


/*function pi() {
  document.getElementById("display").textContent += "π";
}*/

} while(completed = false)
