function compute()
{
    
    principal = document.getElementById("principal").value;
    if (principal <=0){ 
          alert("Enter a positive number");
    }
    else 
    {     
        rate = document.getElementById("rate").value;
        //get current date and store to variable d
     var d = new Date();
     // store number form of the year to variable n
       var n = d.getFullYear();
      //convert years to number
      years = parseInt(document.getElementById("years").value);
     interest = String(principal * years * rate / 100);
      var nyears =String(years+n);  
  
     document.getElementById("disp").innerHTML ="If you deposit " +principal.bold()+"," + "<br>"
             +"at an interest rate of " +rate.bold()+"."
             + "<br>" +"You will receive an amount of  " +interest.bold()+"," + "<br>"
                + "in the year "+ nyears.bold() +".";

    }
}
function show_value(x)
{
 document.getElementById("rateid").innerHTML=x;
}
