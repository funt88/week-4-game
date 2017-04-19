$( document ).ready(function(){
 var Random=Math.floor(Math.random()*101+19)
 
 $('#randomNumber').text(Random);

 var amber= Math.floor(Math.random()*11+1)
 var blood= Math.floor(Math.random()*11+1)
 var heart= Math.floor(Math.random()*11+1)
 var star= Math.floor(Math.random()*11+1)
 var emerald= Math.floor(Math.random()*11+1)

 var userTotal= 0;
 var wins= 0;
 var losses = 0;
 
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
     Random=Math.floor(Math.random()*101+19);
     console.log(Random)
     $('#randomNumber').text(Random);
    amber= Math.floor(Math.random()*11+1);
    blood= Math.floor(Math.random()*11+1);
    heart= Math.floor(Math.random()*11+1);
    star= Math.floor(Math.random()*11+1);
    emerald= Math.floor(Math.random()*11+1);
     userTotal= 0;
     $('#finalTotal').text(userTotal);
     }

function win(){
alert("Congradulations! You won!");
 wins++;
 $('#numberWins').text(wins);
 $("tada").play();
 reset();
}

function lose(){
alert ("You lose!");
 losses++;
 $('#numberLosses').text(losses);
 reset()
}

 $('#amber').on ('click', function(){
   userTotal = userTotal + amber;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
         
       if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }  
 })  
 $('#blood').on ('click', function(){
   userTotal = userTotal + blood;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
       if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 })  
 $('#heart').on ('click', function(){
   userTotal = userTotal + heart;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);

         if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 })  
 $('#star').on ('click', function(){
   userTotal = userTotal + star;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
     
         if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 })
 $('#emerald').on ('click', function(){
   userTotal = userTotal + emerald;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);

         if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 });  
});