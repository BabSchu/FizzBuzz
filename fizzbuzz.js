
function FizzBuzz (x,y) {
    var x = document.getElementById("fizzvalue").value;
    var y = document.getElementById("buzzvalue").value;
    var text = "";
    var i;
    for (i = 1; i < 101; i++) {
    if(i % x == 0 && i % y == 0) {text +="FizzBuzz"+"<br>";}
    else if (i % x == 0) {text +="Fizz"+" ";}
    else if (i % y == 0) {text+= "Buzz"+" ";}
    else {text += " " + i + " ";}
    }
    document.getElementById("result").innerHTML = text;
  }