var s=" "
i=1;
var b=Math.floor((Math.random()*100)+1)
document.getElementById("check").onclick= function()
{
    var a= parseInt(document.getElementById("n1").value);
    
    if(a>b)
    {
        ans=i+" try with smaller";
        i++;
        document.getElementById("result").textContent= ans;
    }
    else if(a<b)
    {
        ans=i+" try with larger";
        i++;
        document.getElementById("result").textContent= ans;
    }
    else if(a==b)
    {
        ans=" you passed game in "+ i +"times";
        document.getElementById("result").textContent= ans;
    }
  
}