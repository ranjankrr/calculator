var Sum = 0;
function getInput(i){
    const x = i;
   
    if(x==='='){
      document.getElementById("btn").value=eval(document.getElementById("btn").value);

    }else if(x==='+' || x==='-' || x==='*' ||x==='/' ||x==='%'){
         if(Sum===0){
            document.getElementById("btn").value +=i;
             Sum=1;
         }
    }else if(x==='AC'){
      document.getElementById("btn").value="";
    }else{
       document.getElementById("btn").value +=i;
       Sum=0;
    }
}
 