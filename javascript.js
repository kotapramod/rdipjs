
         function dis(val) 
         { 
             document.getElementById("result").value+=val 
}

         function sqrt(){
                document.getElementById("result").value=Math.sqrt();
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
