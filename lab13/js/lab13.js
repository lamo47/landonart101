for (var num=0; num <=200; num++) {
  if (num%15 ==0) {
    console.log("FizzBuzz");
  }
  else if (num%3 ==0) {
    console.log("Fizz");
  }
  else if (num%4 ==0) {
    console.log("Buzz");
  }
  else if (num%5 ==0) {
    console.log("Boom");
  }
  else if (num%7 ==0) {
    console.log("Bang");
  }
  else {
    console.log(num);
  }
}
function fizzBuzzBoom(maxNums, factorObj) {
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
      if (num % factor ==0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}
document.getElementById("submit").addEventListener("click", function() {
  var num = fizzBuzzBoom();
  newText = num
  document.getElementById("output").innerHTML = newText;
})
