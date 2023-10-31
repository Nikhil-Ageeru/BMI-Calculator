
function printOutput(){
 var feets=parseInt(document.getElementById("feet").value);
 var inches=parseInt(document.getElementById("inch").value);
 var height=feets*0.3040+inches*0.0254;    
 var weight=parseInt(document.getElementById("weight").value);

// converting kgs to pounds

var result=(weight)/Math.pow(height,2);
 result=parseFloat(result);
    document.getElementById("indexValue").textContent=result.toFixed(2);


    if(result<=18.5){
        document.getElementById("scaleIndicator").style.left="5%";
    }
    else if(result>18.5 && result<=24.9){
        document.getElementById("scaleIndicator").style.left="25%";
    }
    else if(result>25 && result<=29.9){
        document.getElementById("scaleIndicator").style.left="50%";
    }
    else {
        document.getElementById("scaleIndicator").style.left="90%";
    }
   
}

