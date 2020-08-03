 
     //display block or not
     function displayBlock(number,displayValue){
        document.getElementById(number).style.display=displayValue;
      }

       //detect tag
       function detectTag(name){
        var selectTag= document.getElementById(name); 
        return selectTag;
       }

     //generate pin handlar.
     function generatePinHandler(){
         var randomNumber=Math.round(Math.random()*10000);
         var inputNumber=detectTag('generate-pin-number');
        inputNumber.value=randomNumber;
        displayBlock('match',"none");
        displayBlock('doesnot-match',"none");
     }

     //display number handler
     function displayNumber(number){
        var totalNumber=detectTag('display-number');
       totalNumber.value=totalNumber.value+number;
     }

     //remove display number
     function removeDisplayNumber(countRemove){
        if(countRemove==1){
            document.getElementById('display-number').value="";
        }
        if(countRemove==0){
            const currentNumber=detectTag('display-number').value;
           const changeNumber=currentNumber.slice(0,-1);
           document.getElementById('display-number').value=changeNumber;

        }
     }
      
    //empty value for input tag
    function emptyValue(number){
        document.getElementById(number).value="";
    }
    
     //submit handler
     function submitHandler(){
         const generateNumber=parseInt(detectTag('generate-pin-number').value);
         const inputNumber=parseInt(detectTag('display-number').value);
         if(generateNumber==inputNumber){
             displayBlock('match',"block");
         }
         if(generateNumber!=inputNumber){
             displayBlock('doesnot-match',"block");
         }
         emptyValue('display-number');
         emptyValue('generate-pin-number');
     }