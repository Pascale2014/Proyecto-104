var y = Math.floor(Math.random() * 10+ 1);
  
var x = document.getElementById("guessField").value;  

if(x == y)
{
    alert("¡¡¡FELICIDADES!!!"+playername+"  LO ADIVINASTE BIEN " 
            + guess + " INTENTO " );
            guess= 1; 
}
else if(x > y) /* si el número adivinado es mayor que el número actual*/
{
    guess++;
    alert(" ¡OOPS LO SIENTO! INTENTA UN NÚMERO MÁS PEQUEÑO");
}
else{
    guess++;
    alert(" ¡OOPS LO SIENTO! INTENTA UN NÚMERO MÁS PEQUEÑO");
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}