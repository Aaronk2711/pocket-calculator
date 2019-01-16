var completed = false;
var display = "0";
var total = "0";

do {

function button1() {
  console.log(display);
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "1";
  display = document.getElementById("display").innerHTML;
}

function button2() {
  display = display.toString();
  console.log("trial1", display);
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "2";
  display = document.getElementById("display").innerHTML;
}

function button3() {
  display = display.toString();
  console.log("trial2", display);
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "3";
  display = document.getElementById("display").innerHTML;
}

function button4() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "4";
  display = document.getElementById("display").innerHTML;
}

function button5() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "5";
  display = document.getElementById("display").innerHTML;
}

function button6() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "6";
  display = document.getElementById("display").innerHTML;
}

function button7() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "7";
  display = document.getElementById("display").innerHTML;
}

function button8() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "8";
  display = document.getElementById("display").innerHTML;
}

function button9() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "9";
  display = document.getElementById("display").innerHTML;
}

function button0() {
  if (display === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "0";
  display = document.getElementById("display").innerHTML;
}

function add() {
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    if (total === "0") {
      extraWipe();
    }
    total += display;
    total += "+";
    document.getElementById("total").innerHTML = total;
    clean();

  }

function subtract() {
     total = document.getElementById("total").innerHTML;
     total = total.toString();
     if (total === "0") {
       extraWipe();
     }
     total += display;
     total += "-";
     document.getElementById("total").innerHTML = total;
   }

function multiply() {
      total = document.getElementById("total").innerHTML;
      total = total.toString();
      if (total === "0") {
        extraWipe();
      }
      total += display;
      total += "*";
      document.getElementById("total").innerHTML = total;
    }

function divide() {
       total = document.getElementById("total").innerHTML;
       total = total.toString();
       if (total === "0") {
         extraWipe();
       }
       total += display;
       total += "/";
       document.getElementById("total").innerHTML = total;
     }

function decimal() {
  display = document.getElementById("display").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += ".";
  display = document.getElementById("display").innerHTML;
}

function wipe() {
  document.getElementById("display").innerHTML = "";
}

function extraWipe() {
  document.getElementById("total").innerHTML = "";
}

function clean() {
  document.getElementById("display").innerHTML = "";
  document.getElementById("display").innerHTML = "0";
}

function extraClean() {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("total").innerHTML = "0";
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
    total += display;
    document.getElementById("total").innerHTML = total;
    if ((Number.isNaN(total)) || (total === null) || (total === undefined) || (total === "Infinity")){
      document.getElementById("display").innerHTML = "Sorry, that is not a valid operation"
    }
    console.log(total);
    console.log(eval(total));
    document.getElementById("display").innerHTML = eval(total);



    completed = true;
  }


/*function pi() {
  document.getElementById("display").textContent += "π";
}*/

} while(completed = false)
