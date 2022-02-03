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
  
  var uw = ["Under weight, eat healthy!","Don't fly away with wind!","Lighter than a feather!","Let's go eat something heavy!","Wanna fly?"];
  var fit=["Wow! You are so fit!", "Thanks for being fit!","You are fit like a model!","Atta boy! So fit!","You rock!"];
  var ow = ["Diet and workout is fun you know?", "Let's not eat fats!","You know what's great food? Salad and vegetables!", "Let's go for a 5 mile walk!","I love burger & pizza too but let's avoid it."];
  var ob = ["Watch out for yourself! ","Be careful!", "Your heart is sad, let's go workout!", "Diet is the very sexy!", "Bro! Go workout!"];

  var x = Math.floor(Math.random()*5);
  
  if(bmi<18.6){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "yellow";
    document.getElementById("comment").innerHTML = uw[x];
  }
  else if(bmi>=18.6 && bmi<=24.9){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "green";
    document.getElementById("comment").innerHTML = fit[x];
    
  }
  else if(bmi>24.9 && bmi<=29.9){
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "red";
    document.getElementById("comment").innerHTML = ow[x];
  }
  else{
    document.getElementById("result").innerHTML = bmi;
    document.getElementById("result").style.color = "#BE1600";
    document.getElementById("comment").innerHTML = ob[x];
  }

  

}