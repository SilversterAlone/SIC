function compute()
{
    // References to the point elements we wish to validate
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var year=new Date().getFullYear()+parseInt(years);
    var interest=principal*years*rate/100; 
    if(principal > 0 )
    {
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+",\</mark\> \<br>at an interest rate of \<mark\>"+rate+"% \</mark\>\ <br> You will receive an amount of \<mark\>"+interest+"\</mark\>\, <br> in the year \<mark\>"+year+" \</mark\>\ <br>."
    } else 
    {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    // Results with explanation of ever input used
}
function updateRate(){
    var rateval=document.getElementById("rate").value;document.getElementById("rate_val").innerHTML=rateval;
}
