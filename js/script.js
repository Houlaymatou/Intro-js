/*
@title - Calculator
@author - Houlay
@date - 06/06/2016
*/
// instance variable
console.log("Hello world");
var x = 23;
var y = 10;
console.log(x * y);
var testVariable = 10;
var testVariable2 = 20;
var testVariable3 = testVariable * testVariable2;
//var nom = prompt("Entrez votre nom");
//var prenom = prompt("Entrez votre prenom");
var chiffre1 = Number(prompt("Entrez un nombre"));
var chiffre2 = Number(prompt("Entrez un nombre"));
var operateur = prompt("Entrez operateur");
//function

if( operateur === '+')
     {
       console.log(chiffre1 + chiffre2);
    }
else if (operateur === '-')
    {
      console.log(chiffre1 - chiffre2); 
   }
 else if (operateur === '*')
 	 {
 	 	console.log(chiffre1 * chiffre2);
 	 }
 else if (operateur === '/') 
    {
       console.log(chiffre1 / chiffre2);
    }
 else if (operateur === '%')
    {
       console.log(chiffre1 % chiffre2);
    }
    else {
    	console.log("ce n'est pas un nombre");
    }
//script body
//console.log(testVariable3);

//console.log("Bonjour "+ nom +" "+ prenom +" bienvenue");