function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 
function form()
{
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('fname').value;
    if(!name.match(regName)){
        alert('Cannot take a number as starting letter.');
        document.getElementById('fname').focus();
        return false;

    }else{
        alert('Valid name given.');
        return true;
    }
      
}
function palindrome("str")
{
a=true;
for(let i=0; j=str.length-1;i<=j;i++,j--)
{
if(str[i] !==str[j])
{
a=false;
break;
}
}
return a;
}
function valid()
{
r=document.getElementById("t").value;
b=palindrome(str);
alert(b);
}
