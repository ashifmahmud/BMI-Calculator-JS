document.getElementById("submit").addEventListener("click",bmiCalculator);

function bmiCalculator(){
  var cm = parseFloat(document.getElementById("cm").value);
  var kg = parseInt(document.getElementById("kg").value);


  if(cm<10){
    var n = (cm + "").split(".");
    
    cm = (parseInt(n[0])*12+ parseInt(n[1]))*2.54;

    console.log(cm);
  }
  var bmi;

  var newCm = parseFloat(cm/100);

  bmi = kg/(newCm * newCm);

  bmi = bmi.toFixed(1);

  if(bmi<18.6){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "yellow";
    document.getElementById("comment").innerHTML = "Under weight, eat healthy!";
  }
  else if(bmi>=18.6 && bmi<=24.9){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "green";
    document.getElementById("comment").innerHTML = "Wow! you are so fit!";
  }
  else if(bmi>24.9 && bmi<=29.9){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "red";
    document.getElementById("comment").innerHTML = "Diet and workout is fun you know?";
  }
  else{
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "#BE1600";
    document.getElementById("comment").innerHTML = "Watch out for yourself! ";
  }

  

}