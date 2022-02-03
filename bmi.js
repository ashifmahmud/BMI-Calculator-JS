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
  }
  else if(bmi>=18.6 && bmi<=24.9){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "green";
  }
  else{
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "red";
  }

  

}