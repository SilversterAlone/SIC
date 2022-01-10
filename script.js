
function updateRate(){
    var rateval=document.getElementById("rate").value;document.getElementById("rate_val").innerHTML=rateval;
}
function checkdata(){
    event.preventDefault();
    var principal=document.getElementById("principal");
    //Check if principal has 0 or negative input
        if(principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    //If all is well return true
    } return true;
} 
function compute(){
    // References to the point elements we wish to validate
    var principal=document.getElementById("principal").value
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var years=new Date().getFullYear()+parseInt(years);
    var interest=principal*years*rate/100;
    
    // Displaying interest rate after calculations 
    var int=document.getElementById("int").value;document.getElementById("int").innerHTML=interest;
    
    // Results with explanation of ever input used
    var result=document.getElementById("result").value;document.getElementById("result").innerHTML="If you deposit "+principal+", <br>at an interest rate of "+rate+"% <br> You will receive an amount of "+interest+", <br> in the year "+years+" <br>";
}