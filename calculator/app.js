
//  =================> CALCULATOR <=================
{
var inputValue = document.getElementById("inp");
var answer = document.getElementById("inpTwo")

// add operator
function opr(opr){
    var a = inputValue.value.charAt(inputValue.value.length - 1)
    if(answer.value !== ""){
        inputValue.value += answer.value
        answer.value = ""
    }

    if(a === "*" ||a === "+" || a=== "-" || a === "/" || a=== "%" || inputValue.value === ""){
        
        opr = "";
      
    }
     
    else{
        inputValue.value += opr;
    }
    }

// add value
function addVal(val){
    if(answer.value !== ""){
        answer.value = "";
        inputValue.value += val;
    }
    else{

        inputValue.value += val;
    }
}

// delete function

function del(){
    inputValue.value = inputValue.value.slice(0, -1)
}
// All Clear
function clearval(){
    inputValue.value = "";
    answer.value = ""
}

// evaluate 

function calculate(){
    var a = inputValue.value.charAt(inputValue.value.length - 1)
    if(a === "*" ||a === "+" || a=== "-" || a === "/" || a=== "%" || inputValue.value === ""){
        
        inputValue.value = inputValue.value.slice(0, -1)    
        answer.value = eval(inputValue.value)
        inputValue.value = ""
    }
    else{
        answer.value = eval(inputValue.value)
        inputValue.value = ""

    }
    
}

}



